function Add(numbers) {
    // Return 0 for an empty string
    if (numbers === "") return 0;

    // Default delimiter is a comma or newline
    let delimiters = /[\n,]/;
    if (numbers.startsWith("//")) {
        const parts = numbers.split("\n");
        const delimiterString = parts[0].slice(2);

        // Handle multi-character and custom delimiters
        const customDelimiters = delimiterString
            .split(/[\[\]]+/)   // Split by [ or ]
            .filter((d) => d.length > 0)    // Remove empty strings
            .map((d) => d.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"))   // Escape regex special characters
            .join("|"); // Join with OR

        delimiters = new RegExp(customDelimiters, "g");
        numbers = parts[1];
    }

    const numArray = numbers.split(delimiters);
    // Filter for negative numbers
    const negatives = numArray.filter((num) => parseInt(num, 10) < 0);
    if (negatives.length > 0) {
        throw new Error(`Negative numbers not allowed: ${negatives.join(", ")}`);
    }

    // Calculate the sum, ignoring numbers greater than 1000
    return numArray.reduce((acc, curr) => {
        const num = parseInt(curr, 10);
        return num > 1000 ? acc : acc + num;
    }, 0);
}

module.exports = { Add };
