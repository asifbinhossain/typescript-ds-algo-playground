describe('test js String primitive', () => {
  it('tests string primitive construction', () => {
    const myString = 'my string';
    expect(myString).toEqual('my string');
    expect(myString.split(' ').length).toEqual(2);
    expect(myString.toUpperCase()).toEqual('MY STRING');
  });

  it('tests string class methods', () => {
    const myString = 'Hello World!';
    expect(myString).toBe('Hello World!');
    expect(myString.toLowerCase().split(' ')).toEqual(['hello', 'world!']);
    expect(myString.substring(0, 5).toUpperCase()).toBe('HELLO');

    const sample = 'string';
    const sampleToMap = sample
      .split('')
      .reduce((map: Map<string, number>, char, idx) => {
        map.set(char, idx);
        return map;
      }, new Map<string, number>());

    expect(sampleToMap.has('s')).toBe(true);
    expect(sampleToMap.has('S')).toBe(false);
    expect(sampleToMap.has('RR')).toBe(false);
  });
});
