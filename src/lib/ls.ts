import fs from 'fs';
import fg from 'fast-glob';
import type { Options } from 'fast-glob';

type LsOptions = {
  source?: string | string[];
} & Options;

const defaults: LsOptions = {
  source: ['**/*'],
  dot: true,
  onlyFiles: true,
};

const ls = (src: string, options?: LsOptions) => {
  if (!fs.existsSync(src)) throw new Error(`Path ${src} does not exist`);
  const opts = { ...defaults, ...options };
  const { source, ...fgOptions } = opts;
  return fg.sync(opts.source!, { cwd: src, ...fgOptions });
};

export default ls;
