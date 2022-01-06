//You are given with a number A i.e. the temperature in Celcius. Write a program to convert this into Fahrenheit.
const converter = grades =>{
    const result = (grades * 9/5) + 32;
      return (grades+"°C is " +result + "°F");
    }
    let N=12
    console.log(converter(N, "fahrenheit"));  