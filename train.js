// D-TASK:

// Shunday function tuzing, u 2ta string parametr ega bolsin, hamda agar har ikkala string bir hil harflardan iborat bolsa true aks holda false qaytarsin
// MASALAN checkContent("mitgroup", "gmtiprou") return qiladi true;

let a = "mitgroup";
let b = "gmtiprou";
let natija1 = 0;
let natija2 = 0;
function checkTwoString(a, b) {
  for (let i = 0; i < a.length; i++) {
    checkLoop(i);
    function checkLoop(i) {
      for (let j = 0; j < b.length; j++) {
        if (b[j] === a[i]) {
          natija1++;
          break;
        }
      }
    }
  }

  for (let i = 0; i < b.length; i++) {
    checkLoop(i);
    function checkLoop(i) {
      for (let j = 0; j < a.length; j++) {
        if (a[j] === b[i]) {
          natija2++;
          break;
        }
      }
    }
  }
  return natija2 === b.length && natija1 === a.length;
}
console.log(checkTwoString(a, b));
