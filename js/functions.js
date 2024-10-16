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
//количество подъездов
//количество квартир на площадке
//номер квартиры

const getEntrance = (countFloor, countEntrance, countFlatOnFloor, numberFlat) => {
  const sumFlat = countFloor * countFlatOnFloor * countEntrance;
  const countFlatOnEntrance = sumFlat / countEntrance;
  const listEntrance = [];
  const house = {};

  for (let i = 1; i <= countEntrance; i++) {
    listEntrance.push(i);
  }

  let numberFlatHouse = 0;
  for (let i = 1; i <= countEntrance; i++) {
    for (let j = 1; j <= countFlatOnEntrance; j++) {
      numberFlatHouse ++;
      house[numberFlatHouse] = [i];
    }
  }

  let userFloor = 1;
  const startNumber = countFlatOnEntrance * (house[numberFlat] - 1) + 1;

  for (let i = 0; i < countFlatOnEntrance; i++) {
    if ((i === 0 ? 1 : i) % countFlatOnFloor === 0) {
      userFloor++ ;
    }

    if (startNumber + i === parseInt(numberFlat, 10)) {
      break;
    }
  }

  //console.log(`Подьезд ${ house[numberFlat]}. Этаж ${ userFloor} `);
  return `Подьезд ${ house[numberFlat]}. Этаж ${ userFloor} `;
};

getEntrance(9, 6, 4, 183);
