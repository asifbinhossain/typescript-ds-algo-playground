// Helpful documentation : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/arguments
// Rest param documentation: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/rest_parameters
// Stack overflow: https://stackoverflow.com/questions/42184674/what-is-the-meaning-of-args-three-dots-in-a-function-definition

function randomFunction(...args): any {
  return args;
}

function anotherRandomFunction(...args): any {
  console.log('args are', args);
  // eslint-disable-next-line prefer-rest-params
  return arguments; // arguments is an array-like object accessible inside functions that contains the values of the arguments passed to that function.
}

describe('tests for args', () => {
  it('should return an array of arguments for randomFunction', () => {
    expect(randomFunction(1, 2, 3)).toEqual([1, 2, 3]);
    expect(randomFunction('a', 'b', 'c')).toEqual(['a', 'b', 'c']);
    const obj = { a: 1, b: 2, c: 3 };
    const arr = [1, 2, 3];
    expect(randomFunction(obj, arr)).toEqual([obj, arr]);
  });

  it('should test anotherRandomFunction', () => {
    // debug this & see the output
    expect(anotherRandomFunction(1, 2, 3)).not.toContain([1, 2, 3]);
  });
});
