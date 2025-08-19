/*import fs from 'fs';
import { promisify } from 'util';
import zlib from 'zlib';
import archiver from 'archiver';
import { minify } from 'html-minifier-terser';
import * as path from 'path';

 
const APP = process.env.npm_config_APP;
const date = new Date();
const utcTimestamp = date.toUTCString(); // Example output: "Tue, 22 Apr 2025 14:30:00 GMT"
const ISOTimestamp =  date.toISOString().replace(/[-:.]/g, '').replace(/[T]/g, '_').slice(0, 13); // Example output: "2025-06-06_0919"

let Application = '';
    if (APP === 'storeConsole') {
      Application = 'StoreConsole';
    } else if (APP === 'storeFront') {
      Application = 'StoreFront';
    } else if (APP === 'NXP') {
      Application = 'NXP';
    }
    
const gzip = promisify(zlib.gzip);
const brotliCompress = promisify(zlib.brotliCompress);
 
const minifyHtml = async (inputPath: string): Promise<string> => {
  const html = fs.readFileSync(inputPath, 'utf-8');
  return await minify(html, {
    collapseWhitespace: true,
    removeComments: true,
    removeRedundantAttributes: true,
    useShortDoctype: true,
    minifyJS: true,
    minifyCSS: true
  });
};
 
const compressAndSave = async (data: string, filePath: string, method: 'gzip' | 'brotli') => {
  const buffer = Buffer.from(data);
  const compressed =
    method === 'gzip'
      ? await gzip(buffer, { level: 9 })
      : await brotliCompress(buffer, {
          params: {
            [zlib.constants.BROTLI_PARAM_QUALITY]: 11
          }
        });
 
  fs.writeFileSync(filePath, compressed);
  console.log(`Saved ${method.toUpperCase()} compressed file: ${filePath}`);
};
 
const zipFiles = (files: string[], outputZip: string): Promise<void> => {
  return new Promise((resolve, reject) => {
    const output = fs.createWriteStream(outputZip);
    const archive = archiver('zip', { zlib: { level: 9 } });
 
    output.on('close', () => {
      console.log(`ZIP created: ${outputZip} (${archive.pointer()} bytes)`);
      resolve();
    });
 
    archive.on('error', err => reject(err));
    archive.pipe(output);
 
    files.forEach(file => {
      archive.file(file, { name: path.basename(file) });
    });
 
    archive.finalize();
  });
};
 
const processHtml = async () => {
  const inputHtml = `./test-results/${APP}/index.html`;
  const minifiedHtml = await minifyHtml(inputHtml);
 
  const outHtml = `./TestReport_${Application}_${ISOTimestamp}.html`;
  const outGzip = `./TestReport_${Application}_${ISOTimestamp}.html.gz`;
 
  fs.writeFileSync(outHtml, minifiedHtml);
  await compressAndSave(minifiedHtml, outGzip, 'gzip');
};
 
processHtml();*/