import fs from 'fs';

type MvOptions = {
  force: boolean;
};

const mv = (src: string, dest: string, options?: MvOptions) => {
  const isExists = fs.existsSync(dest);
  if (isExists && !options?.force) throw new Error('dest file is exists');
  if (options?.force) fs.unlinkSync(dest);
  fs.renameSync(src, dest);
};

export default mv;
