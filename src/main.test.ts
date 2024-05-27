import { Hello } from './main';
describe('hello test', () => {
  it('test hello world', () => {
    expect(Hello).toBeDefined();
    expect(Hello).toBe('Hello world');
  });
});
