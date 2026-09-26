"use strict";

// Створи клас Storage, який створюватиме об'єкти для управління
// складом товарів.Клас очікує лише один аргумент — початковий масив товарів, 
// який записується до створеного об'єкта в приватну властивість items.

// Оголоси такі методи класу:

// getItems() — повертає масив поточних товарів у приватній властивості items.
// addItem(newItem) — приймає новий товар newItem і додає його до масиву
// товарів у приватну властивість items об'єкта.
// removeItem(itemToRemove) — приймає рядок з назвою товару itemToRemove і
// видаляє його з масиву товарів у приватній властивості items об'єкта.



// Вимоги:

// Оголошено клас Storage.
// У класі Storage оголошено методи getItems, addItem і removeItem.
// Властивість items у класі Storage оголошена приватною.
// Метод getItems повертає значення приватної властивості items екземпляра
// класу, який його викликає.
// Метод addItem змінює значення приватної властивості items екземпляра класу,
//   який його викликає.
// Метод removeItem змінює значення приватної властивості items екземпляра
// класу, який його викликає.
// У результаті виклику new Storage(["Nanitoids", "Prolonger", "Antigravitator"])
// значення змінної storage — об'єкт.
// В об'єкта storage немає публічної властивості items.
// Перший виклик storage.getItems() одразу після ініціалізації
// екземпляра повертає масив["Nanitoids", "Prolonger", "Antigravitator"].
// Другий виклик storage.getItems() після виклику storage.addItem("Droid")
// повертає масив["Nanitoids", "Prolonger", "Antigravitator", "Droid"].
// Третій виклик storage.getItems() після виклику storage.removeItem("Prolonger")
// повертає масив["Nanitoids", "Antigravitator", "Droid"].
// Результати всіх викликів виведено в консоль.


class Storage {
  #items;

  constructor(items) {
    this.#items = items;
  }

  getItems() {
    return this.#items;
  }

  addItem(newItem) {
    this.#items.push(newItem);
  }

  removeItem(itemToRemove) {
    let result = [];
    for (const item of this.#items) {
      if (item !== itemToRemove) {
        result.push(item);
      }
    }
    this.#items = result;
  }
}


const storage = new Storage(["Nanitoids", "Prolonger", "Antigravitator"]);
console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator"]

storage.addItem("Droid");
console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator", "Droid"]

storage.removeItem("Prolonger");
console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]

