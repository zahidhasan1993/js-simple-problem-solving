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



console.log(findingOdd(oddEvenArr));
