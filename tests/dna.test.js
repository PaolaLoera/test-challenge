const dnaStringFilter = require('../dna');


describe('DNA String Filter function test', () => {
    it('Returns an empty string for an empty DNA string', () => {
        const result = dnaStringFilter('');
        expect(result).toBe('');
    });

    it('Filters DNA string and preserves case sensitivity', () => {
        const result = dnaStringFilter('CTaGgGTA');
        expect(result).toBe('CTGGTA');
    });

});