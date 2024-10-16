function Add(numbers) {
    if (numbers === "") return 0;

    let delimiter = /[\n,]/; 
    if (numbers.startsWith("//")) {
        const parts = numbers.split("\n");
        delimiter = new RegExp(`[${parts[0][2]}]`); 
        numbers = parts[1]; 
    }

    const numArray = numbers.split(delimiter);
    return numArray.reduce((acc, curr) => acc + parseInt(curr, 10), 0);
}

module.exports = { Add };