/* Instructions
    Convert the given string to spinal-case. Spinal case is all-letters-in-lowercase-joined-by-dashes

    Hint: research regular expressions for this exercise

*/


/** DO NOT CHANGE THE FUNCTION NAME **/
const spinal = (str) => {
    /* Only make changes below this comment */
    str = str.replace(/([a-z])([A-Z])/g, '$1 $2'); //use the replace method with the regular expression of a lowercase next to an uppercase and put a space between them
    str = str.replace(/([A-Z])([A-Z])/g, '$1 $2'); //use the replace method with the regular expression of an uppercase next to another and put a space between them
    str = str.split(""); //split the string into an array
    for(let i=0; i<str.length; i++) { //for loop to iterate through the array
        if(str[i] === " ") { //if the character is a space, replace it with a -
            str[i] = "-";
        }
        str[i] = str[i].toLowerCase(); //set the uppercases lo lowercases
    }
    str = str.join(""); //turn the array back to a string
    return str; //return the string
    /* Only make changes below this comment */
}

/** DO NOT CHANGE THE LINE BELOW **/
module.exports.spinal = spinal;