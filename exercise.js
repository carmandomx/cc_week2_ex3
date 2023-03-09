/* Instructions
    Convert the given string to spinal-case. Spinal case is all-letters-in-lowercase-joined-by-dashes

    Hint: research regular expressions for this exercise

*/


/** DO NOT CHANGE THE FUNCTION NAME **/
const spinal = (str) => {
    /* Only make changes below this comment */

    const regex= /(\s(\w))|((?<=\w)[A-Z])/g //two cases: 1 if a character next to space (match with character). 2 character next to uppper case letter (match with upper case)
    dashed_str=str.replace(regex,'-$2$3') //replace matches with dash next to match
    return dashed_str.toLowerCase()//change to lower case
    
    
    /* Only make changes below this comment */
}
/** DO NOT CHANGE THE LINE BELOW **/
module.exports.spinal = spinal;