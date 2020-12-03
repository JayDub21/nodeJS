const fb = require('../exercise1');

describe('fizzBuzz', () => {
    it('should throw an exception if input is not a number', () => {
        expect(() => { lib.fizzBuzz('a') }).toThrow();
        expect(() => { lib.fizzBuzz(null) }).toThrow();
        expect(() => { lib.fizzBuzz(undefined) }).toThrow();
        expect(() => { lib.fizzBuzz({}) }).toThrow();
    });
    it('should return Fizz Buzz if input is % by 3 & 5', () => {
        const result = fb.fizzBuzz(15);
        expect(result).toBe('FizzBuzz');
    });
    it('should return Fizz  if input is only % by 3', () => {
        const result = fb.fizzBuzz(3);
        expect(result).toBe('Fizz');
    });
    it('should return Buzz  if input is only % by 5', () => {
        const result = fb.fizzBuzz(5);
        expect(result).toBe('Buzz');
    });
    it('should return input if it is not % by 3 or 5', () => {
        const result = fb.fizzBuzz(1);
        expect(result).toBe(1);
    });
});