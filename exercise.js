/* Instructions
    Convert the given string to spinal-case. Spinal case is all-letters-in-lowercase-joined-by-dashes

    Hint: research regular expressions for this exercise

*/

/** DO NOT CHANGE THE FUNCTION NAME **/
const spinal = (str) => {
  /* Only make changes below this comment */

  return (
    str
      /* Replacing whitespaces(\s for ws, /g for global) with hyphens */
      .replace(/\s+/g, '-')
      /* Replacing whole capital-letter-starting words([A-Z][a-z]* where * means any number) 
      with a hyphen and then the same word in lower case */
      .replace(/[A-Z][a-z]*/g, (str) => '-' + str.toLowerCase())
      /* Removing double hyphens */
      .replace('--', '-')
      /* Removing hyphen at the beginning of the string */
      .replace(/(^-)/g, '')
      /* If any word has a capital letter in the middle will be lower cased */
      .toLowerCase()
  );

  /* Only make changes below this comment */
};

/** DO NOT CHANGE THE LINE BELOW **/
module.exports.spinal = spinal;
