/* Instructions
    Convert the given string to spinal-case. Spinal case is all-letters-in-lowercase-joined-by-dashes

    Hint: research regular expressions for this exercise

*/


/** DO NOT CHANGE THE FUNCTION NAME **/
const spinal = (str) => {
    /* Only make changes below this comment */

    let spinalStr = ""; // Result variable

    for (let i = 0; i < str.length; i++) { // Get over through all the str
        
        if (str[i] === ' ') { // If find a blank space then...
            spinalStr += '-';   // Concatenates a "-" into the "spinalStr" variable instead of the blank space
        }

        else{ // If doesn't find a blank space then...
            if (str[i] === str[i].toUpperCase()) { // Search to uppercase char

                if (i === 0) { // If the uppercase is at index 0 of the str then...
                    spinalStr += str[i].toLowerCase(); // Changes the char to lowercase and concatenates it without "-"
                }
                else{ // If the uppercase isn't at index 0 of the str then...
                    if (str[i-1] === ' ') { // And if there is a blank space before the uppercase char 
                        spinalStr += str[i].toLowerCase(); // Changes the char to lowercase and concatenates it without "-"
                    }
                    else{
                        spinalStr += '-' + str[i].toLowerCase(); // Changes the char to lowercase and concatenates "-" before the char
                    }
                }
            }

            else{ // If doesn't find a uppercase then...
                spinalStr += str[i]; //Concatenates the char to the spinalStr variable
            }
        }

    }

    return spinalStr;

    /* Only make changes below this comment */
}



/** DO NOT CHANGE THE LINE BELOW **/
module.exports.spinal = spinal;