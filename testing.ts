import * as colors from 'colors/safe';

export function describe(subject: string, block: Function) {
  console.log('the', subject);
  block();
}

export function it(description: string, block: Function) {
  let result = `${description}`;
  try {
    block();
    result = result + ` ${colors.green('√')}`;
  } catch(e) {
    result = result + ` ${colors.red('x')} -> ${e.message}`;
  } 
  console.log(result);
}

export function expect(actualValue) {
  return {
    toEqual: (expectedValue) => {
      if(actualValue !== expectedValue) {
        throw new Error(`${actualValue} does not equal ${expectedValue}`);
      }
    },
    toBeDefined: () => {
      if(actualValue === undefined) {
        throw new Error(`should be defined`);
      }
    }
  };
}
