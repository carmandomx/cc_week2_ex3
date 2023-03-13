/* Instructions
    Convert the given string to spinal-case. Spinal case is all-letters-in-lowercase-joined-by-dashes

    Hint: research regular expressions for this exercise

*/


/** DO NOT CHANGE THE FUNCTION NAME **/
const spinal = (str) => {
    /* Only make changes below this comment */

    // split str and star a map
    return (str.split('')).map( (element, index ) => 
        // the process of map works in the next way:
        // it only return element if index is not 0 or the element equals ' '.
        // if the element equals ' ' and the next element match with regex for Uppercase
        // it will return ''. If the next element is not on Uppercase it will return a
        // '-'. In casem the actual element is not a ' ' it will replace the Uppercase
        // with an '-' and the actual element.

        // at the end, join the splited str again and convert str to Lowecase.
        index > 0 ? element === ' ' ? str[index+1].match(/[A-Z]/) ?
        '' : '-' : element.replace(/[A-Z]/, '-' + element) : element )
        .join('').toLowerCase();
    /* Only make changes below this comment */
}





/** DO NOT CHANGE THE LINE BELOW **/
module.exports.spinal = spinal;