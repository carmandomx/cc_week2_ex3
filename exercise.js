/* Instructions
    Convert the given string to spinal-case. Spinal case is all-letters-in-lowercase-joined-by-dashes

    Hint: research regular expressions for this exercise

*/

/** DO NOT CHANGE THE FUNCTION NAME **/
const spinal = (str) => {
  /* Only make changes below this comment */
  let camelCase = str.replace(/([a-z])([A-Z])/g, "$1 $2"); //Agrega un espacio entre letras minúsculas y mayúsculas.
  let dobleUpper = camelCase.replace(/([A-Z])([A-Z])/g, "$1 $2"); //Agrega un espacio entre dos letras mayúsculas
  let spinal = dobleUpper.replace(/\s|_/g, "-"); //Reemplaza todos los espacios y guiones bajos por guiones.
  return spinal.toLowerCase();
  /* Only make changes below this comment */
};

/** DO NOT CHANGE THE LINE BELOW **/
module.exports.spinal = spinal;
