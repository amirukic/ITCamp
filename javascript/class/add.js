// class covek {
//   constructor(name, year, JMBG, work) {
//     this.name = name;
//     this.year = year;
//     this.JMBG = JMBG;
//     this.work = work;
//   }
//   get radi() {
//     return `Korisnik ${this.name} ima ${this.year}, njegov JMBG je ${this.JMBG} i radi u ${this.work}`
//   }
// }
// covek1 = new covek("Amir", "20", "889718412", "rekic ");

// console.log(covek1.radi);
//////////////////////////////////////////////////////////////////////////////////  VEZBA 1
// o1 = {
//     name: "Dzemil",
//     surname: "Dupljak",
// }
// o2 = {}

// let flatObj = Object.entries(o1)

// for (let i = 0; i < flatObj.length; i++) {
//     o2[flatObj[i][1]] = flatObj[i][0]
// }
// console.log(o1);
// console.log("       ");

// console.log(o2);

/////////////////////////////////////////////////////////////////////////////////// VEZBA 2

// class Book {
//     constructor(title, genre, author) {
//       this.title = title;
//       this.genre = genre;
//       this.author = author;
//       this.genre = false;
//       this.read_date = null;
//     }
//   }

//   class Booklist {
//     constructor() {
//       this.book_read = 0;
//       this.book_not_read = 0;
//       this.nextBook = null;
//       this.currBook = null;
//       this.lastBook = null;
//       this.bookShefl = [];
//     }

//     add(book) {
//       if (book instanceof Book) {
//         this.bookShefl.push(book);
//       } else {
//         console.log("invalid");
//       }
//     }
//     finishCurrentBook() {
//       for (let i = 0; i < this.bookShelf.length; i++) {
//         const book = this.bookShefl[i];
//         if (book.title === this.currBook.title) {
//           this.bookShefl[i].read = true;
//           this.bookShefl[i].read_date = new Date().now();
//           this.lastBook = this.currBook;
//           this.currBook = this.nextBook;
//           if (this.bookShefl[i + 1]) {
//             this.nextBook = this.bookShefl[i + 1];
//           }
//           break;
//         }
//       }
//     }
//   }

//   b1 = new Book("hp1", "magic", "jkr");
//   b2 = new Book("hp1", "magic", "jkr");
//   b3 = new Book("hp1", "magic", "jkr");
//   b4 = new Book("hp1", "magic", "jkr");
//   b5 = new Book("hp1", "magic", "jkr");

//   booklist = new Booklist();

//   booklist.add(b1);
//   booklist.add(b2);
//   booklist.add(b3);
//   booklist.add(b4);
//   booklist.add(b5);

// class Heroj {
//   constructor() {
//       this.health = 100;
//   }
//   get objaviStanje() {
//       console.log("Health je " + this.health);
//   }
//   set primljenUdarac (udarac){
//      if (this.health - udarac > 0){
//        this.health -= udarac;
//        this.objaviStanje;
//     } else {
//       console.log("Heroj je mrtav!");
//     }
//   }
//   set ozdravljenje (pomoc){
//     if (this.health + pomoc >100){
//       this.health = 100;
//       this.objaviStanje;
//     } else {
//       this.health += pomoc;
//       this.objaviStanje;
//     }
//   }
// }
// var batman = new Heroj();
// batman.objaviStanje
// batman.primljenUdarac=50;
// batman.ozdravljenje=20;
// batman.primljenUdarac=80;
///////////////////////////////////////////////////////////////////////////////////////////////////////ZAPREMINA CILINDRA

// class cilindar {
//   constructor(r, h) {
//     this.r = r;
//     this.h = h;
//   }

//   greska (){
//     console.log(this.r === this.h);
//   }
//   get V() {
//     return Math.PI * this.r * this.h;
//   }
// }
// let cilindar1 = new cilindar(7, 4)
// console.log(cilindar1.V);
// cilindar1.greska()
// /////////////////////////////////////////////////////////////////////////////////////////////////////////////VEZBA
// class Person {
//   constructor(firstName = "John",lastName = "Doe", age = 0, gender = "Male") {
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.age = age;
//     this.gender = gender;
//   }
//   sayFullName(firstName, lastName) {
//     return `Puno ime je ${this.firstName} ${this.lastName}`;
//   }
//   static greetExtraTerrestrials(raceName) {
//     return `Welcome to Planet Earth ${raceName}`;
//   }
// }

