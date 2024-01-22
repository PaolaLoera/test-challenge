const factorial = require('../factorial');

describe('Factorial function test', () => {
    it('Calculates the factorial of 1', () => {
        expect(factorial(1)).toBe(1);
    });

    it('Calculates the factorial of 5', () => {
        expect(factorial(5)).toBe(120);
    });
});