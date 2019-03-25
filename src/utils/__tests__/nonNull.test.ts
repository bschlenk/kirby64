import { nonNull } from '../nonNull';

describe('nonNull', () => {
  it('should return true if the given value is not null', () => {
    expect(nonNull(1)).toBeTruthy();
    expect(nonNull('abc')).toBeTruthy();
    expect(nonNull(0)).toBeTruthy();
    expect(nonNull('')).toBeTruthy();
    expect(nonNull({})).toBeTruthy();
    expect(nonNull([])).toBeTruthy();
    expect(nonNull(['a', 0, ''])).toBeTruthy();
  });

  it('should return false for null', () => {
    expect(nonNull(null)).toBeFalsy();
  });

  it('should return false for undefined', () => {
    expect(nonNull(undefined)).toBeFalsy();
  });
});
