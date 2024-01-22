const fizzBuzz = require('../fizzBuzz');

describe('FizzBuzz function test', () => {
    it('Prints "FizzBuzz" when the number is divisible by 3 and 5', () => {
        const result = fizzBuzz(15);
        expect(result).toBe('FizzBuzz')
    })
})

describe('FizzBuzz function test', () => {
    it('Prints "FizzBuzz" when the number is divisible by 3', () => {
        const result = fizzBuzz(9);
        expect(result).toBe('Fizz')
    })
})

describe('FizzBuzz function test', () => {
    it('Prints "FizzBuzz" when the number is divisible by 5', () => {
        const result = fizzBuzz(10);
        expect(result).toBe('Buzz')
    })
})

describe('FizzBuzz function test', () => {
    it('Prints the original number in any other case', () => {
        const result = fizzBuzz(7);
        expect(result).toBe(7)
    })
})