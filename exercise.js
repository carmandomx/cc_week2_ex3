/* Instructions
    Convert the given string to spinal-case. Spinal case is all-letters-in-lowercase-joined-by-dashes

    Hint: research regular expressions for this exercise
*/

/** DO NOT CHANGE THE FUNCTION NAME **/
const spinal = (str) => {
  /* Only make changes below this comment */
  //Validation for string and true values for "str"
  if (typeof str !== "string" || !str) {
    return "Only string values";
  }
  //We create a new array that will store our spinal case string.
  let strArr = new Array();
  //we iterate on the "str" string
  for (let i = 0; i < str.length; i++) {
    //first condition: for elements that aren't upper cases or blankspaces, add them to "strArr" array.
    if (str[i] !== str[i].toUpperCase() && str[i] !== " ") {
      strArr.push(str[i]);
    }
    //second condition: if element str[i] is a blankspace then we change it for a dash.
    if (str[i] === " ") {
      strArr.push("-");
      //third condition: in case that str[i] be a upper case, we have two situations for validate.
    } else if (str[i] === str[i].toUpperCase()) {
      //if index i not be first letter of "str" and previous value not be a blankspace, for that we add a dash.
      if (i !== 0 && str[i - 1] !== " ") {
        strArr.push("-");
      }
      //the other letters will be added to the array.
      strArr.push(str[i]);
    }
  }
  //for last, our "strArr" join (like string) and we turn it to lower case and return it.
  return strArr.join("").toLowerCase();
  /* Only make changes below this comment */
};

/** DO NOT CHANGE THE LINE BELOW **/
module.exports.spinal = spinal;
