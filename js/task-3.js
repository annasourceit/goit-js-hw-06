"use strict";


// Напиши клас StringBuilder, який приймає один параметр
// initialValue — довільний рядок, який записується у приватну властивість
// value об'єкта, що створюється.

// Оголоси такі методи класу:

// getValue() — повертає поточне значення приватної властивості value.
// padEnd(str) — отримує параметр str(рядок) і додає його в кінець
// значення приватної властивості value об'єкта, який викликає цей метод.
// padStart(str) — отримує параметр str(рядок) і додає його на початок
// значення приватної властивості value об'єкта, який викликає цей метод.
// padBoth(str) — отримує параметр str(рядок) і додає його на початок і в
// кінець значення приватної властивості value об'єкта, який викликає цей метод.

// Вимоги:

// Оголошено клас StringBuilder.
// Властивість value у класі StringBuilder оголошена приватною.
// У класі StringBuilder оголошено методи getValue, padEnd, padStart і padBoth.
// Метод getValue повертає значення приватної властивості value екземпляра класу,
// який його викликає.
// Методи padEnd, padStart і padBoth змінюють значення приватної властивості 
// value екземпляра класу, який його викликає.
// У результаті виклику new StringBuilder(".") значення змінної builder — об'єкт.
// Об'єкт builder не містить публічної властивості value.
// Перший виклик builder.getValue() одразу після ініціалізації екземпляра повертає
// рядок..
// Другий виклик builder.getValue() після виклику builder.padStart("^") повертає
// рядок ^..
// Третій виклик builder.getValue() після виклику builder.padEnd("^") повертає
// рядок ^.^.
// Четвертий виклик builder.getValue() після виклику builder.padBoth("=") 
// повертає рядок =^.^=.
// Результати всіх викликів виведено в консоль.


class StringBuilder {
  #initialValue;

  constructor(value) {
    this.#initialValue = value;
  }

  getValue() {
    return this.#initialValue;
  }
  padEnd(str) {
    this.#initialValue = this.#initialValue + str;
  }
  padStart(str) {
    this.#initialValue = str + this.#initialValue ;
  }
  padBoth(str) {
    this.#initialValue = str + this.#initialValue + str;
  }
}


const builder = new StringBuilder(".");
console.log(builder.getValue()); // "." 

builder.padStart("^");
console.log(builder.getValue()); // "^."

builder.padEnd("^");
console.log(builder.getValue()); // "^.^"

builder.padBoth("=");
console.log(builder.getValue()); // "=^.^="
