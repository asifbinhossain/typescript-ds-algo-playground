import { Hello } from './main';
describe('hello test', () => {
  it('tests hello world', () => {
    expect(Hello).toBeDefined();
    expect(Hello).toBe('Hello world');
  });
});
