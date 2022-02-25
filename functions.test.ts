const {shuffleArray} = require('./utils')

describe('shuffleArray should', () => {
    let testArr = [1, 2, 3, 4, 5];
    let shuffled =  shuffleArray(testArr);

    test('return an array', () => {
        expect(shuffled).toBeInstanceOf(Array);
    });

    test('have the same length as original array', () => {
        expect(shuffled.length).toBe(testArr.length);
    });
})