// const { default: expect } = require('expect');

// const { default: expect } = require('expect');
const calculator = require('../calculator');

test('adds a + b to equal 3', () => {
    expect(calculator.sum(1, 2)).toBe(3);
})

test('substracts a - b to equal 1', () => {
   expect(calculator.substract(2,1)).toBe(1);
})

test('multiplies a * b to equal 4', () => {
    expect(calculator.multiply(2,2)).toBe(4);
})

test('divides a / b to equal 3', () => {
    expect(calculator.divide(6, 2)).toBeCloseTo(3);
});

test('Raises to power a ^ b', () => {
    expect(calculator.power(2,2)).toBe(4);
})

