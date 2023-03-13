/* Instructions
    Convert the given string to spinal-case. Spinal case is all-letters-in-lowercase-joined-by-dashes

    Hint: research regular expressions for this exercise

*/

/** DO NOT CHANGE THE FUNCTION NAME **/
const spinal = (str) => {
  /* Only make changes below this comment */
  let nuevo = str
  ///(?!^)([A-Z])/g is used to find any capital letter that appears in the middle of the string 
  //$1 add a space before the marched capital letter
  //g is a global flag that indicates to be applied to all occurrences of the pattern in the input string
    .replace(/(?!^)([A-Z])/g, " $1")
    ///[_\s] matches any sequence of one or more uderscores or whitespace characters
    //(?=[a-zA-Z])/g matches any position in the string that is immediately followed by a letter
    .replace(/[_\s]+(?=[a-zA-Z])/g, "-")
    //convert all the string in a lowerCase 
    .toLowerCase();
  return nuevo;
};

/** DO NOT CHANGE THE LINE BELOW **/
module.exports.spinal = spinal;
