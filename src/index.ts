import mkdir_p from './lib/mkdir_p';
import mv from './lib/mv';
import rm_rf from './lib/rm_rf';
import cp_r from './lib/cp_r';
import cp from './lib/cp';

// https://cloud.tencent.com/developer/section/1377051

declare var wx: any;

const Fileutils = {
  mkdir_p,
  rm_rf,
  mv,
  cp_r,
  cp,
};

// for commonjs es5 require
if (typeof module !== 'undefined' && module.exports && typeof wx === 'undefined') {
  module.exports = Fileutils;
}

export default Fileutils;
