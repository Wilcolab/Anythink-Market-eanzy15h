/**
 * @module StringCaseConverters
 * @description A collection of utility functions for converting strings between different case formats
 */

/**
 * Converts a string to camelCase format.
 * Handles special characters, multiple spaces, underscores and hyphens.
 * The first word is converted to lowercase, while subsequent words are capitalized.
 * 
 * @param {string} input - The string to convert to camelCase
 * @returns {string} The camelCase version of the input string
 * @throws {TypeError} If the input is not a string
 * 
 * @example
 * toCamelCase('hello world') // returns 'helloWorld'
 * toCamelCase('Hello-World') // returns 'helloWorld'
 * toCamelCase('   hello_world  ') // returns 'helloWorld'
 * toCamelCase('') // returns ''
 * toCamelCase('123 hello') // returns '123Hello'
 * 
 * @since 1.0.0
 * @category String
 */

/**
 * Converts a string to dot.case format.
 * Handles special characters, multiple spaces, underscores and hyphens.
 * All words are converted to lowercase and joined with dots.
 * 
 * @param {string} input - The string to convert to dot.case
 * @returns {string} The dot.case version of the input string
 * @throws {TypeError} If the input is not a string
 * 
 * @example
 * toDotCase('hello world') // returns 'hello.world'
 * toDotCase('Hello-World') // returns 'hello.world'
 * toDotCase('   hello_world  ') // returns 'hello.world'
 * toDotCase('') // returns ''
 * toDotCase('123 hello') // returns '123.hello'
 * 
 * @since 1.0.0
 * @category String
 */
