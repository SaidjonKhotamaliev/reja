// A TASK:
// Shunday 2 parametrli function tuzing, hamda birinchi parametrdagi letterni ikkinchi parametrdagi sozdan qatnashga sonini return qilishi kerak boladi.
// MASALAN countLetter("e", "engineer") 3ni return qiladi.

function justFunction(letter, word, callback) {
  if (typeof letter !== "string" && typeof word !== "string")
    callback("insert a string!", null);
  else if (word.includes(letter)) {
    let javob = word.split(letter).length - 1;
    callback(null, javob);
  } else callback(null, 0);
}

justFunction("e", "engineer", (err, data) => {
  if (err) console.log("ERROR: ", err);
  console.log("javob:", data);
});

// PDP univ courses TASK:
// 1 dan n gacha summani hisoblaydigan callback function tuzing.
// function countN(n, callback) {
//   if (n <= 0) callback("Musbat son kiriting!", null);
//   else
//     for (let i = 0; i <= n; i++) {
//       callback(null, console.log(i));
//     }
// }
// countN(20, (err, data) => {
//   if (err) console.log("ERROR: ", err);
//   console.log("javob:", data);
// });

// console.log("Jack Ma maslahatlari");
// const list = [
//   "yaxshi talaba bo'ling", // 0-20
//   "to'g'ri boshliq tanlang va ko'proq xato qiling", // 20-30
//   "uzingizga ishlashni boshlang", // 30-40
//   "siz kuchli bo'lgan narsalarni qiling", // 40-50
//   "yoshlarga investitsiya qiling", // 50-60
//   "endi dam oling, foydasi yo'q", // 60+
// ];

// Callback function define part

// function maslahatBering(a, callback) {
//   if (typeof a !== "number") callback("insert a number", null);
//   else if (a <= 20) callback(null, list[0]);
//   else if (a > 20 && a <= 30) callback(null, list[1]);
//   else if (a > 30 && a <= 40) callback(null, list[2]);
//   else if (a > 40 && a <= 50) callback(null, list[3]);
//   else if (a > 50 && a <= 60) callback(null, list[4]);
//   else {
//     setInterval(function () {
//       callback(null, list[5]);
//     }, 2000);
//   }
// }

// call callback function

// console.log("passed here 0");
// maslahatBering(65, (err, data) => {
//   if (err) console.log("ERROR: ", err);
//   console.log("javob:", data);
// });
// console.log("passed here 1");

// async fujnction

// async function maslahatBering(a) {
//   if (typeof a !== "number") throw new Error("insert a number");
//   else if (a <= 20) return list[0];
//   else if (a > 20 && a <= 30) return list[1];
//   else if (a > 30 && a <= 40) return list[2];
//   else if (a > 40 && a <= 50) return list[3];
//   else if (a > 50 && a <= 60) return list[4];
//   else {
//     return new Promise((resolve, reject) => {
//       setTimeout(() => {
//         resolve(list[5]);
//       }, 5000);
//     });
//   }
// }

// call via then / catch

// console.log("passed here 0");
// maslahatBering(35)
//   .then((data) => {
//     console.log("Javob: ", data);
//   })
//   .catch((err) => {
//     console.log("ERROR: ", err);
//   });
// console.log("passed here 1");

// call via async / await

// async function run() {
//   let javob = await maslahatBering(27);
//   console.log(javob);
//   javob = await maslahatBering(72);
//   console.log(javob);
//   javob = await maslahatBering(41);
//   console.log(javob);
// }
// run();
