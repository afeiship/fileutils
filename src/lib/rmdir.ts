import fs from 'fs';

type RmTarget = string | string[];

const rmdir = (inTarget: RmTarget) => {
  const isAry = Array.isArray(inTarget);
  if (!isAry) return fs.rmdirSync(inTarget, { recursive: true });

  inTarget.forEach((dir) => {
    fs.rmdirSync(dir, { recursive: true });
  });
};

export default rmdir;
