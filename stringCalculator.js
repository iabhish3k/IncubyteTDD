function Add(numbers) {
    // Return 0 for an empty string
    if (numbers === "") return 0;

    // Default delimiter is a comma or newline
    let delimiter = /[\n,]/; 
    // Check for custom delimiter
    if (numbers.startsWith("//")) {
        const parts = numbers.split("\n");
        delimiter = new RegExp(`[${parts[0][2]}]`); 
        numbers = parts[1]; 
    }
    
    const numArray = numbers.split(delimiter);
    // Filter for negative numbers
    const negatives = numArray.filter(num => parseInt(num, 10) < 0);
    if (negatives.length > 0) {
        throw new Error(`Negative numbers not allowed: ${negatives.join(", ")}`);
    }

    // Calculate the sum, ignoring numbers greater than 1000
    return numArray.reduce((acc, curr) => {
        const number = parseInt(curr);
        return number > 1000 ? acc : acc + number;
    }, 0);
}

module.exports = { Add };
