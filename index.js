const a = [1, 2, 3, 4, 1, 5, 2, 0, 15, 5, 10];

//find the dublicate

const b = a.filter((value, index, arr) => arr.indexOf(value) !== index);

//find the max and min number of the array

const max = Math.max(...a);
const min = Math.min(...a);

// console.log(`max number is ${max} & min number is ${min}`);

// with reducer

const maxNumber = (arr) => {
  return arr.reduce((pre, cur) => {
    return pre > cur ? pre : cur;
  });
};

//find second largest value

const findSecondLargest = (arr) => {
  let firstValue = Math.max(...arr);
  let index = arr.indexOf(firstValue);

  arr.splice(index, 1);
  let secondValue = Math.max(arr);

  return secondValue;
};

// console.log(a);

// finding missing value

const arr = [1, 2, 3, 4, 5, 6, 7, 10];

const missingValue = [];
const findingMissingValue = (arr) => {
  const maxValue = Math.max(...arr);
  const minValue = Math.min(...arr);
  for (let i = minValue; i < maxValue; i++) {
    if (arr.indexOf(i) < 0) {
      missingValue.push(i);
    }
  }
  return missingValue;
};

// finding even number

const oddEvenArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const findingOdd = (arr) => {
  let odd = arr.filter((item) => item % 2 !== 0);
  return odd;
};

const findingEven = (arr) => {
  let even = arr.filter((item) => item % 2 === 0);
  return even;
};

// find the some of all element in an array

const sumOfAll = (arr) => {
  const sum = arr.reduce((pre, cur) => pre + cur, 0);
  return sum;
};

// find fictorial of a given number

const findFactorial = (num) => {
  let factorial = 1;
  for (let i = 1; i <= num; i++) {
    factorial = factorial * i;
  }
  return factorial;
};

//finding prime number

const findingPrimeNumber = (num) => {
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return `${num} is not a prime number`;
    } else {
      return `${num} is a prime number`;
    }
  }
};

// find vowel and consonant

const findVowelAndConsonant = (alp) => {
  const newAlp = alp.toLowerCase();
  if (
    newAlp == "a" ||
    newAlp == "e" ||
    newAlp == "i" ||
    newAlp == "o" ||
    newAlp == "u"
  ) {
    return `${alp} is vowel`;
  } else {
    return `${alp} is consonant`;
  }
};

// find vowels from string

const findVowelCount = (sen) => {
  const vowel = ["a", "e", "i", "o", "u"];
  let count = 0;
  for (const latter of sen.toLowerCase()) {
    if (vowel.includes(latter)) {
      count = count + 1;
    }
  }
  return count;
};

// reverse a string

const reverseString = (str) => {
  const strToArray = str.split("");
  const strArrayReverse = strToArray.reverse();
  const reverseArrayToStr = strArrayReverse.join("");
  return reverseArrayToStr;
};

console.log(reverseString("this letter is for the king of the socity i want to give a msg to you"));
