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
/////////////////////////////////////////////////////////////////////////////////////////////////////////////VEZBA
class Person {
  constructor(firstName = "John", lastName = "Doe", age = 0, gender = "Male") {
    this.firstName = firstName;
    this.lastname = lastName;
    this.age = age;
    this.gender = gender;
  }
  sayFullName(firstName, lastname) {
    return `Puno ime je ${this.firstName} ${this.lastname}`;
  }
  static greetExtraTerrestrials(raceName) {
    return `Welcome to Planet Earth ${raceName}`;
  }
}

let covek = new Person("Amir", "Ukic", 20, "male");
console.log(covek.sayFullName());
