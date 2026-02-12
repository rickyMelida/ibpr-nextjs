#!/usr/bin/env node

/**
 * Script to copy static assets from original project
 * Run with: node scripts/copy-assets.js
 */

const fs = require('fs');
const path = require('path');

const SOURCE_DIR = path.join(__dirname, '../../ibpr.github.com');
const TARGET_DIR = path.join(__dirname, '../public');

const ASSETS_TO_COPY = [
  { from: 'images', to: 'images' },
  { from: 'css', to: 'css' },
  { from: 'fonts', to: 'fonts' },
];

function copyRecursive(src, dest) {
  if (!fs.existsSync(src)) {
    console.warn(`⚠️  Source directory not found: ${src}`);
    return false;
  }

  if (!fs.existsSync(dest)) {
    fs.mkdirSync(dest, { recursive: true });
  }

  const entries = fs.readdirSync(src, { withFileTypes: true });

  for (const entry of entries) {
    const srcPath = path.join(src, entry.name);
    const destPath = path.join(dest, entry.name);

    if (entry.isDirectory()) {
      copyRecursive(srcPath, destPath);
    } else {
      fs.copyFileSync(srcPath, destPath);
    }
  }

  return true;
}

console.log('📦 Copying static assets from original project...\n');

let successCount = 0;
let failCount = 0;

for (const asset of ASSETS_TO_COPY) {
  const sourcePath = path.join(SOURCE_DIR, asset.from);
  const targetPath = path.join(TARGET_DIR, asset.to);

  console.log(`Copying ${asset.from}...`);
  
  if (copyRecursive(sourcePath, targetPath)) {
    console.log(`✅ ${asset.from} copied successfully\n`);
    successCount++;
  } else {
    console.log(`❌ Failed to copy ${asset.from}\n`);
    failCount++;
  }
}

console.log('\n📊 Summary:');
console.log(`✅ Success: ${successCount}`);
console.log(`❌ Failed: ${failCount}`);

if (failCount === 0) {
  console.log('\n🎉 All assets copied successfully!');
  console.log('You can now run: npm run dev');
} else {
  console.log('\n⚠️  Some assets could not be copied. Please check the paths.');
}
