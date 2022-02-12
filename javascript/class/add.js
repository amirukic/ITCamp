// class covek {
//     constructor(name,year,JMBG,work){
//         this.name = name;
//         this.year = year;
//         this.JMBG = JMBG;
//         this.work = work
//     }
//     radi(){
//         return console.log(`Radi u ${this.work}`);
//     }

// }

// covek1 = new covek("Amir", "20", "889718412","nigde")

// console.log(covek1);

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

class Book {
    constructor(title, genre, author) {
      this.title = title;
      this.genre = genre;
      this.author = author;
      this.genre = false;
      this.read_date = null;
    }
  }
  
  class Booklist {
    constructor() {
      this.book_read = 0;
      this.book_not_read = 0;
      this.nextBook = null;
      this.currBook = null;
      this.lastBook = null;
      this.bookShefl = [];
    }
  
    add(book) {
      if (book instanceof Book) {
        this.bookShefl.push(book);
      } else {
        console.log("invalid");
      }
    }
    finishCurrentBook() {
      for (let i = 0; i < this.bookShelf.length; i++) {
        const book = this.bookShefl[i];
        if (book.title === this.currBook.title) {
          this.bookShefl[i].read = true;
          this.bookShefl[i].read_date = new Date().now();
          this.lastBook = this.currBook;
          this.currBook = this.nextBook;
          if (this.bookShefl[i + 1]) {
            this.nextBook = this.bookShefl[i + 1];
          }
          break;
        }
      }
    }
  }
  
  b1 = new Book("hp1", "magic", "jkr");
  b2 = new Book("hp1", "magic", "jkr");
  b3 = new Book("hp1", "magic", "jkr");
  b4 = new Book("hp1", "magic", "jkr");
  b5 = new Book("hp1", "magic", "jkr");
  
  booklist = new Booklist();
  
  booklist.add(b1);
  booklist.add(b2);
  booklist.add(b3);
  booklist.add(b4);
  booklist.add(b5);