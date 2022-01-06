//You will be provided with a number. Print the number of days in the month corresponding to that number.
const daysInMonth = (month, year) => new Date(year, month, 0).getDate();   
console.log(daysInMonth(1, 2021));
console.log(daysInMonth(2, 2021));
console.log(daysInMonth(6, 2021));
console.log(daysInMonth(12, 2021));