
function findLargest(numbers) {
    let largest = numbers[0];

    for (let i = 1; i < numbers.length; i++) {
        if (numbers[i] > largest) {
            largest = numbers[i];
        }
    }

    return largest;
}

const numbers = [12, 45, 7, 89, 23, 56];

console.log("Largest number:", findLargest(numbers));

// Method 2: Using reduce()
function findLargestReduce(numbers) {
    return numbers.reduce((largest, current) =>
        current > largest ? current : largest
    );
}

console.log("Using reduce:", findLargestReduce(numbers));