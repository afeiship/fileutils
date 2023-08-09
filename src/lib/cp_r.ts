import fs from 'fs';
import fg from 'fast-glob';
import path from 'path';
import mkdir_p from './mkdir_p';

const cp_r = (src: string, dest: string) => {
  if (!src || !dest) throw new Error('src or dest is empty');

  // src -> file/dir
  const stat = fs.statSync(src);

  if (stat.isFile()) {
    mkdir_p(dest);
    const destFile = path.join(dest, path.basename(src));
    return fs.copyFileSync(src, destFile);
  }

  if (stat.isDirectory()) {
    const files = fg.sync(['**/*'], {
      cwd: src,
      dot: true,
      onlyFiles: true,
    });

    files.forEach((file) => {
      const srcFile = path.join(src, file);
      const destFile = path.join(dest, file);
      const destDir = path.dirname(destFile);
      mkdir_p(destDir);
      fs.copyFileSync(srcFile, destFile);
    });
  }
};

export default cp_r;
