/* Instructions
    Convert the given string to spinal-case. Spinal case is all-letters-in-lowercase-joined-by-dashes

    Hint: research regular expressions for this exercise

*/


/** DO NOT CHANGE THE FUNCTION NAME **/
const spinal = (str) => {
    /* Only make changes below this comment */
    let answer = str.replace(/([A-Z])/g,' $1') /*Find all caps and add space*/
    .replace(/[^A-Za-z0-9]/g,' ') /*Changing everything that is not a letter to a space*/
    .replace(/\s{1,}/g,"-") /*Convert all spaces to -*/
    .replace(/^\-|[\-]$/g,'') 
    .toLowerCase(); /*LowerCase it*/


    return answer;
    /* Only make changes below this comment */
}





/** DO NOT CHANGE THE LINE BELOW **/
module.exports.spinal = spinal;