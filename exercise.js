/* Instructions
    Convert the given string to spinal-case. Spinal case is all-letters-in-lowercase-joined-by-dashes

    Hint: research regular expressions for this exercise

*/


/** DO NOT CHANGE THE FUNCTION NAME **/
const spinal = (str) => {
    /* Only make changes below this comment */
    let strUpperCase = '';
    let strSpaces = '';

    // Replace the string with a space and convert to lower case
    strUpperCase = str.replace(/[A-Z]/g, match => ` ${match.toLowerCase()}`);

    // The previuos result is trimmed, splitted by spaces and the join with a dash
    strSpaces = strUpperCase.trim().split(/\s+/).join('-');

    
    /* Only make changes below this comment */
    // Return converted string
    return strSpaces;
}





/** DO NOT CHANGE THE LINE BELOW **/
module.exports.spinal = spinal;