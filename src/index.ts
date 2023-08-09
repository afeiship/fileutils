import mkdirp from './lib/mkdirp';
import rmdir from './lib/rmdir';
import mv from './lib/mv'

// https://cloud.tencent.com/developer/section/1377051

declare var wx: any;

const Fileutils = {
  mkdirp,
  rmdir,
  mv
};

// for commonjs es5 require
if (typeof module !== 'undefined' && module.exports && typeof wx === 'undefined') {
  module.exports = Fileutils;
}

export default Fileutils;
