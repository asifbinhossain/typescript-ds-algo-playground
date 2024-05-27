describe('tests js Map class', () => {
  it('tests basic map', () => {
    const map: Map<number, boolean> = new Map();
    map.set(2, true);
    map.set(5, false);
    map.set(-99, true);

    expect(map.get(-88)).toBeUndefined();
    expect(map.get(2)).toBe(true);
    expect(map.get(-99)).toBe(true);

    expect(map.has(88)).toBe(false);
    expect(map.has(5)).toBe(true);
  });

  it('tests array to map construction', () => {
    const list = [1, 2, 3, 4, 5, 6];
    const mymap = list.reduce((acc: Map<number, boolean>, curr) => {
      acc.set(curr, true);
      return acc;
    }, new Map<number, boolean>());

    expect(mymap.size).toBe(list.length);
  });
});
