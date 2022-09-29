/* Instructions
    Convert the given string to spinal-case. Spinal case is all-letters-in-lowercase-joined-by-dashes

    Hint: research regular expressions for this exercise

*/


/** DO NOT CHANGE THE FUNCTION NAME **/
const spinal = (str) => {
    /* Only make changes below this comment */

    /*splits the word checking for two conditions: 
        if the word has an upper case character /(?=[A-Z])/
        if the word has spaces \s
    then it joins them with "-" and sets everything to lowercase */
    let spinalCase = str.split(/(?=[A-Z])|\s/).join("-").toLowerCase(); 
    return spinalCase;
    
    /* Only make changes below this comment */
}





/** DO NOT CHANGE THE LINE BELOW **/
module.exports.spinal = spinal;