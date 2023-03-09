/* Instructions
    Convert the given string to spinal-case. Spinal case is all-letters-in-lowercase-joined-by-dashes

    Hint: research regular expressions for this exercise

*/

/** DO NOT CHANGE THE FUNCTION NAME **/
const spinal = (str) => {
  /* Only make changes below this comment */
  let nuevo= str.replace(/(?!^)([A-Z])/g,' $1').replace(/[_\s]+(?=[a-zA-Z])/g,'-').toLowerCase();
return nuevo;


}

  


/** DO NOT CHANGE THE LINE BELOW **/
module.exports.spinal = spinal;