// let covek = new Person("Amir", "Ukic", 20, "male");
// console.log(covek.lastName);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// PROMISE
// Resolve scenario
// const promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     // Fuod truck found
//     // Change status from 'pending to fulfilled'
//     resolve('Bringing tacos');
//   }, 5000);
// });
// // Reject scenario
// const promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     // Food truck not found
//     // Change status from 'pending to 'rejected'
//     reject('Not bringing tacos. Food truck not there');
//   }, 5000);
// });
// const onFulfillment = (result) => {
//   // resolve was called
//   console.log(result);
//   console.log("Set up the table to eat tacos");
// };
// const onRejection = (error) => {
//   // reject was called
//   console.log(error);
//   console.log("start cooking pasta");
// };
// promise.then();
// promise.catch();
// promise.then(onFulfillment);
// promise.catch(onRejection);

// let fifteen = Promise.resolve(15);
// fifteen.then(value => console.log(`Got ${value}`));
// // → Got 15

// function a (arg) {
//   console.log("neki kod");
//   console.log("NESTOOO");
//   arg()
// }
// function hello() {
//   console.log("Hello world");
// }
// // a(hello)

// a = hello
// b = a
// c = b
// c()
///////////////////////////////////////////////////////////////////////////////////////////
// const numbers = [1, 2, 3, 4, 5];
// const mojaF = (a, b, c) => {
//   console.log("Hello World");
//   console.log(b);
// };
// // for (let i = 0; i < numbers.length; i++) {
// //   mojaF();
// // }
// numbers.forEach(mojaF);

// const numbers = [37, 28, 14, 6, 19, 55, 11]

// const mojaF = (a,b) => {
//   console.log(`broj ${a**2} je na poziciji ${b}`);
// }
// numbers.forEach(mojaF)

// var library = [
//       {
//       title: "Bill Gates",
//       author: "The Road Ahead",
//       readingStatus: true,
//       age: 29,
//     },
//     {
//       title: "Steve Jobs",
//       author: "Walter Isaacson",
//       readingStatus: true,
//       age: 14,
//     },
//     {
//       author: "Suzanne Collins",
//       title: "Mockingjay: The Final Book of The Hunger Games",
//       readingStatus: false,
//       age: 25,
//     },
//     {
//       title: "Bill Gates",
//       author: "The Road Ahead",
//       readingStatus: true,
//       age: 19,
//     },
//     {
//       title: "Steve Jobs",
//       author: "Walter Isaacson",
//       readingStatus: true,
//       age: 12,
//     },
//   ];

// const mojaF = (a) => {
//   console.log(a.author);
// }
// library.forEach(mojaF)

// const numbers = [45, 4, 9, 16, 25, 13, 38, 68, 61, 52, 29];
// const evenNumbers = [];
// numbers.forEach((el) => {
//   if(el % 2 === 0){
//     evenNumbers.push(el)
//   }
// })
// console.log(evenNumbers);

// const data = [NaN, 0,15,false,-22,"", undefined,47,null]
// let a = 0
// data.forEach((el) => {
//   if(!el){
//     a++
//   }

// })
// console.log(a);

// function findMissing(arr1, arr2) {
//   arr2.forEach((el) => {
//     if (arr1.includes(el)) {
//       arr1.splice(arr1.indexOf(el), 1);
//     }
//   });
//   return arr1[0];
// }

// function findMissing(arr1, arr2) {
// 	let str = arr1.filter(i => !arr2.includes(i)).join('');
// 	return Number(str);
// }

// console.log(findMissing([6, 1, 3, 6, 8, 2], [3, 6, 6, 1, 2]));

const heros = [
  { name: "Spider-man" },
  { name: "Thor" },
  { name: "Black Panther" },
  { name: "Captain Marvel" },
  { name: "Silver Surfer" },
];

const heros2 = heros.map((el, index) => {
  return {
    id: index,
    hero: el.name,
  };
});
console.log(heros2);
