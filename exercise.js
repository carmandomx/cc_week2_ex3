/* Instructions
    Convert the given string to spinal-case. Spinal case is all-letters-in-lowercase-joined-by-dashes

    Hint: research regular expressions for this exercise

*/


/** DO NOT CHANGE THE FUNCTION NAME **/
const spinal = (str) => {
    /* Only make changes below this comment */
    
    let finalArr="";//first variable to add - 
    let res=""; //final variable with the result
    for (let i = 0; i < str.length; i++) { //loop to run over all the string 
        
        if (i>0&&str[i]===" ") { //if the position is not 0 and the content of the current position is an empty space
            finalArr=finalArr+"-"; //I add the - to the string
        }
        if (str[i]!=str[i].toLowerCase()&&str[i-1]!=" "&&i>0) { //if the current position have a char in UpperCase and 1position befor there's an empty space and the position is not 0
            finalArr=finalArr+"-"; //I add the - to the string
        } 
        finalArr=finalArr+str[i];//if the current position doesn't apply to any of the past conditions, it would just add the current char to the string    
         }
        

         for (let i = 0; i < finalArr.length; i++) { //now I'll look for ampty spaces  in this loop to creat the final string
            if (finalArr[i]===" ") {//if there's an empty string
                //it would do nothing
            }else{ //otherwise
                res=res+finalArr[i];    //it would add the charcater in the current position to the string
            }            
         }

    /* Only make changes below this comment */
    return res.toLocaleLowerCase(); //And now, I return the final result converted in lowercase
}




/** DO NOT CHANGE THE LINE BELOW **/
module.exports.spinal = spinal;