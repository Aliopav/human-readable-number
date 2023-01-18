module.exports = function toReadable(number) {
  const stringOfNumber = [
    "zero",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
    "ten",
    "eleven",
    "twelve",
    "thirteen",
    "fourteen",
    "fifteen",
    "sixteen",
    "seventeen",
    "eighteen",
    "nineteen",
    "twenty",
];
const dozens = ["twenty", "thirty", "forty",'fifty','sixty','seventy','eighty','ninety'];
const arrNumber=String(number).split("")
console.log(arrNumber[1]);



if (number <= 20) {
    return stringOfNumber[number];
}
if (number<100 && number>20 && arrNumber[1]==0) {
    return (`${dozens[arrNumber[0]-2]}`); 
 }
if (number<100 && number>20) {
   return (`${dozens[arrNumber[0]-2]} ${stringOfNumber[arrNumber[1]]}`); 
}
const arrNumber2=arrNumber.splice(1,2)
const number2=Number(arrNumber2.join(''))
   
if (number<1000&&number>=100) {
    if (number2==0) {
        return (`${stringOfNumber[arrNumber[0]]} hundred`);
    }
    if (number2<=20 && number2!=0) {
        return (`${stringOfNumber[arrNumber[0]]} hundred ${stringOfNumber[number2]}`);
    }
    if (number2>20 && arrNumber2[1]==0) {
        return (`${stringOfNumber[arrNumber[0]]} hundred ${dozens[arrNumber2[0]-2]}`);
    }
    if (number2>20) {
        return (`${stringOfNumber[arrNumber[0]]} hundred ${dozens[arrNumber2[0]-2]} ${stringOfNumber[arrNumber2[1]]}`);
    }
   
}


};

