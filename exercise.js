/* Instructions
    Convert the given string to spinal-case. Spinal case is all-letters-in-lowercase-joined-by-dashes

    Hint: research regular expressions for this exercise

*/


/** DO NOT CHANGE THE FUNCTION NAME **/
const spinal = (str) => {

    
    //String to store the new elements
    let newStr = ''

    for (let i = 0; i < str.length; i++) {

        //Current and next elements to compare each other
        const element = str[i];
        const nxtElemnt = str[i+1];


        //If its a non alphabetic letter will change into a dash
        if(element === ' ' || element === '_' || element === '-'){
            newStr += '-';
            continue
        }

        //Will check if the actual element its upper case, if yes, turn into lower a
        if(element.toUpperCase() === element){
            
            newStr += element.toLowerCase();

            if (nxtElemnt
                && nxtElemnt !== '-'
                && nxtElemnt !== ' '
                && nxtElemnt !== '_'
                && nxtElemnt.toUpperCase() === nxtElemnt){
                    newStr += '-';
    
                }
            continue
        }

        //If the element doesnt enter to any of the above its a lower case
        newStr += element

        //We asume that if the next letter its an upper case, a space should exist there.
        if (nxtElemnt
            && nxtElemnt !== '-'
            && nxtElemnt !== ' '
            && nxtElemnt !== '_'
            && nxtElemnt.toUpperCase() === nxtElemnt){
                newStr += '-';

            }
        
    }

    return newStr

}


//console.log(spinal('this is a test'))


/** DO NOT CHANGE THE LINE BELOW **/
module.exports.spinal = spinal;