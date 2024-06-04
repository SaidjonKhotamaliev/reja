//       G-TASK:

// Shunday function tuzingki unga integerlardan iborat array pass bolsin va function bizga osha arrayning eng katta qiymatiga tegishli birinchi indexni qaytarsin.
// MASALAN: getHighestIndex([5, 21, 12, 21, 8]) return qiladi 1 sonini.

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 12, 32, 23, 52, 192, 64, 25];
let highestNumber = Number.MIN_VALUE;
function getHighestIndex(arr) {
  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    if (highestNumber < element) {
      highestNumber = element;
    }
  }
  let text = highestNumber.toString();
  if (text.length > 1) {
    return text[1];
  } else return text[0];
}
console.log(getHighestIndex(arr));

// Explanation => Animal chanllenge
// const animal_list = [
//   "fox",
//   "ant",
//   "bird",
//   "lion",
//   "deer",
//   "wolf",
//   "bear",
//   "from",
//   "hen",
//   "mole",
//   "duck",
//   "dog",
//   "goat",
//   "bat",
//   "cock",
//   "cat",
//   "cow",
// ];

// let natija = [];

// function findAnimals(txt, animal_list) {
//   for (let i = 0; i < animal_list.length; i++) {
//     let animal = animal_list[i];
//     let count = 0;

//     for (let j = 0; j < animal.length; j++) {
//       let animalLetter = animal[j];

//       for (let k = 0; k < txt.length; k++) {
//         if (animalLetter === txt[k]) {
//           count++;
//           break;
//         }
//       }
//     }

//     if (count == animal.length) {
//       natija.push(animal);
//     }
//   }
//   return result;
// }

// const javob = findAnimals("dgota", animal_list);
// console.log("javob:", javob);
