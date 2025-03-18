import { HyphenateLowercasePipe } from './hyphenate-lowercase.pipe';

describe('HyphenateLowercasePipe', () => {
  let pipe: HyphenateLowercasePipe;

  beforeEach(() => {
    pipe = new HyphenateLowercasePipe();
  });

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('should transform text to lowercase with hyphens', () => {
    expect(pipe.transform('Hello World')).toBe('hello-world');
    expect(pipe.transform('Test Case')).toBe('test-case');
    expect(pipe.transform('Multiple   Spaces')).toBe('multiple-spaces');
    expect(pipe.transform('special!@#$characters')).toBe('special-characters');
  });

  it('should handle empty input', () => {
    expect(pipe.transform('')).toBe('');
    expect(pipe.transform(null as any)).toBe('');
    expect(pipe.transform(undefined as any)).toBe('');
  });
});
