// basic_prompt.js
// Prompt for implementing a camelCase conversion function

const prompt = `
Write a JavaScript function named toCamelCase(input) that converts a given string to camelCase.

Requirements:
- Treat spaces, hyphens, underscores and other non-alphanumeric characters as word boundaries.
- Remove punctuation and extra separators.
- Lowercase the first word; capitalize the first letter of each subsequent word.
- Preserve numbers within words.
- Collapse multiple consecutive separators into a single boundary.
- Trim leading/trailing separators.
- Return an empty string for empty or all-separator input.

Example:
Input: "  hello-world_example  "
Output: "helloWorldExample"
`;

module.exports = prompt;