/*Let "A" be a string. Remove all the whitespaces and find it's length.
(Print "Error" if N = negative value and 0 if N = 0).*/
const getStringLength = (n) => {
    let length = 0;
    while (n[length] !== undefined)
     length++;
    return length;   
    let str = n;
 while(str.includes(" "))
 {
     str = str.replace(" ", "");
 }
 return str;
}
let n = "surya abcd"
console.log(getStringLength(n));