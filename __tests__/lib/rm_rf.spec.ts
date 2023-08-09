import * as fu from '../../src';

describe('api.rm_rf', () => {
  test('delete not exists dir should not throw error', () => {
    fu.rm_rf('.tmp_xyz');
  });
});
