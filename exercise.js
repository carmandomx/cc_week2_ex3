/* Instructions
    Convert the given string to spinal-case. Spinal case is all-letters-in-lowercase-joined-by-dashes

    Hint: research regular expressions for this exercise

*/

/** DO NOT CHANGE THE FUNCTION NAME **/
const spinal = (str) => {
  /* Only make changes below this comment */
  //Create a new variable for storage the operations and return it
  let result = str
    //Adding a space when exist a lower case next to a upper case
    .replace(/([a-z])([A-Z])/g, "$1 $2")
    //Adding a space when exist a upper case next to a upper case
    .replace(/([A-Z])([A-Z])/g, "$1 $2")
    //Replace spaces with -
    .replace(/\s/g, "-")
    //Conver all in a lowecase
    .toLowerCase();

  return result;

  /* Only make changes below this comment */
};

/** DO NOT CHANGE THE LINE BELOW **/
module.exports.spinal = spinal;
