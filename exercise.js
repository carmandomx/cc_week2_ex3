/* Instructions
    Convert the given string to spinal-case. Spinal case is all-letters-in-lowercase-joined-by-dashes

    Hint: research regular expressions for this exercise

*/


/** DO NOT CHANGE THE FUNCTION NAME **/
const spinal = (str) => {
    /* Only make changes below this comment */
    let spinalRes = str.replace(/(?!^)([A-Z])/g, ' $1')
    .replace(/[_\s]+(?=[a-zA-Z])/g, '-').toLowerCase();
    return spinalRes; 
    //the regexs I used were (?!^)= negative lookahead and asserts position, which will make it so a pattern won't match, this will help paired with the other regular expression that will check if two capital letters are placed together, at the end it will seperate every word with a space; afterwards the [_\s]+(?=[a-zA-Z]) regex will match any single character that equalls a whitespace and complete the remaining cases of any letter that is a lowercase nest to an upper case and replace them or separate them with a dash (-), finally I set everythinh to lower case and the returned the result
    /* Only make changes below this comment */
}




/** DO NOT CHANGE THE LINE BELOW **/
module.exports.spinal = spinal;