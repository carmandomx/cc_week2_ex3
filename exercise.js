/* Instructions
    Convert the given string to spinal-case. Spinal case is all-letters-in-lowercase-joined-by-dashes

    Hint: research regular expressions for this exercise

*/


/** DO NOT CHANGE THE FUNCTION NAME **/
const spinal = (str) => {
    /* Only make changes below this comment */

    let fStr = '';
    //We create function with RegEx to the determinate the character
    const isAlpha = value => /^[a-zA-Z]*$/.test(value);//return true if the value is Alphabetic(letter)
    const isUpper = value => /^[A-Z]*$/.test(value) //return true if the value is Upper

    for (let s = 0; s < str.length; s++) { //we walk into the str character by character
        if (isAlpha(str[s])) { //If isAlpha return True then...
            fStr += str[s].toLowerCase();//we add the letter to fstr in lower
            if(isUpper(str[s+1])){ //here we evaluate if the next character is Upper, in case it is true then
                fStr += '-';//we add a '-'
            }
        }else{
            fStr += '-'; //the spaces will be added has '-'
        }
        
    }
    return fStr;

    /* Only make changes below this comment */
}


/** DO NOT CHANGE THE LINE BELOW **/
module.exports.spinal = spinal;