/* Instructions
    Convert the given string to spinal-case. Spinal case is all-letters-in-lowercase-joined-by-dashes

    Hint: research regular expressions for this exercise

*/

/** DO NOT CHANGE THE FUNCTION NAME **/
const spinal = (str) => {
  /* Only make changes below this comment */
  let camelCase = str.replace(/([a-z])([A-Z])/g, "$1 $2"); //Add a space between lowercase and uppercase letters.
  let dobleUpper = camelCase.replace(/([A-Z])([A-Z])/g, "$1 $2"); //Add a space between two capital letters
  let spinal = dobleUpper.replace(/\s|_/g, "-"); //Replaces all spaces and underscores with hyphens.
  return spinal.toLowerCase(); //returns the string in lowercase letters
  /* Only make changes below this comment */
};

/** DO NOT CHANGE THE LINE BELOW **/
module.exports.spinal = spinal;
