const { Add } = require("./stringCalculator");

test('should return 0 for an empty string', () => {
    expect(Add("")).toBe(0);
});

test('should return the number for a single number input', () => {
    expect(Add("1")).toBe(1);
});
