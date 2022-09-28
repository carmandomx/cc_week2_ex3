/* Instructions
    Convert the given string to spinal-case. Spinal case is all-letters-in-lowercase-joined-by-dashes

    Hint: research regular expressions for this exercise

*/


/** DO NOT CHANGE THE FUNCTION NAME **/
const spinal = (str) => {
    /* Only make changes below this comment */

    // For loop that replace each space or capital letter with a dash (-).
    for (let index = 0; index < str.length; index++) {
        const element = str[index];                                     //  Creates a constant to handle the current letter.
        
        //  If there is a space, replace it with a dash. If there is a capital letter, replace it with a lowercase letter.
        if (element === ' ') {                                          //  If the element is a space,
            str = str.replace(' ','-');                                 //  replace spaces with dashes.
        }
        else if (index === 0 && element.toUpperCase() === element) {    //  If the letter is the first letter and it is a capital letter, 
            str = str.replace(element,element.toLowerCase());           //  replace the letter with a lowercase letter.
        }
        else if (element.toUpperCase() === element){                    //  If the letter is uppercase, replace it with a dash and the lowercase letter.
            if (str[index-1] === '-') {                                 //  If the previous letter is a dash,
                add = element.toLowerCase();                            //  just add the lowercase letter to the replacement.
            }
            else {                                                      //  else add the dash and then the lowercase letter. 
                add = '-' + element.toLowerCase();
            }
            str = str.replace(element,add);                             //  Replaces the letter of str with the replacement.
            index++;                                                    //  Increase the index due to the increase of the string.
        }
    };
    return str;                                                         // Return the spinal-case string.
    /* Only make changes below this comment */
}





/** DO NOT CHANGE THE LINE BELOW **/
module.exports.spinal = spinal;