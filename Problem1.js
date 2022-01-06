//You are provided with a number, "N". Find its factorial.
const factorial = n => {
        var res = 1, i;
        for (i = 2; i <= n; i++)
            res *= i;
        return res;
    }
 const num = 0;
 console.log("Factorial of " + num + " is " + factorial(0));