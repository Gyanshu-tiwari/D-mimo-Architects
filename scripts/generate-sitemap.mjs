import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const publicPath = path.resolve(__dirname, '../public');
const distPath = path.resolve(__dirname, '../dist');

const domain = 'https://www.dmimoarchitects.com';

const routes = [
  { url: '/', priority: 1.0 },
  { url: '/about', priority: 0.8 },
  { url: '/projects', priority: 0.9 },
  { url: '/blog', priority: 0.7 },
  { url: '/contact', priority: 0.8 },
  { url: '/privacy-policy', priority: 0.3 },
  { url: '/terms-and-conditions', priority: 0.3 }
];

function generateSitemap() {
  const date = new Date().toISOString().split('T')[0];
  
  let xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`;

  for (const route of routes) {
    xml += `
  <url>
    <loc>${domain}${route.url}</loc>
    <lastmod>${date}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>${route.priority}</priority>
  </url>`;
  }

  xml += `\n</urlset>`;

  // Write to public folder (for future builds) and dist (for immediate use)
  fs.writeFileSync(path.join(publicPath, 'sitemap.xml'), xml);
  fs.writeFileSync(path.join(publicPath, 'robots.txt'), `User-agent: *
Allow: /

Sitemap: ${domain}/sitemap.xml`);

  console.log('✅ Sitemap and robots.txt generated successfully.');
}

generateSitemap();
