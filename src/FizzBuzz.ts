export class FizzBuzz {

  static isFizz(number: number): boolean {
    if(number % 3 === 0 || number.toString().includes('3')){
      return true;
    } else {
      return false;
    }
  };

  static isBuzz(number: number): boolean {
    if(number % 5 === 0 || number.toString().includes('5')){
      return true;
    } else {
      return false;
    }
  }
  static isFizzBuzz(number: number): boolean {
    if(FizzBuzz.isFizz(number) && FizzBuzz.isBuzz(number) ){
      return true;
    } else {
      return false;
    }
  }
  static start(number: number) {
    if (FizzBuzz.isFizzBuzz(number)) {
      return 'FizzBuzz';
    }
    if(FizzBuzz.isFizz(number)){
      return 'Fizz';
    }  else if (FizzBuzz.isBuzz(number)){
      return 'Buzz';
    }
    return number;
  }

  static print(number: number) {
    return number === 0 ? '': (number === 1 ? 1 : FizzBuzz.print(number - 1) + ' ' + FizzBuzz.start(number) );
  }
}
