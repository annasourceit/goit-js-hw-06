"use strict";

// Перед звільненням розробник зламав вихідний код управління
// акаунтами користувачів нашого сервісу доставки їжі.
// Виконай рефакторинг методів об'єкта customer, розставивши
// відсутні this під час звернення до властивостей об'єкта.

// Використай цей стартовий код і виконай рефакторинг.
// Після оголошення об'єкта ми додали виклики методів.
// У консоль будуть виведені результати їх роботи.Будь ласка,
//   нічого там не змінюй.

// Вимоги:

// Оголошено змінну customer.
// Значення змінної customer — об'єкт із властивостями та 
// методами.
// Виклик customer.getDiscount() повертає поточне значення 
// властивості discount.
// Виклик customer.setDiscount(0.15) оновлює значення 
// властивості discount.
// Виклик customer.getBalance() повертає поточне значення 
// властивості balance.
// Виклик customer.getOrders() повертає поточне значення 
// властивості orders.
// Виклик customer.addOrder(5000, "Steak") додає "Steak" у 
// масив значень властивості orders та оновлює баланс.
// Методи getBalance, getDiscount, setDiscount, getOrders і 
// addOrder об'єкта customer використовують this.
// Результати всіх викликів виведено в консоль.





const customer = {
  username: "Mango",
  balance: 24000,
  discount: 0.1,
  orders: ["Burger", "Pizza", "Salad"],
  // Change code below this line
  getBalance() {
    return this.balance;
  },
  getDiscount() {
    return this.discount;
  },
  setDiscount(value) {
    this.discount = value;
  },
  getOrders() {
    return this.orders;
  },
  addOrder(cost, order) {
    this.balance -= cost - cost * this.discount;
    this.orders.push(order);
  },
  // Change code above this line
};

customer.setDiscount(0.15);
console.log(customer.getDiscount()); // 0.15

customer.addOrder(5000, "Steak");
console.log(customer.getBalance()); // 19750

console.log(customer.getOrders()); // ["Burger", "Pizza", "Salad", "Steak"]
