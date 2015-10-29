var numberToWords = function(num) {
  'use strict';
  if (!num) {
    return 'Zero';
  }

  let result = [];

  let tenToWords = (ten) => {
    if (ten < 20) {
      switch (ten) {
        case 1:
          return ['One'];
          break;
        case 2:
          return ['Two'];
          break;
        case 3:
          return ['Three'];
          break;
        case 4:
          return ['Four'];
          break;
        case 5:
          return ['Five'];
          break;
        case 6:
          return ['Six'];
          break;
        case 7:
          return ['Seven'];
          break;
        case 8:
          return ['Eight'];
          break;
        case 9:
          return ['Nine'];
          break;
        case 10:
          return ['Ten'];
          break;
        case 11:
          return ['Eleven'];
          break;
        case 12:
          return ['Twelve'];
          break;
        case 13:
          return ['Thirteen'];
          break;
        case 14:
          return ['Fourteen'];
          break;
        case 15:
          return ['Fifteen'];
          break;
        case 16:
          return ['Sixteen'];
          break;
        case 17:
          return ['Seventeen'];
          break;
        case 18:
          return ['Eighteen'];
          break;
        case 19:
          return ['Nineteen'];
          break;
      }
    } else {
      let n10 = Math.floor(ten / 10);
      let n1 = ten % 10;
      let output;
      switch (n10){
        case 2:
          output = ['Twenty'];
          break;
        case 3:
          output = ['Thirty'];
          break;
        case 4:
          output = ['Forty'];
          break;
        case 5:
          output = ['Fifty'];
          break;
        case 6:
          output = ['Sixty'];
          break;
        case 7:
          output = ['Seventy'];
          break;
        case 8:
          output = ['Eighty'];
          break;
        case 9:
          output = ['Ninety'];
          break;
      }
      if (n1) {
        output = output.concat(tenToWords(n1));
      }
      return output;
    }
  };

  let hundredToWords = (hundred) => {
    let output = [];
    let n100 = Math.floor(hundred / 100);
    if (n100 > 0) {
      output = output.concat(
        tenToWords(n100).concat(['Hundred'])
      );
    }
    let n10 = hundred % 100;
    if (n10) {
      output = output.concat(tenToWords(n10));
    }
    return output;
  };

  let n1000000000 = Math.floor(num / 1000000000);
  if (n1000000000 > 0) {
    result = result.concat(
      hundredToWords(n1000000000).concat('Billion')
    )
  }
  let n1000000 = Math.floor((num % 1000000000) / 1000000);
  if (n1000000 > 0) {
    result = result.concat(
      hundredToWords(n1000000).concat('Million')
    )
  }
  let n1000 = Math.floor((num % 1000000) / 1000);
  if (n1000 > 0) {
    result = result.concat(
      hundredToWords(n1000).concat('Thousand')
    );
  }
  let n0 = num % 1000;
  result = result.concat(
    hundredToWords(n0)
  );
  return result.join(' ');
};


console.log(numberToWords(10000000));
console.log(numberToWords(1000000));
console.log(numberToWords(100000));
console.log(numberToWords(10000));
console.log(numberToWords(1000));
console.log(numberToWords(100));
console.log(numberToWords(20));
console.log(numberToWords(10));
console.log(numberToWords(0));
// console.log(numberToWords(123));
// console.log(numberToWords(1234567891));
// console.log(numberToWords(1234567));
// console.log(numberToWords(123456));
// console.log(numberToWords(12345));
// console.log(numberToWords(1234));
// console.log(numberToWords(123));
// console.log(numberToWords(12));
// console.log(numberToWords(1));
