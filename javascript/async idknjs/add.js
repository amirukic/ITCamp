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

function makeRequest(location) {
  return new Promise((resolve, reject) => {
    console.log(`Making Request to ${location}`);
    if (location === "Google") {
      resolve(`${location} says hi`);
    } else {
      reject("We can only talk to Google");
    }
  });
}
function processRequest(response) {
  return new Promise((resolve, reject) => {
    console.log("Processing response");
    resolve(`Extra Information + ${response}`);
  });
}

// makeRequest("YouTube")                       |
//   .then((response) => {                      |
//     console.log("Response received");        |
//     return processRequest(response);         |
//   })                                         |
//   .then((processedResponse) => {             |         WITH PROMISE
//     console.log(processedResponse);          |
//   })                                         |
//   .catch((err) => {                          |
//     console.log(err);                        |
//   });                                        |

  async function doWork () {
    try {
      const response = await makeRequest('Google')
      console.log("Response Received");
      const processedResponse = await processRequest(response)
      console.log(processedResponse);
    } catch (err) {
      console.log(err);
    }

  }
  doWork()
