/* Instructions
    Convert the given string to spinal-case. Spinal case is all-letters-in-lowercase-joined-by-dashes

    Hint: research regular expressions for this exercise

*/

/** DO NOT CHANGE THE FUNCTION NAME **/
const spinal = (str) => {
  /* Only make changes below this comment */
  const newStr = str
    .replace(
      // Any upper case letter in a string ( /[A-Z]/g)
      /[A-Z]/g,

      //   If index of character is 0, dont prepend anything, else prepend a "-"
      (match, index) => (index === 0 ? "" : "-") + match.toLowerCase()
    )
    // Replace all one or more consecutive spaces that are followd by any alphabetical character and replace it with a "-"
    .replace(/[\s]+(?=[a-zA-Z])/g, "-")

    // Replace any consecutive "-" with one single "-" dash.
    .replace(/--+/g, "-")

    // Eliminate any left spaces
    .replace(/ /g, "")
    .toLowerCase();

  return newStr;

  //   const newStr = str
  //     .replace(/[A-Z]/g, (match) => `-${match.toLowerCase()}`)
  //     .replace(/[\s_]+/g, "-")
  //     .toLowerCase();
  //   if (newStr[0] === "-") {
  //     return newStr.slice(1);
  //   }
  //   return newStr;
  /* Only make changes below this comment */
};

/** DO NOT CHANGE THE LINE BELOW **/
module.exports.spinal = spinal;
