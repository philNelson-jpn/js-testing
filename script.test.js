
const { sum, getLargest } = require('./script.js')

describe('#sum', () => {
    test('it adds numbers correctly', () => {
        const a = 1
        const b = 2
        expect(sum(a, b)).toBe(3)
    })
})

describe('#getLargest', () => {
    test('returns the largest number in the array', () => {
        const array = [1, 2, 3, 4]
        expect(getLargest(array)).toBe(4)
    })
        describe('With an empty array', () => {
        test('returns null when given an empty array', () => {
            expect(getLargest([])).toBeNull()
        })
    })
})


test('equal vs tobe', () => {
    const obj = { a: 1, b: 2 }

    expect(obj).toEqual({ a: 1, b: 2 })
    // Pass
})

