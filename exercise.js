/* Instructions
    Convert the given string to spinal-case. Spinal case is all-letters-in-lowercase-joined-by-dashes

    Hint: research regular expressions for this exercise

*/


/** DO NOT CHANGE THE FUNCTION NAME **/
const spinal = (str) => {
    /* Only make changes below this comment */
    let spin = str.replace(/(?!^)([A-Z])/g, ' $1'); //Evualte first condition, before any Uppercase that is not the one in the beggining of the string, we add a space
    let spin2 = spin.replace(/[\s]+([a-zA-Z])/g, '-$1');//We look for a space that is followed by any letter and we switch it for a -
    let result = spin2.toLowerCase(); // we lower case all the remaining characters
    return result; 
    /* Only make changes below this comment */
}





/** DO NOT CHANGE THE LINE BELOW **/
module.exports.spinal = spinal;