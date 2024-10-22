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
  const numberEntrance = Math.ceil(numberFlat / (countFloor * countFlatOnFloor));
  const floor = (numberFlat % (countFloor * countFlatOnFloor) === 0) ? 9 : Math.ceil(numberFlat % (countFloor * countFlatOnFloor) / 4);
  return console.log(`подъезд ${ numberEntrance } этаж ${ floor}`);
};

getEntrance(9, 4, 109);
