import * as fu from '../../src';
import fg from 'fast-glob';

describe('api.cp_r', () => {
  beforeEach(() => {
    fu.rm_rf('.tmp');
  });

  test('cp dir -> dir', () => {
    fu.cp_r('src', '.tmp');
    const files = fg.sync(['**/*'], {
      cwd: '.tmp',
      dot: true,
      onlyFiles: true,
    });

    expect(files.includes('index.ts')).toBe(true);
    expect(files.includes('lib/.gitkeep')).toBe(true);
    expect(files.includes('lib/cp_r.ts')).toBe(true);
  });

  test('cp file -> file', () => {
    fu.cp_r('src/lib/cp_r.ts', '.tmp');
    const files = fg.sync(['**/*'], {
      cwd: '.tmp',
      dot: true,
      onlyFiles: true,
    });

    expect(files.includes('cp_r.ts')).toBe(true);
  });

  test('cp file -> dir', () => {
    fu.cp_r('src/lib/cp_r.ts', '.tmp');
    const files = fg.sync(['**/*'], {
      cwd: '.tmp',
      dot: true,
      onlyFiles: true,
    });

    expect(files.includes('cp_r.ts')).toBe(true);
  })
});
