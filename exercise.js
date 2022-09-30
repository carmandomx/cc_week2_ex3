/* Instructions
    Convert the given string to spinal-case. Spinal case is all-letters-in-lowercase-joined-by-dashes

    Hint: research regular expressions for this exercise

*/


/** DO NOT CHANGE THE FUNCTION NAME **/
const spinal = (str) => {
    /* Only make changes below this comment */
   let tempArray;
   let nArray;

   let spPattern = new RegExp(/[_\s]/,'g');
   let uppPattern = new RegExp(/(?=[A-Z])/,'g');
   let strFstTest = spPattern.test(str);
   let strSndTest = uppPattern.test(str);
    
   if(strFstTest && !strSndTest){
        tempArray = str.replace(spPattern,'-');
        nArray = tempArray.toLowerCase();
   }else if(!strFstTest && strSndTest){
        tempArray = str.split(/(?=[A-Z])/).join(' ');
        tempArray = tempArray.replace(spPattern,'-');
        nArray = tempArray.toLowerCase();
   }else if(strFstTest && strSndTest){
        
        tempArray = str.replace(/[_\s]+(?=[a-zA-Z])/g, '-');               
        tempArray = tempArray.replace(/(?=[A-Z])+(?=[A-Z])/g,'-');
        tempArray = tempArray.replace(/([-])+([-])/g,'-');
        nArray = tempArray.toLowerCase();
   }

   return nArray;
    /* Only make changes below this comment */
}





/** DO NOT CHANGE THE LINE BELOW **/
module.exports.spinal = spinal;