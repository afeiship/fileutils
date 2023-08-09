declare var wx: any;

const Fileutils = (): void => {
  console.log('hello');
};

// for commonjs es5 require
if (typeof module !== 'undefined' && module.exports && typeof wx === 'undefined') {
  module.exports = Fileutils;
}

export default Fileutils;
