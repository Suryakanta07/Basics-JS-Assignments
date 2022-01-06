//Write a code to get an integer N and print the sum of values from 1 to N.
const numberSum = N => {
    var total = 0;
      for(var i = 1; i <= N; i++){
        total += i;
      }
      return total;
  }
  let N=10;
  console.log(numberSum(10));