// E-TASK:

// Shunday function tuzing, u bitta string argumentni qabul qilib osha stringni teskari qilib return qilsin.
// MASALAN: getReverse("hello") return qilsin "olleh"

function getReverse(string) {
  // let new_array = [];
  // for (let i = string.length - 1; i >= 0; i--) {
  //   new_array.push(string[i]);
  // }
  // const new_string = new_array.join("");
  // return new_string;
  return string.split("").reverse().join("");
}
console.log(getReverse("yowhatsupmf"));

// Explanation => Animal chanllenge
const animal_list = [
  "fox",
  "ant",
  "bird",
  "lion",
  "deer",
  "wolf",
  "bear",
  "from",
  "hen",
  "mole",
  "duck",
  "dog",
  "goat",
  "bat",
  "cock",
  "cat",
  "cow",
];

let natija = [];

function findAnimals(txt, animal_list) {
  for (let i = 0; i < animal_list.length; i++) {
    let animal = animal_list[i];
    let count = 0;
    for (let j = 0; j < animal.length; j++) {
      let animalLetter = animal[j];
      for (let k = 0; k < txt.length; k++) {
        if (animalLetter === txt[k]) {
          count++;
          break;
        }
      }
    }
    if (count == animal.length) {
      natija.push(animal);
    }
  }
  return natija;
}

const javob = findAnimals("dgota", animal_list);
console.log("javob:", javob);

// Explanation Sezar Challenge
