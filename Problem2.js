//You are given with a number "N", find its cube.
const cubes= n =>
{
	let e = 0;
	for (let x = 1; x <= n; x++)
		e= x * x * x;
	return e;
}
	let n = 2;
	console.log(cubes(n));