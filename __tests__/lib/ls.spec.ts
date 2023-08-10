import * as fu from '../../src';

describe('api.ls', () => {
  test('ls dir', () => {
    const files = fu.ls('src');
    expect(files.includes('index.ts')).toBe(true);
    expect(files.includes('lib/.gitkeep')).toBe(true);
    expect(files.includes('lib')).toBe(false);
  });

  test('ls include dirs', () => {
    const files = fu.ls('src', { onlyFiles: false });
    expect(files.includes('index.ts')).toBe(true);
    expect(files.includes('lib/.gitkeep')).toBe(true);
    expect(files.includes('lib')).toBe(true);
  });

  test('ls with source', ()=>{
    const files = fu.ls('src', { source: 'lib/*' });
    expect(files.includes('index.ts')).toBe(false);
    expect(files.includes('lib/.gitkeep')).toBe(true);
  })
});
