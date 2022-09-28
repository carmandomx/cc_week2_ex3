/* Instructions
    Convert the given string to spinal-case. Spinal case is all-letters-in-lowercase-joined-by-dashes

    Hint: research regular expressions for this exercise

*/


/** DO NOT CHANGE THE FUNCTION NAME **/
const spinal = (str) => {
    /* Only make changes below this comment */
    //The main problem is that we can't put a space before each uppercase, 
    //because some strings start with uppercase.


    //So, I am using .replace() method with groups.
    //The first group are all lowercase letters [a-z]. This group is represented as '$1'.
    //The second group are all uppercase letters [A-Z]. This group is represented as '$2'.
    //So I'm telling the .replace() method to search for all lowercase and uppercase joins.
    //and replace them with the same two letters but with a space in between "$1 $2".
    let withSpaces = str.replace(/([a-z])([A-Z])/g, "$1 $2")

    //I also have to cover the case where there are two uppercases together (for example:'IsATest').
    let withSpaces2 = withSpaces.replace(/([A-Z])([A-Z])/g, "$1 $2")

    //At this point, I already have all the words separated by a space
    //So I just have to replace the spaces with "-" and convert all the letters to lowercase.
    let spinalCase = withSpaces2.replace(/ /g, "-").toLowerCase();

    //Returning the spinalCase
    return spinalCase;
    
    /* Only make changes below this comment */
}





/** DO NOT CHANGE THE LINE BELOW **/
module.exports.spinal = spinal;