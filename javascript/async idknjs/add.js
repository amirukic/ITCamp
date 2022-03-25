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

// var p = Promise.all([1,2,3]);
// // this will be counted as if the iterable passed contains only the resolved promise with value "444", so it gets fulfilled
// var p2 = Promise.all([1,2,3, Promise.resolve(444)]);
// // this will be counted as if the iterable passed contains only the rejected promise with value "555", so it gets rejected
// var p3 = Promise.all([1,2,3, Promise.reject(555)]);

// // using setTimeout we can execute code after the stack is empty
// setTimeout(function() {
//     console.log(p);
//     console.log(p2);
//     console.log(p3);
// });

// const promise1 = Promise.resolve(3);
// const promise2 = new Promise((resolve, reject) => setTimeout(resolve, 100, 'foo'));
// const promises = [promise1, promise2];
// Promise.allSettled(promises).
//   then((results) => results.forEach((result) => console.log(result.status)));

// function job() {
//     return new Promise(function(resolve, reject) {
//         setTimeout(resolve, 2000, 'Hello world');
//     })
// }
// job().then((value) => {
//     console.log(value);
// })
// async function job() {
//     const p1 = await new Promise((resolve) => setTimeout(() => resolve('New world'), 1000))
// }
// job().then((p1) => {
//     console.log(p1);
// })

// const start = Date.now();
// function timeLog(text) {
//   console.log(`${Date.now() - start}ms - ${text}`);
// }

// function job() {
//   return new Promise(function (resolve, reject) {
//     timeLog("Job start");
//     setTimeout(function () {
//       timeLog("Job done");
//       resolve("Hello world");
//     }, 500);
//   });
// }

// async function main() {
//   let messages = await Promise.all([job(), job(), job()])

//   messages.forEach(function(message) {
//       console.log(message);
//   })
// }

// main();

// try {
//   try {
//     throw new Error("oops");
//   }
// //   catch (e){
// //     console.error(e.message);
// //   }
//     finally {
//     console.log("finally");
//   }
// } catch (ex) {
//   console.error("outer", ex.message);
// }

// try {
//   try {
//     // throw new Error("oops");
//     asasd
//   } catch (ex) {
//     console.error("inner", ex);
//   } finally {
//     console.log("finally");
//     throw new Error("nece")
//   }
// } catch (ex) {
//   console.error("outer", ex.message);
// }

// try {
//   try {
//     throw new Error("oops");
//   } catch (ex) {
//     console.error("inner", ex.message);
//     throw ex;
//   } finally {
//     console.log("finally");
//   }
// } finally {
// //   console.error("outer", ex.message);
// }
// console.log("jos nesto");

// (function () {
//   try {
//     try {
//         throw new Error("oops");
//     } catch (ex) {
//         return;
//         console.error("inner", ex.message);
//         throw ex;
//     } finally {
//         console.log("finally");
//     }
//   } catch (ex) {
//     console.error("outer", ex.message);
//   }
// })();

// console.log("jos nesto")
// console.log("jos nesto")
// try {
//   setTimeout(function () {
//     noSuchVariable; // script will die here
//   }, 1000);
// } catch (err) {
//   alert("won't work");
// }

// fetch("https://reqres.in/api/users/40", {
//   method: "POST",
//   headers: {
//     "Content-type": "aplication/json",
//   },
//   body: JSON.stringify({
//     name: "user 1",
//   }),
// })
//   .then((res) => {
//     return res.json();
//   })
//   .then((data) => console.log(data))
//   .catch((error) => console.log("ERROR"));

// fetch("https://catfact.ninja/facts")
//   .then((response) => {
//     return response.json();
//   })
//   .then((response) => {
//     console.log(response);
//   });

// const id = fetch("https://catfact.ninja/facts");
// async function mymove() {
//   try {
//     const response = await (await id).json();
//     console.log(response);
//   } catch {
//     console.log("error");
//   }
// }
// mymove();

// async function mymove () {
//     try{
//         const response = await fetch("https://jsonplaceholder.typicode.com/users")
//     const resJson = await response.json()
//     const name = resJson.map((el) => {
//         return {email: el.email}
//     })
//     console.log(name);
//     }catch{
//         console.log("Program nece da radi");
//     }
// }
// mymove()

// const BASE_URL = "https://catfact.ninja";
// let page = 0;
// document.querySelector("#page").addEventListener("click", function () {
//   if (page < 4) {
//     page += 1;
//     getFacts();
//   }
// });
// const getFacts = async () => {
//   try {
//     const response = await fetch(`${BASE_URL}/facts?page=${page}`);
//     const resJson = await response.json();
//     // console.log(resJson);

//     console.log(resJson.data);
//   } catch (e) {
//     console.log(e);
//   }
// };
// getFacts()

// Simple PUT request with a JSON body using fetch

(async () => {
    // PUT request using fetch with async/await
    const element = document.querySelector('#put-request-async-await .date-updated');
    const requestOptions = {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ title: 'Fetch PUT Request Example' })
    };
    const response = await fetch('https://reqres.in/api/articles/1', requestOptions);
    const data = await response.json();
    console.log(data);
})();

// PUT request using fetch with set headers
const element = document.querySelector('#put-request-set-headers .date-updated');
const requestOptions = {
    method: 'PUT',
    headers: { 
        'Content-Type': 'application/json',
        'Authorization': 'Bearer my-token',
        'My-Custom-Header': 'foobar'
    },
    body: JSON.stringify({ osobina: 'Jak' })
};
fetch('https://reqres.in/api/articles/1', requestOptions)
    .then(response => response.json())
    .then(data => console.log(data));