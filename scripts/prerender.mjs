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
    
    const chromium = (await import('@sparticuz/chromium')).default;
    const puppeteerCore = (await import('puppeteer-core')).default;

    let browser;
    // Check if we are in Vercel or local
    if (process.env.VERCEL || process.env.CI) {
      console.log('Running in Vercel/CI environment. Using Sparticuz Chromium...');
      browser = await puppeteerCore.launch({
        args: chromium.args,
        defaultViewport: chromium.defaultViewport,
        executablePath: await chromium.executablePath(),
        headless: chromium.headless,
      });
    } else {
      console.log('Running locally. Using standard Puppeteer...');
      browser = await puppeteer.launch({
        headless: "new",
        args: ['--no-sandbox', '--disable-setuid-sandbox']
      });
    }

    const page = await browser.newPage();

    // ── CRITICAL: Skip preloader during prerendering ────────────────────────
    // Our index.html inline script checks sessionStorage on every page load.
    // evaluateOnNewDocument injects code that runs BEFORE any page JS fires,
    // so the inline script sees preloaderShown=true and never adds the
    // 'js-preloading' blocking class. This means:
    //  1. The captured HTML has no blocking classes
    //  2. The preloader animation is never captured mid-frame
    //  3. networkidle0 fires faster (no 0.8s preloader animation to wait for)
    await page.evaluateOnNewDocument(() => {
      sessionStorage.setItem('preloaderShown', 'true');
    });

    for (const route of routes) {
      const url = `http://localhost:3000${route}`;
      console.log(`Prerendering ${route}...`);
      
      try {
        // Wait until network is idle to ensure GSAP, images, and data are loaded
        await page.goto(url, { waitUntil: 'networkidle0', timeout: 30000 });
        
        // Give Lenis/GSAP an extra 500ms to calculate layouts and hide preloader if any
        await new Promise(r => setTimeout(r, 500));

        let html = await page.content();

        // ── CRITICAL FIX ──────────────────────────────────────────────────────
        // Puppeteer returns the live DOM with absolute URLs resolved to
        // http://localhost:3000/... — these would 404 on Vercel/production.
        // Rewrite them back to root-relative paths so Vite's hashed assets
        // are served from the same origin as the deployment.
        html = html.replaceAll('http://localhost:3000/', '/');
        // ─────────────────────────────────────────────────────────────────────
        
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
