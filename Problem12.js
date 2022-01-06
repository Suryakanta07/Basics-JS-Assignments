//Simi is learning about palindromic numbers. Her teacher gave him the task to count all palindromic numbers present in that range.Simi has told you about this and want your help. You design an algorithm in order to help simi.
const nDigitPalindromes = n =>{
	return (9 * Math.pow(10, parseInt((n - 1) / 2)));
}

var n = 5;
console.log(nDigitPalindromes(n));