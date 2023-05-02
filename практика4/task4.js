let number = Math.ceil(Math.random() * 100);

// Создаем promise
const myPromise = new Promise((resolve, reject) => {

  if (number % 2 === 0) {
    resolve("Успешное выполнение promise");
  } else {
    reject("Неуспешное выполнение promise");
  }
});

// Выполняем promise
myPromise
  .then((result) => {
    console.log('Завершено успешно. Сгенерированное число — ', number);
  })
  .catch((error) => {
    console.log('Завершено с ошибкой. Сгенерированное число — ', number);
  });
