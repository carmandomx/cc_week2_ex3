/* Instructions
    Convert the given string to spinal-case. Spinal case is all-letters-in-lowercase-joined-by-dashes

    Hint: research regular expressions for this exercise

*/


/** DO NOT CHANGE THE FUNCTION NAME **/
const spinal = (str) => {
    /* Only make changes below this comment */

     // Create a variable for the white space and underscores.
        var regexString = /[_\s]+(?=[a-zA-z])|/g;

    // Replacing lower and upper case to the same but with a space
        str = str.replace(/([a-z])([A-Z])/g, "$1 $2");

    // Replace space and underscore with -
        return str.replace(regexString, "-").toLowerCase();
    
    /* Only make changes below this comment */
}





/** DO NOT CHANGE THE LINE BELOW **/
module.exports.spinal = spinal;