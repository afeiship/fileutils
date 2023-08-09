import fs from 'fs';
import type { MakeDirectoryOptions } from 'fs';

const mkdir_p = (dir: string, options?: MakeDirectoryOptions) => {
  return fs.mkdirSync(dir, { recursive: true, ...options });
};

export default mkdir_p;
