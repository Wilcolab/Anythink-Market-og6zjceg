/**
 * Converts a string to camelCase format.
 * 
 * This function takes a string with various delimiters (spaces, underscores, or hyphens)
 * and converts it to camelCase where the first word is lowercase and subsequent words
 * have their first letter capitalized.
 * 
 * @param {string} str - The input string to convert. Must start with an alphabet letter
 *                       and can contain spaces, underscores, or hyphens as delimiters.
 * 
 * @returns {string} The converted camelCase string.
 * 
 * @throws {TypeError} If the input is not a string.
 * @throws {Error} If the input string is empty.
 * @throws {Error} If the first character is not an alphabet letter.
 * 
 * @example
 * // Basic usage
 * toCamelCase('hello world');           // Returns: 'helloWorld'
 * toCamelCase('my_variable_name');      // Returns: 'myVariableName'
 * toCamelCase('some-kebab-case');       // Returns: 'someKebabCase'
 * 
 * @example
 * // Error handling
 * toCamelCase('123invalid');            // Throws: Error - First character must be an alphabet letter
 * toCamelCase('');                      // Throws: Error - Input string cannot be empty
 * toCamelCase(123);                     // Throws: TypeError - Input must be a string
 */
function toCamelCase(str) {
    // Validate input
    if (typeof str !== 'string') {
        throw new TypeError('Input must be a string');
    }

    if (str.length === 0) {
        throw new Error('Input string cannot be empty');
    }

    // Check if first character is an alphabet
    if (!/^[a-zA-Z]/.test(str)) {
        throw new Error('First character must be an alphabet letter');
    }

    // Convert to camelCase
    function toDotCase(str) {
        // Validate input
        if (typeof str !== 'string') {
            throw new TypeError('Input must be a string');
        }

        if (str.length === 0) {
            throw new Error('Input string cannot be empty');
        }

        // Check if first character is an alphabet
        if (!/^[a-zA-Z]/.test(str)) {
            throw new Error('First character must be an alphabet letter');
        }

        // Convert to dot.case
        return str
            .split(/[\s_-]+/) // Split by spaces, underscores, or hyphens
            .map(word => word.toLowerCase())
            .join('.');
    }

    // Example usage
    try {
        console.log(toDotCase('hello world'));           // Output: hello.world
        console.log(toDotCase('my_variable_name'));      // Output: my.variable.name
        console.log(toDotCase('some-kebab-case'));       // Output: some.kebab.case
        console.log(toDotCase('123invalid'));            // Throws error
    } catch (error) {
        console.error(error.message);
    }
    return str
        .split(/[\s_-]+/) // Split by spaces, underscores, or hyphens
        .map((word, index) => {
            if (index === 0) {
                return word.toLowerCase(); // First word in lowercase
            }
            return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase(); // Capitalize first letter of subsequent words
        })
        .join('');
}

// Example usage
try {
    console.log(toCamelCase('hello world'));           // Output: helloWorld
    console.log(toCamelCase('my_variable_name'));      // Output: myVariableName
    console.log(toCamelCase('some-kebab-case'));       // Output: someKebabCase
    console.log(toCamelCase('123invalid'));            // Throws error
} catch (error) {
    console.error(error.message);
}

