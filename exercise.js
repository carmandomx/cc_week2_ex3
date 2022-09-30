/* Instructions
    Convert the given string to spinal-case. Spinal case is all-letters-in-lowercase-joined-by-dashes

    Hint: research regular expressions for this exercise

*/


/** DO NOT CHANGE THE FUNCTION NAME **/
const spinal = (str) => {
    /* Only make changes below this comment */
    function spltWprd(stri) //ACTUALLY THOUGH THIS WAS THE ONLY TASK TO DO  
    {
        let splitted=stri.split('');
        console.log(splitted);
        let temwpword=[];
        let tempminus=[];
        let lastArray=[];
        for(let i=0; i<splitted.length; i++)
        {
        
            var simson="";
            simson=splitted[i].toLowerCase(); //LOWERED Letter
            if(simson!=splitted[i]) //IF was upperc
            {
                temwpword.push(simson); //Pushing the UPPER
        
        
            }
            else if(simson==splitted[i]) //Else if was lwrc
            {
                tempminus.push(simson);
            }
        
            if(i!=splitted.length-1) //if next letter exist
            {
                let nextL=""; 
                nextL=splitted[i+1].toLowerCase();
                if(splitted[i+1]!=nextL)//If next is mayus
                {
                    temwpword.push(tempminus.join(''));
                    let word=temwpword.join('');
                    lastArray.push(word);
                    temwpword=[];
                    tempminus=[];
                }
        
            }
        
            if(i==splitted.length-1) //if next DOES NOT exist
            {
                temwpword.push(tempminus.join(''));
                    let word=temwpword.join('');
                    lastArray.push(word);
                    temwpword=[];
                    tempminus=[];
            }
        
        }
        
        let lastreducc=lastArray.join("-");
        
        return lastreducc; //safe
        
        }

        let wordo=str;
    let newwordo=[];
    let newnewword=[];
    wordo=wordo.split(' ');

    for(let j=0; j<wordo.length; j++)
    {
        newwordo.push(wordo[j].toString());
    }
 //New words by space
   for(let k=0; k<newwordo.length; k++)
    {
        let childstr=newwordo[k];
        newnewword[k]=spltWprd(childstr);

    }

    return newnewword.join('-');
    
    /* Only make changes below this comment */
}





/** DO NOT CHANGE THE LINE BELOW **/
module.exports.spinal = spinal;
