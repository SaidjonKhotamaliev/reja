/*F-TASK: 

Shunday findDoublers function tuzing, unga faqat bitta string argument pass bolib, agar stringda bir hil harf qatnashgan bolsa true, qatnashmasa false qaytarishi kerak.
MASALAN: getReverse("hello") return true return qiladi
*/

function getSameLetter(a) {
  let result = false;
  debugger;
  for (let i = 0; i < a.length; i++) {
    const element = a[i];
    for (let j = i + 1; j < a.length; j++) {
      if (element == a[j]) {
        result = true;
        break;
      }
    }
  }
  return result;
}

console.log(getSameLetter("hakunamatata"));

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
//   return natija;
// }

// const javob = findAnimals("dgota", animal_list);
// console.log("javob:", javob);

// // Explanation Sezar Challenge
