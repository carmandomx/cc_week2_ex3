/* Instructions
    Convert the given string to spinal-case. Spinal case is all-letters-in-lowercase-joined-by-dashes

    Hint: research regular expressions for this exercise

*/


/** DO NOT CHANGE THE FUNCTION NAME **/
const spinal = (str) => {
  /* Only make changes below this comment */
  // change the first letter to lower case to avoid it during validations
    str = str[0].toLowerCase() + str.slice(1);
    return str
        .replace(/([^a-zA-Z])/g, function (char) {
        // replace non alphabetical characters with a hyphen plus the character in lower case
        return '-' + (char == ' ' ? '' : char.toLowerCase());
        })
        .replace(/([A-Z])/g, function (char, _, matchPosition, inputString) {
        // replace all upper cased letters with a hyphen plus the character in lower case but only if the previous value was different than hyphen
        if (inputString[matchPosition - 1] !== '-') {
            return '-' + (char == ' ' ? '' : char.toLowerCase());
        } else {
            // otherwise just return the character in lower case
            return char.toLowerCase();
        }
        });

  /* Only make changes below this comment */
}





/** DO NOT CHANGE THE LINE BELOW **/
module.exports.spinal = spinal;