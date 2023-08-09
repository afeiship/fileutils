import fs from 'fs';
import fg from 'fast-glob';
import type { Options } from 'fast-glob';

const defaults: Options = {
  dot: true,
  onlyFiles: true,
};

const ls = (src: string, options?: Options) => {
  if (!fs.existsSync(src)) throw new Error(`Path ${src} does not exist`);
  return fg.sync(['**/*'], { cwd: src, ...defaults, ...options });
};

export default ls;
