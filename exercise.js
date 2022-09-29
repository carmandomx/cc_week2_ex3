/* Instructions
    Convert the given string to spinal-case. Spinal case is all-letters-in-lowercase-joined-by-dashes

    Hint: research regular expressions for this exercise

*/


/** DO NOT CHANGE THE FUNCTION NAME **/
const spinal = (str) => {
    /* Only make changes below this comment */

    //This regular expression is used to put an space in front of every UpperCase letter 
    const spinal = str.replace(/(?!^)([A-Z])/g, ' $1');

    //This is to add a dash in the spaces and in front of the uppercase letters
    const spinal2 = spinal.replace(/[_\s]+(?=[a-zA-Z])/g, '-');

    //this changes all letters to lower case
    return spinal2.toLowerCase();


    /* Only make changes below this comment */



}





/** DO NOT CHANGE THE LINE BELOW **/
module.exports.spinal = spinal;