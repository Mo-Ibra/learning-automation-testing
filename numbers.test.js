const { sum } = require('./numbers')

test('It should return 2', () => {
    
    const result = sum(1, 1);
    expect(result).toBe(2);
    expect(result).toBeGreaterThan(1);
    expect(result).toBeGreaterThanOrEqual(2);

    // Error:
    // expect(sum(1.505, 2.5)).toBe(4);

    // Fix:
    expect(sum(1.505, 2.5)).toBeCloseTo(4)
});