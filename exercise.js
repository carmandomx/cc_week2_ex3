/* Instructions
    Convert the given string to spinal-case. Spinal case is all-letters-in-lowercase-joined-by-dashes

    Hint: research regular expressions for this exercise

*/


/** DO NOT CHANGE THE FUNCTION NAME **/
const spinal = (str) => {
    /* Only make changes below this comment */
    /* I created a variable so that I can store the string modified if
        I found a lower letter followed by a Cap letter in the global srting, then add a space between those letters*/
    let separateCfL = str.replace(/([a-z])([A-Z])/g, "$1 $2");
    /*Here's almost the same but here we are looking fot Cap letters followed by another Cap letter and again add a space in between*/
    let separateCfC = separateCfL.replace(/([A-Z])([A-Z])/g, "$1 $2");
    /*Once I have the spaces, now I can replace that for a middle dash. Once It finishes, It is gonna be all to lower letters*/
    let joinSpaces = separateCfC.replace(/\s/g, "-").toLowerCase();
    return joinSpaces

    /* Only make changes below this comment */
}






/** DO NOT CHANGE THE LINE BELOW **/
module.exports.spinal = spinal;