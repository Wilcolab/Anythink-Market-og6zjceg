/**
 * Converts a given string to camelCase.
 * 
 * @param {string} str - The string to convert.
 * @returns {string} - The camelCased version of the input string.
 * 
 * @example
 * camel("helloworld") // returns "helloWorld"
 */
function camel(str) {
    return str
        .replace(/(?:^\w|[A-Z]|\b\w)/g, (match, index) => index === 0 ? match.toLowerCase() : match.toUpperCase())
        .replace(/\s+/g, '');
}

console.log(camel("hello world"))
