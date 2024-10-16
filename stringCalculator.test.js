const { Add } = require("./stringCalculator");


describe('String Calculator - Add Method', () => {

    it('should return 0 for an empty string', () => {
        expect(Add("")).toBe(0);
    });
    
    it('should return the number for a single number input', () => {
        expect(Add("1")).toBe(1);
    });
    
    it('should return the sum of two numbers when passed', () => {
        expect(Add("3,7")).toBe(10);
    });
});
