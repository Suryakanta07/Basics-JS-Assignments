//Ajay is given a series(In example).he gone through the series but unable to understand it properly,he has hired you.Your task is to understand the series and print the series 2,6,12,20,30... .You are given with a number ‘n’. Find the nth number of series.
const findNthTerm = n =>{
    let j=0;
 for (let i = 1; i <= n; i++)
  j = (i * i)+i;
       return j;
}
  let n=5;
       console.log(findNthTerm(n));