import { compareRelativeTo } from '../compareRelativeTo';

describe('compareRelativeTo', () => {
  it('should allow sorting values by a reference array', () => {
    const ref = [3, 8, 2, 9, 0, 1, 4, 6, 5, 7];
    const initial = [1, 2, 3];
    const expected = [3, 2, 1];

    const sorted = [...initial].sort(compareRelativeTo(ref));

    expect(sorted).toEqual(expected);
  });
});
