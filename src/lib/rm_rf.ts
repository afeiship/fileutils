import fs from 'fs';

const rm_rf = (src: string) => {
  return fs.rmSync(src, { recursive: true, force: true });
};

export default rm_rf;
