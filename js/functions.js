//task 1
const checkStringLength = (text, maxLength) => text.length <= maxLength;

//task 2
const checkPalindrome = (text) => {
  const userString = text.replaceAll(' ', '').toLowerCase();
  let palindrome = '';

  for (let i = 0; i < userString.length; i++) {
    palindrome += userString.at(userString.length - 1 - i);
  }
  return palindrome === userString;
};

//task 3
const getPozitiveInteger = function(text) {
  const userString = String(text).replaceAll(' ', '');
  let number = '';
  for (let i = 0; i < userString.length; i++) {
    if (!Number.isNaN(userString.at(i) * 1)) {
      number += userString.at(i);
    }
  }

  return parseInt(number, 10);
};

//task 4

//Программа выдает номер подьезда и этаж.
//Входные параметры:
//количество этажей
//количество квартир на площадке
//номер квартиры

const getEntrance = (countFloor, countFlatOnFloor, numberFlat) => {
  const countFlatInEntrance = countFloor * countFlatOnFloor;
  const numberEntrance = Math.ceil(numberFlat / countFlatInEntrance);
  const floor = (numberFlat % countFlatInEntrance === 0) ? numberFlat : Math.ceil(numberFlat % countFlatInEntrance / 4);
  return {numberEntrance, floor};
};

//console.log(getEntrance(9, 4, 109));

// task 5

const formatNumber = (userNumber) => {
  const formatUserNumber = String(userNumber).split('').reverse().map((item, index) => {
    item = ((index - 2) % 3 === 0) ? ` ${item}` : item;
    return item;
  }).reverse().join('');

  return formatUserNumber;
};

console.log(formatNumber(1115467805));
