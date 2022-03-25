// const myPromise = () =>
//   new Promise((resolve, reject) => {
//     reject("promise rejected!");
//     resolve("RESOLVED!");
//   });

// myPromise()
//   .then((data) => console.log("CONSOLE.LOG: ", data))
//   .catch((err) => console.log("THE ERROR IS: ", err));

// console.log("LAST LOG");

const rollTheDice = () =>
  new Promise((resolve, reject) => {
    const randomNumber = Math.ceil(Math.random() * 10);

    //OUTCOME in 2 seconds
    if (randomNumber < 7) {
      resolve("We've got a winner! And the number is: " + randomNumber);
    } else {
      reject(
        "You lose. The number is too high! and the number was: " + randomNumber
      );
    }
  });

rollTheDice()
  .then((successMessage) => console.log("SUCCESS!", successMessage))
  .catch((errorMessage) => console.error("ERROR MESSAGE: ", errorMessage));
