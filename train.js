// MITASK-C

// Shunday class tuzing tuzing nomi Shop, va uni constructoriga 3 hil mahsulot pass bolsin, hamda classning 3ta methodi bolsin, biri qoldiq, biri sotish va biri qabul. Har bir method ishga tushgan vaqt ham log qilinsin.
// MASALAN: const shop = new Shop(4, 5, 2); shop.qoldiq() return hozir 20:40da 4ta non, 5ta lagmon va 2ta cola mavjud! shop.sotish('non', 3) & shop.qabul('cola', 4) & shop.qoldiq() return hozir 20:50da 1ta non, 5ta lagmon va 6ta cola mavjud!
const moment = require("moment");
moment().format("YYYY-MM-DD HH:mm:ss");
class Shop {
  constructor(apple, banana, mango) {
    this.apple = apple;
    this.banana = banana;
    this.mango = mango;
  }

  qoldiq() {
    moment().format("YY-MM-DD HH:mm:ss");
    return console.log(
      `hozir ${moment()}da ${this.apple}ta olma ${this.banana}ta banan va ${
        this.mango
      }ta mango mavjud!`
    );
  }
  sotish(mahsulot, son) {
    this[mahsulot] -= son;
    moment().format("YYYY-MM-DD HH:mm:ss");

    return console.log(`Hozir ${moment()} da ${son}ta ${mahsulot} sotildi!;
    ${this.apple}ta olma ${this.banana}ta banan va ${
      this.mango
    }ta mango mavjud!`);
  }
  qabul(mahsulot, son) {
    this[mahsulot] += son;
    moment().format("YYYY-MM-DD HH:mm:ss");

    return console.log(`Hozir ${moment()} da ${son}ta ${mahsulot} qabul qilindi!;
      ${this.apple}ta olma ${this.banana}ta banan va ${
      this.mango
    }ta mango mavjud!`);
  }
}

const shop = new Shop(4, 7, 10);
shop.qoldiq();
shop.sotish("mango", 7);
shop.qabul("banana", 3);
