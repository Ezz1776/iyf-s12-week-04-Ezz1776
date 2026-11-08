
function isPalindrome(str) {
    const cleaned = str.toLowerCase().replace(/[^a-z0-9]/g, "");

    const reversed = cleaned.split("").reverse().join("");

    return cleaned === reversed;
}

// Test the function
console.log(isPalindrome("racecar"));
console.log(isPalindrome("hello"));
console.log(isPalindrome("madam"));
console.log(isPalindrome("A man a plan a canal Panama"));