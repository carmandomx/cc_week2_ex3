/* Instructions
    Convert the given string to spinal-case. Spinal case is all-letters-in-lowercase-joined-by-dashes

    Hint: research regular expressions for this exercise

*/


/** DO NOT CHANGE THE FUNCTION NAME **/
const spinal = (str) => {
    /* Only make changes below this comment */

// The str_replace() function replaces some characters with some other characters in a string. 
 // Replace low-upper case to low-space-uppercase
   
        let spinal = str.replace(/(?!^)([A-Z])/g, ' $1')

// Replace space and underscore with -
                      .replace(/[_\s]+(?=[a-zA-Z])/g, '-').toLowerCase();
        return spinal 
    /* Only make changes below this comment */
}


/** DO NOT CHANGE THE LINE BELOW **/
module.exports.spinal = spinal;