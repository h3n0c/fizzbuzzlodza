import { FizzBuzz } from '../src/FizzBuzz';


describe('FizzBuzz', () => {
  it('should deal with Fizz Buzz', () => {
    expect(FizzBuzz.start(1)).toEqual(1);
    expect(FizzBuzz.start(3)).toEqual('Fizz');
    expect(FizzBuzz.start(5)).toEqual('Buzz');
    expect(FizzBuzz.start(15)).toEqual('FizzBuzz');
  });

  it('should print the right output', () => {
    expect(FizzBuzz.print(3)).toEqual('1 2 Fizz');
    expect(FizzBuzz.print(0)).toEqual('');
    expect(FizzBuzz.print(5)).toEqual('1 2 Fizz 4 Buzz');
    expect(FizzBuzz.print(15)).toEqual('1 2 Fizz 4 Buzz Fizz 7 8 Fizz Buzz 11 Fizz Fizz 14 FizzBuzz');
  });

  it('should check if is a Fizz', () => {
    expect(FizzBuzz.isFizz(3)).toEqual(true);
    expect(FizzBuzz.isFizz(1)).toEqual(false);
    expect(FizzBuzz.isFizz(13)).toEqual(true);
  });

  it('should check if is a Buzz', () => {
    expect(FizzBuzz.isBuzz(3)).toEqual(false);
    expect(FizzBuzz.isBuzz(5)).toEqual(true);
    expect(FizzBuzz.isBuzz(51)).toEqual(true);
  });

  it('should check if is a Fizz Buzz', () => {
    expect(FizzBuzz.isFizzBuzz(15)).toEqual(true);
    expect(FizzBuzz.isFizzBuzz(5)).toEqual(false);
  });
});
