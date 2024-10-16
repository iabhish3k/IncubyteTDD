function Add(numbers) {
    if (numbers === "") return 0;

    let delimiter = /[\n,]/; 
    if (numbers.startsWith("//")) {
        const parts = numbers.split("\n");
        delimiter = new RegExp(`[${parts[0][2]}]`); 
        numbers = parts[1]; 
    }

    const numArray = numbers.split(delimiter);
    const negatives = numArray.filter(num => parseInt(num, 10) < 0);
    if (negatives.length > 0) {
        throw new Error(`Negative numbers not allowed: ${negatives.join(", ")}`);
    }
    
    return numArray.reduce((acc, curr) => acc + parseInt(curr, 10), 0);
}

module.exports = { Add };