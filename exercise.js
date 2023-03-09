/* Instructions
    Convert the given string to spinal-case. Spinal case is all-letters-in-lowercase-joined-by-dashes

    Hint: research regular expressions for this exercise

*/


/** DO NOT CHANGE THE FUNCTION NAME **/
const spinal = (str) => {
    /* Only make changes below this comment */
    return (str.split('')).map( (element, index ) => 
        index > 0 ? element === ' ' ? str[index+1].match(/[A-Z]/) ?
        '' : '-' : element.replace(/[A-Z]/, '-' + element) : element )
        .join('').toLowerCase();
    /* Only make changes below this comment */
}





/** DO NOT CHANGE THE LINE BELOW **/
module.exports.spinal = spinal;