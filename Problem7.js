//You are provided with a number "N", Find the Nth term of the series: 1 , 4, 9, 16, 25, 36, 49, 64, 81, ....... (Print "Error" if N = negative value and 0 if N = 0).
const findNthTerm = n =>{
    let j=0;
 for (let i = 1; i <= n; i++)
  j = i * i;
       return j;
}
  let n=18;
       console.log(findNthTerm(n));