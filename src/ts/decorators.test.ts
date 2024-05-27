// Helpful guide: https://mirone.me/a-complete-guide-to-typescript-decorator/
// TS decorators

// A stopwatch decorator that logs the time taken to execute a function &
// logs the function name with arguments

function stopwatch(
  target: any,
  propertyKey: string,
  descriptor: PropertyDescriptor,
) {
  const originalMethod = descriptor.value;
  function _stopwatch(...args: any[]) {
    console.time(propertyKey);
    const result = originalMethod.apply(this, args);
    console.timeEnd(propertyKey);
    console.log('function name:', propertyKey, 'arguments:', args);
    console.log(`the function took ${propertyKey} to execute.`);
    console.log(`wtf is this: ${target}`);
    return result;
  }
  descriptor.value = _stopwatch;
  return descriptor;
}

class DecoratorExample {
  @stopwatch
  public async multiplyArgs(...args: any[]): Promise<number> {
    console.log('1');
    await new Promise((resolve) => {
      console.log('3');
      setTimeout(resolve, 1000);
    });
    console.log('2');
    return args.reduce((acc, curr) => acc * curr, 1);
  }
}

describe('tests for decorators', () => {
  it('should test the stopwatch decorator', async () => {
    const example = new DecoratorExample();
    const result = await example.multiplyArgs(1, 2, 3);
    expect(result).toBe(6);

    // const result2 = await example.multiplyArgs(1, 2, 3, 4, 5);
    // expect(result2).toBe(120);
  });
});
