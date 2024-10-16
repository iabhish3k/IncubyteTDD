const { Add } = require("./stringCalculator");

describe('String Calculator - Add Method', () => {

    // Test case for handling an empty string input
    it('should return 0 for an empty string', () => {
        expect(Add("")).toBe(0);
    });
    
    // Test case for validating the addition of a single number
    it('should return the number for a single number input', () => {
        expect(Add("1")).toBe(1);
    });
    
    // Test case for validating the addition of two comma-separated numbers
    it('should return the sum of two numbers when passed', () => {
        expect(Add("3,7")).toBe(10);
    });

    // Test case for validating the addition of multiple comma-separated numbers
    it('should return the sum of multiple numbers', () => {
        expect(Add("1,2,3,4")).toBe(10);
    });

    // Test case for handling new lines as valid delimiters
    it('should handle new lines as valid delimiters', () => {
        expect(Add("1\n2,3")).toBe(6);
    });
    
    // Test case for supporting custom delimiters
    it('should support custom delimiters', () => {
        expect(Add("//;\n1;2;3")).toBe(6);
    });

    // Test case for throwing an error when negative numbers are included
    it('should throw an error for negative numbers', () => {
        expect(() => Add("1,-2,3")).toThrow("Negative numbers not allowed: -2");
    });

    // Test case for ignoring numbers greater than 1000
    it('should ignore numbers greater than 1000', () => {
        expect(Add("1001,2")).toBe(2);
    });

    it('should support multi-character delimiters', () => {
        expect(Add("//[***]\n1***2***3")).toBe(6);
    });
    
    it('should support multiple delimiters', () => {
        expect(Add("//[*][%]\n1*2%3")).toBe(6);
    });

    
});
