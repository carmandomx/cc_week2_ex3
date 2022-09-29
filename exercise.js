/* Instructions
    Convert the given string to spinal-case. Spinal case is all-letters-in-lowercase-joined-by-dashes

    Hint: research regular expressions for this exercise

*/


/** DO NOT CHANGE THE FUNCTION NAME **/
const spinal = (str) => {
    /* Only make changes below this comment */
    var newStr = str[0];

    for (var j = 1; j < str.length; j++) {
        // if not a letter make a dash
        if (str[j].search(/\W/) !== -1 || str[j] === "_") {
            newStr += "-";
        }
        // if a Capital letter is found 
        else if (str[j] === str[j].toUpperCase()) {
            // and preceded by a letter or '_'
            if (str[j - 1].search(/\w/) !== -1 && str[j - 1] !== "_") {
                // insert '-' and carry on
                newStr += "-";
                newStr += str[j];
            }
            else {
                newStr += str[j];
            }
        }
        else {
            newStr += str[j];
        }
    }

    newStr = newStr.toLowerCase();
    return newStr;


    /* Only make changes below this comment */
}





/** DO NOT CHANGE THE LINE BELOW **/
module.exports.spinal = spinal;