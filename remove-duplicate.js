

const numbers = [1, 2, 2, 3, 4, 4, 5];

// Method 1: Using Set
function removeDuplicates(arr) {
    return [...new Set(arr)];
}

console.log("Using Set:", removeDuplicates(numbers));

// Method 2: Using filter
function removeDuplicatesFilter(arr) {
    return arr.filter((value, index) =>
        arr.indexOf(value) === index
    );
}

console.log("Using filter:", removeDuplicatesFilter(numbers));