/* Instructions
    Convert the given string to spinal-case. Spinal case is all-letters-in-lowercase-joined-by-dashes

    Hint: research regular expressions for this exercise

*/


/** DO NOT CHANGE THE FUNCTION NAME **/
const spinal = (str) => {
    /* Only make changes below this comment */
    //We start declaring the regular expressions we´re gonna use to search the String
    const regexupper = /[A-Z]/;
    const regexblank = /[\s]/;

    //We declare all the temp variables we need
    let spinalarr = str.split('');
    let temp = str;
    let index = 0;

    //We start by checking if any situations are left if not, stop
    while (regexupper.test(temp) || regexblank.test(temp)) {
        //We lower every letter first
        if(regexupper.test(temp)){
            index = temp.search(regexupper);
            spinalarr[index] = String.fromCharCode(temp[index].charCodeAt() + 32);
            //If there aren't blank spaces before a upper case, we add a -
            if(index > 0 && spinalarr[index-1] !== " "){
                spinalarr.splice(index, 0, "-");
            }         
            //Here we just update the string   
            temp = spinalarr.join(''); 
        //After all uppercase are lowered, we change all blank spaces to -
        }else if(regexblank.test(temp)){
            index = temp.search(regexblank);
            spinalarr[index] = '-';
            temp = spinalarr.join('');
        }
    }
    //We return the String result of the spinal-case
    return temp;

    /* Only make changes below this comment */
}



/** DO NOT CHANGE THE LINE BELOW **/
module.exports.spinal = spinal;