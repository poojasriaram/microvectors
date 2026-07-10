import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';
import sharp from 'sharp';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const publicDir = path.join(__dirname, 'public');

async function optimizeImages() {
  try {
    const files = await fs.readdir(publicDir);
    const pngs = files.filter(f => f.endsWith('.png') && !f.includes('icon') && !f.includes('favicon'));
    
    for (const file of pngs) {
      const inputPath = path.join(publicDir, file);
      const name = path.parse(file).name;
      
      console.log(`Processing ${file}...`);
      
      // Convert to WebP
      const webpPath = path.join(publicDir, `${name}.webp`);
      await sharp(inputPath)
        .webp({ quality: 80 })
        .toFile(webpPath);
      
      console.log(`Created ${name}.webp`);
    }
    console.log('All done!');
  } catch (error) {
    console.error('Error optimizing images:', error);
  }
}

optimizeImages();
