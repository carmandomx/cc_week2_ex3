/* Instructions
    Convert the given string to spinal-case. Spinal case is all-letters-in-lowercase-joined-by-dashes

    Hint: research regular expressions for this exercise

*/


/** DO NOT CHANGE THE FUNCTION NAME **/
const spinal = (str) => {
    /* Only make changes below this comment */
    let arr=str.split("");
    let aux=[];
    for(let i=0;i<arr.length;i++){
        if(arr[i]===arr[i].toUpperCase()&&arr[i]!==" "){
            if(i===0){
                aux+=arr[i].toLowerCase();
            }else
            if(arr[i+1]===" "||arr[i-1]===" ")
            {
                 aux+=arr[i].toLowerCase();
            }else{
                 aux+="-"+arr[i].toLowerCase();
            }
        }else{
            if(arr[i]===" "&&arr[i-1]!==" "){
                aux+="-";
            }else if(arr[i]!=="-"){
               aux+=arr[i];  
            }
        }
    }
    let arr1=aux.split("");
    let aux2=[];
    for(let i=0;i<arr1.length;i++){
        if(arr1[i]!==" "){
            aux2+=arr1[i];
        }
    }
    return aux2;
    
    /* Only make changes below this comment */
}





/** DO NOT CHANGE THE LINE BELOW **/
module.exports.spinal = spinal;