import fs from 'fs';
import path from 'path';
import mkdir_p from './mkdir_p';
import rm_rf from './rm_rf';
import ls from './ls';

type CpROptions = {
  forceClean?: boolean;
};

const cp_r = (src: string, dest: string, options?: CpROptions) => {
  if (!src || !dest) throw new Error('src or dest is empty');

  if (options?.forceClean) rm_rf(dest);

  const stat = fs.statSync(src);

  if (stat.isFile()) {
    mkdir_p(dest);
    const destFile = path.join(dest, path.basename(src));
    return fs.copyFileSync(src, destFile);
  }

  if (stat.isDirectory()) {
    const files = ls(src);

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
