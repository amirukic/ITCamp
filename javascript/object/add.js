// let Eren = {
//   fullName: `Eren Jeager`,
//   mass: 70,
//   height: 1.82,
//   calcBMI: function () {
//     this.bmi = this.mass / (this.height * this.height);
//     return this.bmi;
//   }
// }

// let Zeke = {...Eren}
// Zeke.fullName = `Zeke Jeager`
// Zeke.mass = 78
// Zeke.height = 1.78
// Eren.calcBMI()
// Zeke.calcBMI()
// console.log(Eren, Zeke);
// console.log(" ");
// if(Eren.bmi > Zeke.bmi){
//   console.log(`Veci BMI ima ${Eren.fullName} sa ${Eren.bmi}`);
// }
// else if(Zeke.bmi > Eren.bmi){
//   console.log(`Veci BMI ima ${Zeke.fullName} sa ${Zeke.bmi}`);
// }
// else{
//   console.log(`Oboje imaju isti BMI`);
// }

/////////////////////////////////////////////////////////////////////////////// DOMACI 1

// let student = {
//   name: "David Rayy",
//   sclass: "VI",
//   rollno: 12,
// };
// let niz = [];
// for (let el in student) {
//   niz.push(el);
// }
// console.log(niz);
// //////////////////////////////////////////////////////////////////////////////DOMACI 2
// var library = [
//   {
//     title: "Bill Gates",
//     author: "The Road Ahead",
//     readingStatus: true,
//   },
//   {
//     title: "Steve Jobs",
//     author: "Walter Isaacson",
//     readingStatus: true,
//   },
//   {
//     author: "Suzanne Collins",
//     title: "Mockingjay: The Final Book of The Hunger Games",
//     readingStatus: false,
//   },
// ];

// for (let i = 0; i < library.length; i++) {
//   if (library[i].readingStatus) {
//     console.log("Procitao " + library[i].title + " od " + library[i].author);
//   } else {
//     console.log(
//       "Nisam procitao " + library[i].title + " od " + library[i].author
//     );
//   }
// }

// var student = {
//   name : "David Rayy ",
//   sclass : "VI",
//   rollno : 12
// }
// delete student.rollno
// console.log(student);
//////////////////////////////////////////////////////////////////////////DOMACI 3
// var cat = {
//   umor: 0,
//   glad: 0,
//   usamljenost: 0,
//   sreca: 0,
//   sleep: function (n) {
//     this.glad += 5 * n;
//     this.umor -= 10 * n;
//   },
//   eat: function (a) {
//     this.glad -= 15 * a;
//     this.sreca += 5 * a;
//   },
//   play: function (b) {
//     this.umor += 10 *b;
//     this.sreca += 5*b;
//     this.usamljenost -= 5*b;
//   },
//   pat: function () {
//     if (this.glad > 40 || this.umor > 60) {
//       console.log("The cat doesn't want to be petted!");
//     }
//   },
// };
// cat.umor = 40;
// cat.glad = 40;
// cat.usamljenost = 20;
// cat.sreca = 60;
// cat.sleep(3);
// cat.eat(3);
// cat.play(2);
// cat.pat();
// const {umor, glad, usamljenost, sreca} = cat; // Ovo se zove destructoring(razlaganje)
// console.log("umor =",umor,"\nglad =", glad,"\nusamljenost =", usamljenost,"\nsreca =", sreca);

/////////////////////////////////////////////////////////////////////////////////////////////
// const data = { a: 1, b: 2 };
// console.log(Object.entries(data));

// function mymove(data, prop) {
//   delete data[prop]
//   return data  
// }
// console.log(mymove({ a: 1, b: 2 }, "b"));


// var library = [
//     {
//     title: "Bill Gates",
//     author: "The Road Ahead",
//     readingStatus: true,
//     age: 29,
//   },
//   {
//     title: "Steve Jobs",
//     author: "Walter Isaacson",
//     readingStatus: true,
//     age: 14,
//   },
//   {
//     author: "Suzanne Collins",
//     title: "Mockingjay: The Final Book of The Hunger Games",
//     readingStatus: false,
//     age: 25,
//   },
//   {
//     title: "Bill Gates",
//     author: "The Road Ahead",
//     readingStatus: true,
//     age: 19,
//   },
//   {
//     title: "Steve Jobs",
//     author: "Walter Isaacson",
//     readingStatus: true,
//     age: 12,
//   },
// ];
// function mymove(library) {
//   let niz = []
//   for (let i = 0; i < library.length; i++) {
//     if (library[i].age >= 18) {
//       niz.push(library[i])
//     }
//   }
//   return niz
// }
// console.log(mymove());

var pocetniPromise = Promise.resolve(33);
var drugiPromise = Promise.resolve(pocetniPromise);
drugiPromise.then(function(value) {
  console.log('value: ' + value);
});
console.log('pocetniPromise === drugiPromise je ' + (pocetniPromise === drugiPromise));