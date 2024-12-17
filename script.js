/*------------------------REVERSE STRING------------------------------*/

function reverseString(str) {
  let reversedWord = [];

  for (let i = str.length - 1; i >= 0; i--) {
    reversedWord += str[i];
  }

  return reversedWord;
}

console.log(reverseString("Hello javascript programming"));

/*----------------------------------------------------------------------*/
/*-------------------------LONGEST WORD---------------------------------*/

function findLongestWord(sentence) {
  let words = sentence.split(" ");
  let longestWord = "";

  for (let word of words) {
    if (word.length > longestWord.length) {
      longestWord = word;
    }
  }
  return longestWord;
}

console.log(findLongestWord("i love javascript programming"));

/*-----------------------------------------------------------------------*/
/*-------------------------PALINDROME----------------------------------- */

function checkPalindrome(word) {
  let stringOne = word.split("").reverse().join("");

  return word === stringOne;
}

console.log(checkPalindrome("kayak"));

/*------------------------------------------------------------------------*/
/*---------------------------DUPLICATE------------------------------------*/

function removeDuplicate(num) {
  let uniqueElements = [];

  for (let i = 0; i < num.length; i++) {
    if (uniqueElements.indexOf(num[i]) === -1) {
      uniqueElements.push(num[i]);
    }
  }

  return uniqueElements;
}

console.log(removeDuplicate([1, 2, 2, 3, 3, 4, 4, 5, 6, 7, 8, 8]));

/*-----------------------------------------------------------------------------*/
/*----------------------------ANAGRAMS-----------------------------------------*/

function checkAnagrams(str1, str2) {
  let wordOne = str1.split("").sort().join("");
  let wordTwo = str2.split("").sort().join("");

  return wordOne === wordTwo;
}

console.log(checkAnagrams("silent", "listen"));
console.log(checkAnagrams("one", "two"));

/*-----------------------------------------------------------------------------*/
/*----------------------------LARGEST-----------------------------------------*/

function findLargestNumber(num) {
  let largest = [];

  for (let i = 0; i <= num.length; i++) {
    if (num[i] > largest) {
      largest = num[i];
    }
  }
  return largest;
}

console.log(findLargestNumber([328, 7, 8, 9, 10, 11]));

/*-----------------------------------------------------------------------------*/
/*----------------------------PRIME NUMBERS-------------------------------------*/

function checkPrimeNumbers(num) {
  for (let i = 2; i <= num / 2; i++) {
    if (num % i === 0) {
      return console.log("not prime number", num);
    }
  }
  return console.log("prime#", num);
}

console.log(checkPrimeNumbers(7));
console.log(checkPrimeNumbers(10));

/*-----------------------------------------------------------------------------*/
/*----------------------------FACTORIAL-------------------------------------*/

function factorial(n) {
  let res = 1;

  if (n === 0) return 1;
  for (let i = 2; i <= n; i++) res = res * i;
  return res;
}

let n = 5;

console.log(factorial(n));

/*-----------------------------------------------------------------------------*/
/*----------------------------Remove white space-------------------------------------*/

let myString = "Hello javaScript!    let's 'have fun";
console.log(removeWhiteSpace(myString));

function removeWhiteSpace(space) {
  let result = space.replace(/\s/g, "");
  return result;
}

/*------------------------------Recursion---------------------------------------*/
let z = 1;

function show() {
  console.log("counting ", z);
  z++;
  if (z <= 10) {
    show();
  } else {
    console.log("bomb exploded. boom!!!");
  }
}

show();
