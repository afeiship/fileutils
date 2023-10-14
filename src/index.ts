import cd from './lib/cd';
import cp_r from './lib/cp_r';
import ls from './lib/ls';
import mkdir_p from './lib/mkdir_p';
import mv from './lib/mv';
import pwd from './lib/pwd';
import rm_rf from './lib/rm_rf';

// https://cloud.tencent.com/developer/section/1377051

declare var wx: any;

const Fileutils = {
  cd,
  cp_r,
  ls,
  mkdir_p,
  mv,
  pwd,
  rm_rf,
};

// for commonjs es5 require
if (typeof module !== 'undefined' && module.exports && typeof wx === 'undefined') {
  module.exports = Fileutils;
}

export default Fileutils;
