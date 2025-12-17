function convertToKebabCase(str) {
    // Check if string is valid
    if (typeof str !== 'string' || str.length === 0) {
        console.error(`Error: Invalid input - not a non-empty string`);
        return null;
    }

    // Check if first character is alphabet or underscore
    if (!/^[a-zA-Z_]/.test(str)) {
        console.error(`Error: String must start with an alphabet or underscore: "${str}"`);
        return null;
    }

    // Check if string contains only alphabets, numbers, hyphens, or underscores
    if (!/^[a-zA-Z0-9_-]+$/.test(str)) {
        console.error(`Error: String contains invalid characters: "${str}"`);
        return null;
    }

    // Convert to kebab case
    return str
        .replace(/([a-z])([A-Z])/g, '$1-$2') // camelCase to kebab-case
        .replace(/_/g, '-') // underscores to hyphens
        .toLowerCase();
}

// Example usage
console.log(convertToKebabCase('myVariableName'));     // my-variable-name
console.log(convertToKebabCase('my_variable_name'));   // my-variable-name
console.log(convertToKebabCase('MyClass'));            // my-class
console.log(convertToKebabCase('123invalid'));         // Error
console.log(convertToKebabCase('_validName'));         // valid-name