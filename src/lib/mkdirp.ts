import fs from 'fs';

type MkTarget = string | string[];

const mkdirp = (inTarget: MkTarget | string[]) => {
  const isAry = Array.isArray(inTarget);
  if (!isAry) return fs.mkdirSync(inTarget, { recursive: true });

  inTarget.forEach((dir) => {
    fs.mkdirSync(dir, { recursive: true });
  });
};

export default mkdirp;
