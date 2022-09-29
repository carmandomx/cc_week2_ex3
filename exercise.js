/* Instructions
    Convert the given string to spinal-case. Spinal case is all-letters-in-lowercase-joined-by-dashes

    Hint: research regular expressions for this exercise

*/


/** DO NOT CHANGE THE FUNCTION NAME **/
const spinal = (str) => {
    /* Only make changes below this comment */
    str = str.split("");
    for(i=0; i<str.length; i++) {
        if (str[i] === str[i].toUpperCase()) {
            
        }
        else if(str[i]===" ") {
            str[i] = "-";
        }
        str[i] = str[i].toLowerCase();
    }
    str = str.join("");
    return str;
    /* Only make changes below this comment */
}

/** DO NOT CHANGE THE LINE BELOW **/
module.exports.spinal = spinal;