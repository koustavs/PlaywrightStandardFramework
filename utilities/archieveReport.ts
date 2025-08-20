/*import * as fs from 'fs';
import archiver from 'archiver';
import * as path from 'path';
 


const zipFile = (inputFilePath: string, outputZipPath: string): Promise<void> => {
  return new Promise((resolve, reject) => {
    const output = fs.createWriteStream(outputZipPath);
    const archive = archiver('zip', {
      zlib: { level: 9 }, // Best compression
    });
 
    output.on('close', () => {
      console.log(`Zipped ${archive.pointer()} total bytes`);
      resolve();
    });
    archive.on('error', (err) => reject(err));
    archive.pipe(output);
    // Add the file
    archive.file(inputFilePath, { name: path.basename(inputFilePath) });
    archive.finalize();
  });
};

zipFile('./test-results/storeConsole/index.html', './test-results.zip')*/