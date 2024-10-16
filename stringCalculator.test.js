const { Add } = require("./stringCalculator");

test('should return 0 for an empty string', () => {
    expect(Add("")).toBe(0);
});