// function now() {
//   return 21;
// }
// function later() {
//   answer = answer * 2;
//   console.log("Meaning of life:", answer);
// }
// var answer = now();
// setTimeout(later, 1000);

// const userLeft = false;
// const userWatchingCatMeme = true;
// function watchTutorialCallback(callback, errorCallback) {
//   if (userLeft) {
//     errorCallback({
//       name: "User Left",
//       message: ":(",
//     });
//   } else if (userWatchingCatMeme) {
//     errorCallback({
//       name: "User Watching Cat Meme",
//       message: "WebDevSimplified < Cat",
//     });
//   } else {
//     callback("Thumbs up and Subscribe");
//   }
// }
// watchTutorialCallback(
//   (message) => {
//     console.log("Success:" + message);
//   },
//   (error) => {
//     console.log(error.name + " " + error.message);
//   }
// );

// const userLeft = false;
// const userWatchingCatMeme = false;
// function prviPromis() {
//   return new Promise((resolve, reject) => {
//     if (userLeft) {
//       reject({
//         name: "User Left",
//         message: ":(",
//       });
//     } else if (userWatchingCatMeme) {
//       reject({
//         name: "User Watching Cat Meme",
//         message: "WebDevSimplified < Cat",
//       });
//     } else {
//       resolve("Thumbs up and Subscribe");
//     }
//   });
// }
// prviPromis().then((message) => {
//   console.log('Succes:' + message);
// }).catch((error) => {
//   console.log(error.name + ' ' + error.message);
// })

// var onFulfillment = false;

// function myPromise() {
//   return new Promise((resolve, reject) => {
//     if (onFulfillment) {
//       resolve({
//         name: "tacos",
//         message: "stigli su tacosi",
//       });
//     } else {
//       reject({
//         name: "pasta",
//         message: "nema tacosa",
//       });
//     }
//   });
// }
// myPromise().then((message) => {
//   console.log(message.message);
// }).catch((error) => {
//   console.log(error.message);
// })

// const promise = new Promise((resolve, reject) => {
//   const res = true;
//   // An asynchronous operation.
//   if (res) {
//     resolve('Resolved!');
//   }
//   else {
//     reject(Error('Error'));
//   }
// });

// promise.then((res) => console.log(res), (err) => alert(err));

// const inventory = {
//   sunglasses: prompt("Koliko zelite da uzmete"),
//   pants: 1088,
//   bags: 1344,
// };

// const myExecutor = (resolve,reject) => {
//   if(inventory.sunglasses > 0){
//     resolve('Sunglasses order processed.')
//   } else{
//     reject('That item is sold out.')
//   }
// }
// function myExecutor () {
//   return new Promise ((resolve,reject) => {
//     if(inventory.sunglasses > 0) {
//       resolve('Sunglasses order processed.')
//     }
//     else{
//       reject('That item is sold out.')
//     }
//   })
// }
// myExecutor(inventory)

// function makeRequest(location) {
//   return new Promise((resolve, reject) => {
//     console.log(`Making Request to ${location}`);
//     if (location === "Google") {
//       resolve(`${location} says hi`);
//     } else {
//       reject("We can only talk to Google");
//     }
//   });
// }
// function processRequest(response) {
//   return new Promise((resolve, reject) => {
//     console.log("Processing response");
//     resolve(`Extra Information + ${response}`);
//   });
// }

// // makeRequest("YouTube")                       |
// //   .then((response) => {                      |
// //     console.log("Response received");        |
// //     return processRequest(response);         |
// //   })                                         |
// //   .then((processedResponse) => {             |         WITH PROMISE
// //     console.log(processedResponse);          |
// //   })                                         |
// //   .catch((err) => {                          |
// //     console.log(err);                        |
// //   });                                        |

//   async function doWork () {
//     try {
//       const response = await makeRequest('Google')
//       console.log("Response Received");
//       const processedResponse = await processRequest(response)
//       console.log(processedResponse);
//     } catch (err) {
//       console.log(err);
//     }

//   }
//   doWork()

// function job(state) {
//   return new Promise(function(resolve, reject) {
//       if (state) {
//           resolve('success');
//       } else {
//           reject('error');
//       }
//   });
// }

// let promise = job(true);

// promise

// .then(function(data) {
//   console.log(data);

//   return job(false);
// })

// .catch(function(error) {
//   console.log(error);

//   return 'Error caught';
// })

// .then(function(data) {
//   console.log(data);

//   return job(true);
// })

// .catch(function(error) {
//   console.log(error);
// });

// function job(state) {
//   return new Promise(function (resolve, reject) {
//     if (state) {
//       resolve("success");
//     } else {
//       reject("error");
//     }
//   });
// }

// let promise = job(true);

// promise

//   .then(function (data) {
//     console.log(data);                   //succes

//     return job(true);
//   })

//   .then(function (data) {
//     if (data !== "victory") {
//       throw "Defeat";                    //defeat
//     }

//     return job(true);
//   })

//   .then(function (data) {
//     console.log(data);
//   })

//   .catch(function (error) {
//     console.log(error);

//     return job(false);
//   })

//   .then(function (data) {
//     console.log(data);

//     return job(true);
//   })

//   .catch(function (error) {
//     console.log(error);
//                                   //error caugth
//     return "Error caught";
//   })

//   .then(function (data) {
//     console.log(data);

//     return new Error("test");
//   })

//   .then(function (data) {
//     console.log("Success:", data.message);   // succes test
//   })

//   .catch(function (data) {
//     console.log("Error:", data.message);
//   });

// async function f2() {
//   const thenable = {
//     then: function(resolve, _reject) {
//       resolve('resolved!')
//     }
//   };
//   console.log(await thenable); // resolved!
// }

// f2();

// const promise1 = Promise.resolve(3);
// const promise2 = 42;
// const promise3 = new Promise((resolve, reject) => {
//   setTimeout(resolve, 100, 'string');
// });

// Promise.all([promise1, promise2, promise3]).then((values) => {
//   console.log(values);
// });

var p = Promise.all([1,2,3]);
// this will be counted as if the iterable passed contains only the resolved promise with value "444", so it gets fulfilled
var p2 = Promise.all([1,2,3, Promise.resolve(444)]);
// this will be counted as if the iterable passed contains only the rejected promise with value "555", so it gets rejected
var p3 = Promise.all([1,2,3, Promise.reject(555)]);
