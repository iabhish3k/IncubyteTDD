function Add(numbers) {
    if (numbers === "") return 0;

    // Split the input by comma and return the sum
    const numArray = numbers.split(",");
    return numArray.reduce((acc, curr) => acc + parseInt(curr, 10), 0);
}

module.exports = { Add };