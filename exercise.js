/* Instructions
    Convert the given string to spinal-case. Spinal case is all-letters-in-lowercase-joined-by-dashes

    Hint: research regular expressions for this exercise

*/


/** DO NOT CHANGE THE FUNCTION NAME **/
const spinal = (str) => {
    /* Only make changes below this comment */

    // Create a new string with a regular expression to search globally for either a lowercase or an Upper case letter 
    // next to an Uppercase letter and replace it with a blank space between them
    str = str.replace(/([a-z][A-Z]?)([A-Z])/g, '$1 $2'); //The first group checks for a-z and optionally A-Z, and the second group checks for A-Z
    // The new string will only have spaces between a lower case and an Upper case letter
    
    //Use another regular expression to search globally for a lower case letter next to an Upper case letter 
    //and replace it with a blank space between them
    str = str.replace(/([a-z])([A-Z])/g, '$1 $2');

    // Use regular expression to search globally for blank spaces and split the substrings inbetween them into an array
    //and use join() to join the substrings into a whole string with a dash between substrings and finally turn all
    //the string into lower case
    return str.split(/\s/g).join('-').toLowerCase();
    /* Only make changes below this comment */
}





/** DO NOT CHANGE THE LINE BELOW **/
module.exports.spinal = spinal;