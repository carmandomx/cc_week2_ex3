/* Instructions
    Convert the given string to spinal-case. Spinal case is all-letters-in-lowercase-joined-by-dashes

    Hint: research regular expressions for this exercise

*/


/** DO NOT CHANGE THE FUNCTION NAME **/
const spinal = (str) => {
    /* Only make changes below this comment */
    
    return str.split(/\s|_|(?=[A-Z])/).join("-").toLowerCase();
    
    /* Only make changes below this comment */
}

console.log(spinal('ThisIsATest'));



/** DO NOT CHANGE THE LINE BELOW **/
module.exports.spinal = spinal;