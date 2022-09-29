/* Instructions
    Convert the given string to spinal-case. Spinal case is all-letters-in-lowercase-joined-by-dashes

    Hint: research regular expressions for this exercise
*/

/** DO NOT CHANGE THE FUNCTION NAME **/
const spinal = (str) => {
  /* Only make changes below this comment */
  let strArr = new Arr();
  for (let i = 0; i < str.length; i++) {
    if (str[i] !== str[i].toUpperCase() && str[i] !== " ") {
      strArr.push(str[i]);
    }
    if (str[i] === " ") {
      strArr.push("-");
    } else if (str[i] === str[i].toUpperCase()) {
      if (i > 0 && str[i - 1] !== " ") strArr.push("-");
      strArr.push(str[i]);
    }
    /* Only make changes below this comment */
  }
  return strArr.join("").toLowerCase();
};

/** DO NOT CHANGE THE LINE BELOW **/
module.exports.spinal = spinal;
