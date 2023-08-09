import fs from 'fs';
import path from 'path';

const cp_r = (src: string, dest: string) => {
  if (!src || !dest) throw new Error('src or dest is empty');

  const cpr = (srcPath, destPath) => {
    const stats = fs.statSync(srcPath);
    if (stats.isDirectory()) {
      if (!fs.existsSync(destPath)) {
        fs.mkdirSync(destPath);
      }

      const files = fs.readdirSync(srcPath);
      files.forEach((file) => {
        const srcFile = path.join(srcPath, file);
        const destFile = path.join(destPath, file);
        cpr(srcFile, destFile);
      });
    } else if (stats.isFile()) {
      fs.copyFileSync(srcPath, destPath);
    }
  };

  cpr(src, dest);
};

export default cp_r;
