
function reverseString(str) {
    return str.split("").reverse().join("");
}

console.log(reverseString("hello"));
console.log(reverseString("JavaScript"));

// Method 2: Using a loop
function reverseWithLoop(str) {
    let reversed = "";

    for (let i = str.length - 1; i >= 0; i--) {
        reversed += str[i];
    }

    return reversed;
}

console.log(reverseWithLoop("hello"));
console.log(reverseWithLoop("world"));