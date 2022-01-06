//You are given with an array. Your task is to print the left rotated array after k opearations. Time:O(n) Extra Space: O(1)
const leftRotate = (arr, n, k) =>{
	
	let mod = k % n;

	for (let i = 0; i < n; i++)
		console.log((arr[(mod + i) % n]) + " ");
}
let arr = [ 1, 2, 3, 4, 5, 6, 7 ];
let n = arr.length;

let k = 73;
console.log(leftRotate(arr, n, k));