const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const dir = 'public/images/award';
const files = fs.readdirSync(dir).filter(f => f.endsWith('.webp'));

async function compress() {
  for (const file of files) {
    const filePath = path.join(dir, file);
    const tempPath = filePath + '.tmp';
    await sharp(filePath)
      .resize({ width: 1200, withoutEnlargement: true })
      .webp({ quality: 60, effort: 6 })
      .toFile(tempPath);
    fs.renameSync(tempPath, filePath);
    console.log(`Compressed ${file}`);
  }
}
compress();
