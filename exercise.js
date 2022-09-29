/* Instructions
    Convert the given string to spinal-case. Spinal case is all-letters-in-lowercase-joined-by-dashes

    Hint: research regular expressions for this exercise

*/


/** DO NOT CHANGE THE FUNCTION NAME **/
const spinal = (str) => {
    /* Only make changes below this comment */

    str = str.replace(/([A-Z])/g,' $1'); //Regex to find capital letters and add a space in front of them.
    str = str.replace(/\s{1,}/g,"-"); //Regex to convert spaces to dash (-).
    str = str.replace(/^\-|[\-]$/g,'');//I eliminate the hyphen at the end and at the beginning in case there was a capital letter in them as it is validated at the beginning.
    str = str.toLowerCase(); //I convert to lowercase.

    return str;
    /* Only make changes below this comment */
}





/** DO NOT CHANGE THE LINE BELOW **/
module.exports.spinal = spinal;