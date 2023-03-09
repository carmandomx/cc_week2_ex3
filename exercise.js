/* Instructions
    Convert the given string to spinal-case. Spinal case is all-letters-in-lowercase-joined-by-dashes

    Hint: research regular expressions for this exercise

*/


/** DO NOT CHANGE THE FUNCTION NAME **/
const spinal = (str) => {
    /* Only make changes below this comment */
let re = /\s|_|(?=[A-Z])/g; //find all the spaces, low dashed and, uppercase lettters  
let re2 = /[.,/¿?*]/g //find some non-alphanumerical characters
let newStr = str.split(re).join('-').replace(re2,"").toLowerCase(); 
//split all the words and joins it with a "-" then if there is a non-alphanumerical character replace it with ""

    return newStr
}
    /* Only make changes below this comment */

console.log(spinal("Hello_world, my is Sergio? 2*5"))





/** DO NOT CHANGE THE LINE BELOW **/
module.exports.spinal = spinal;