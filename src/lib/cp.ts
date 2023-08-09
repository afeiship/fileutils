import fs from 'fs';

const cp = (src: string, dest: string) => {
  return fs.copyFileSync(src, dest);
};

export default cp;
