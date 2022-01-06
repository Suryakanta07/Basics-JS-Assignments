/*You are given the coefficients of a quadratic equation in order A, B & C.
Where A is the coefficient of X2, B is the coefficient of X and C is the constant term in the most simplified form.
Example: For X2 + 5X + 6 = 0, you are given the input as: 1 5 6.
Write a program to find all of the roots of the quadratic.
Note: The output should be up to 2nd decimal place (round off if needed) and in case of a recurring decimal use braces i.e. for eg: 0.33333..... => 0.33.
Note: Use Shri Dharacharya's Method to solve i.e. X = {-b + √(b² - 4ac) } / 2a & {-b-√(b² -4ac)} / 2a*/
const solve = (a, b, c) => {
    var result = ((-1 * b + Math.sqrt(Math.pow(b, 2) - (4 * a * c))) / (2 * a)).toFixed(3);
    var result2 = (-1 * b - Math.sqrt(Math.pow(b, 2) - (4 * a * c))) / (2 * a).toFixed(3);
    return result + "," + result2;
}
console.log(solve(1, 5, 6));