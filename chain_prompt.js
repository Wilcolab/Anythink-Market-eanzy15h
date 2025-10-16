function toKebabCase(inputString) {
    // Convert camelCase to kebab-case
    let kebabString = inputString.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();

    // Replace underscores and spaces with a single hyphen
    kebabString = kebabString.replace(/[_ ]+/g, '-');

    // Replace multiple consecutive hyphens with a single hyphen
    kebabString = kebabString.replace(/-{2,}/g, '-');

    // Remove leading and trailing hyphens
    kebabString = kebabString.replace(/^-+|-+$/g, '');

    return kebabString;
}

// Export the function for use in other modules
module.exports = toKebabCase;