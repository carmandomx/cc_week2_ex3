/* Instructions
    Convert the given string to spinal-case. Spinal case is all-letters-in-lowercase-joined-by-dashes

    Hint: research regular expressions for this exercise

*/


/** DO NOT CHANGE THE FUNCTION NAME **/
const spinal = (str) => {
    /* Only make changes below this comment */
    
    //regular expresion to put an space before every mayuscule
    const regex =  /(?!^)([A-Z])/g;
    let result = str.replace(regex, ' $1');
    //regular expresion for change the space and letters+Mayuscule by a bar
    const regex_2= /[\s]+(?=[a-zA-Z])/g;
    result = result.replace(regex_2, '-').toLowerCase();

    return result;
    
    /* Only make changes below this comment */
}





/** DO NOT CHANGE THE LINE BELOW **/
module.exports.spinal = spinal;