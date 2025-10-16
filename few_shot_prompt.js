/**
 * Converts a string to camelCase
 * @param {string} str - The input string to convert
 * @returns {string} The camelCase version of the input string
 */
function toCamelCase(str) {
    // Return empty string if input is empty
    if (!str) return '';

    // Split the string by space, underscore, or hyphen
    return str
        .split(/[\s_-]/)
        .map((word, index) => {
            // Convert word to lowercase first
            word = word.toLowerCase();
            // Capitalize first letter of each word except the first word
            return index === 0 ? word : word.charAt(0).toUpperCase() + word.slice(1);
        })
        .join('');
}

// Test cases
console.log(toCamelCase('first name'));     // 'firstName'
console.log(toCamelCase('user_id'));        // 'userId'
console.log(toCamelCase('SCREEN_NAME'));    // 'screenName'
console.log(toCamelCase('mobile-number'));  // 'mobileNumber'