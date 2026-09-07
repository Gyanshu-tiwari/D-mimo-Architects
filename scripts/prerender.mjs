import puppeteer from 'puppeteer';
import express from 'express';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const distPath = path.resolve(__dirname, '../dist');

const routes = [
  '/',
  '/about',
  '/projects',
  '/blog',
  '/contact',
  '/privacy-policy',
  '/terms-and-conditions'
];

async function prerender() {
  console.log('Starting Express server for prerendering...');
  const app = express();
  
  // Serve static files from dist
  app.use(express.static(distPath));
  
  // Fallback to index.html for SPA routing
  app.use((req, res) => {
    res.sendFile(path.join(distPath, 'index.html'));
  });

  const server = app.listen(3000, async () => {
    console.log('Server listening on http://localhost:3000');
    console.log('Launching Puppeteer...');
    
    const browser = await puppeteer.launch({
      headless: "new",
      args: ['--no-sandbox', '--disable-setuid-sandbox']
    });

    const page = await browser.newPage();

    for (const route of routes) {
      const url = `http://localhost:3000${route}`;
      console.log(`Prerendering ${route}...`);
      
      try {
        // Wait until network is idle to ensure GSAP, images, and data are loaded
        await page.goto(url, { waitUntil: 'networkidle0', timeout: 30000 });
        
        // Give Lenis/GSAP an extra 500ms to calculate layouts and hide preloader if any
        await new Promise(r => setTimeout(r, 500));

        // Strip out script tags that shouldn't run again or let standard hydration take over
        // Actually, React 19 hydrateRoot handles standard markup well.
        const html = await page.content();
        
        // Write the HTML to the appropriate directory
        let outputPath = path.join(distPath, route);
        if (route !== '/') {
          fs.mkdirSync(outputPath, { recursive: true });
          outputPath = path.join(outputPath, 'index.html');
        } else {
          outputPath = path.join(distPath, 'index.html');
        }
        
        fs.writeFileSync(outputPath, html);
        console.log(`Successfully generated ${outputPath}`);
      } catch (err) {
        console.error(`Failed to prerender ${route}:`, err);
      }
    }

    await browser.close();
    server.close();
    console.log('Prerendering complete!');
  });
}

prerender();
