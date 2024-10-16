function Add(numbers) {
    if (numbers === "") return 0;

    // Split the input by both commas and new lines
    const numArray = numbers.split(/[\n,]/);
    return numArray.reduce((acc, curr) => acc + parseInt(curr, 10), 0);
}

module.exports = { Add };