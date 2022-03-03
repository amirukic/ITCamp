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

const userLeft = false;
const userWatchingCatMeme = false;
function prviPromis() {
  return new Promise((resolve, reject) => {
    if (userLeft) {
      reject({
        name: "User Left",
        message: ":(",
      });
    } else if (userWatchingCatMeme) {
      reject({
        name: "User Watching Cat Meme",
        message: "WebDevSimplified < Cat",
      });
    } else {
      resolve("Thumbs up and Subscribe");
    }
  });
}
prviPromis().then((message) => {
  console.log('Succes:' + message);
}).catch((error) => {
  console.log(error.name + ' ' + error.message);
})
