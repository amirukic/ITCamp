// a = window.prompt("Unesite broj: ")
// if (a % 2 == 0)
// {
//     console.log("Broj je paran")
// }
// else {
//     console.log("broj je neparan")
// }

// GODINE
// let a = window.prompt("Unesite godinu rodjenja: ")

//     console.log("Godina:", 2021 - a)

// let b = window.prompt("Unesite mesec rodjenja: ")

//     console.log("Meseci", 12 - b)

// let c = window.prompt("Unesite dan rodjenja: ")
//     console.log("Dana", 31 - c)

// DOMACI 1 

// var a = window.prompt("Unesite broj ")

//     if (a > 0){
//         console.log("Broj je pozitivan")
//     }
//     if (a < 0){
//         console.log("Broj je negativan")
//     }
//     if (a == 0){
//         console.log("Broj je jednak nuli")
//     }

// DOMACI 2

// let a = window.prompt("Unesite prvi broj ")

// let b = window.prompt("Unesite drugi broj ")

// let c = window.prompt("Unesite treci broj ")

//     if (b > c){
//         console.log("Drugi broj je najveci")
//     }
//     if (c > b) {
//         console.log("Treci broj je najveci")
//     }
//     if (a > c) {
//         console.log("Prvi broj je najveci")
//     }
    
// let a = prompt("Unesite broj 1 od 12")

// switch(a){
//     case "1":
//     console.log("Januar")
//     break;
//     case "2":
//     console.log("Febuar")
//     break;
//     case "3":
//     console.log("Mart")
//     break;
//     case "4":
//     console.log("April")
//     break;
//     case "5":
//     console.log("Maj")
//     break;
//     case "6":
//     console.log("Jun")
//     break;
//     case "7":
//     console.log("Jul")
//     break;
//     case "8":
//     console.log("Avgust")
//     break;
//     case "9":
//     console.log("Septembar")
//     break;
//     case "10":
//     console.log("Oktobar")
//     break;
//     case "11":
//     console.log("Novembar")
//     break;
//     case "12":
//     console.log("Decembar")
//     break;
//     default:
//         console.log("Uneli ste pogresan broj")       
//     break;
// }

// let a = prompt("Unesite broj od 0 do 100")

// switch (true){
//     case a >= 0 && a <= 30:
//         console.log("broj je low")
//     break;
//     case a > 30 && a <= 60:
//         console.log("broj je medium")
//     break;
//     case a > 60 && a <= 100:
//         console.log("broj je high")
//     break;
//     default:
//         console.log("Uneli ste pogresan broj")
// }
// let niz = [-5, -2, -6, 0, -1, 4]
// // let max = niz[0]
// // for (let i = 0; i < niz.length; i++) {
// //     if (max < niz[i]){
        
// //     }
    
// // }

// console.log(Math.max(...niz));

// niz = [1, 9, 7, -3, 5, -7, 8, 12, 10, 2]

// let zbir = 0
// for (let i = 0; i < niz.length; i++){
//     zbir += niz[i]
// }
// DOMACI 
// console.log(`Srednja vrednost je ${zbir / niz.length}`);

// for (let i = 0; i <= 10; i++) {
//     if (i === 7){
//         continue
//     }
//     else{
//         console.log(i);
//     }
    
// }

// for (let i = 0; i < 3; i++) {
//   console.log("python");
// }
// for (let i = 0; i < 3; i++) {
//     console.log("je super");
    
// }

// broj = prompt("Unesite dan u godini")
// mesec = Math.ceil(broj / 30)
// switch(mesec){
//     case 1:
//         console.log("januar");
//     break;
//     case 2:
//         console.log("februar");
//     break;
//     case 3:
//         console.log("mart");
//     break;
//     case 4:
//         console.log("april");
//     break;
//     case 5:
//         console.log("maj");
//     break;
//     case 6:
//         console.log("jun");
//     break;
//     case 7:
//         console.log("jul");
//     break;
//     case 8:
//         console.log("avgust");
//     break;
//     case 9:
//         console.log("septembar");
//     break;
//     case 10:
//         console.log("okt");
//     break;
//     case 11:
//         console.log("novembar");
//     break;
//     case 12:
//         console.log("decembar");
//     break;
//     default:
//         console.log("uneli ste pogresan broj");
// }
// dan = broj - (mesec - 1) * 30;
// console.log(dan);
// switch(broj % 7){
//     case 0:
//         day = "Nedelja";
//     break;
//     case 1:
//         day = "Ponedeljak";
//     break;
//     case 2:
//         day = "Utorak";
//     break;
//     case 3:
//         day = "Sreda";
//     break;
//     case 4:
//         day = "Cetvrtak";
//     break;
//     case 5:
//         day = "Petak";
//     break;
//     case 6:
//         day = "Subota";
//     break;
//     default:
//         console.log("Uneli ste pogresan broj");
// }
// console.log(day);

// broj = Number(prompt("Unesite broj brojeva"))
// parni = 0
// neparni = 0
// for (let i = 0; i < broj; i++) {
    
//     b = Number(prompt("Unesite broj"))
//     if(b % 2 === 0){
//         parni += 1
//     }
//     else {
//         neparni += 1
//     }
    
// }
// console.log(`Parnih ima ${parni}, Neparnih ima ${neparni}`);

// let sum = 0
// for (let i = 0; i < 1000; i++) {
//     if(i % 3 === 0 || i % 5 === 0){
//         sum += i
//     }
// }
// console.log(sum);

// for (let i = 0; i < 50; i++) {
//     if(i % 3 === 0 && i % 5 === 0){
//         console.log("fizzbuzz");
//     }
//     else if(i % 3 === 0){
//         console.log("fizz");
//     }   
//     else if(i % 5 === 0){
//         console.log("buzz");
//     }
//     else{
//         console.log(i);
//     }
// }
// let star
// for (let i = 1; i <= 5; i++) {
//     star = ''
//     for (let j = 1; j <= i; j++) {
//         star += '*'
//     }
//     console.log(star)
// }
// let red = prompt(`Unesite broj redova`)
// let zvezdice = ``
// for (let i = 1; i <= red; i++) {
//     console.log(zvezdice += `*`)
// }

// for (let i = 1; i <= 10; i++) {
//     red = `` 
//     for (let j = 1; j <= 10; j++) {
//         red += `${i * j}\t`
//     }
//     console.log(red, "\n");
// }
// var iznad = 0
// var ispod = 0

// var pozbr = 0
// var negbr = 0
// for (let i = 0; i < 10; i++) {
//     t = prompt(`Unesite brojeve`)
//     if(i > 0){
//         pozbr ++
//         iznad += t
//     }
//     else{
//         negbr ++
//         ispod += t
//     }
    
// }
// console.log(`Srednja vrednost pozitivnog je ${iznad / pozbr}`);
// console.log(`Srednja vrednost negativnog je ${ispod / negbr}`);

// let rec = "ratar"

// for (let i = 0; i < rec.length; i++) {
//     if(rec[i] !== rec[rec.length - 1 - i]){
//         console.log("Rec nije palindrom");
//         break;
//     }
//     if( i === rec.length - 1){
//         console.log("rec je palindrom");
//     } 
    
// var loz = prompt("Unesite lozinku: ")
// var tacna = 'tajno'

// while (loz !== tacna) {
//     loz = prompt("Niste Uneli tacnu lozinku unesite opet");  
// }

//     console.log("Uneli ste tacnu lozinku");

// let broj = 0
// while (1) {
//     broj = Number(prompt("Unesite broj: "))
//     if(broj === 0){
//         break
//     }
//     if(broj <= 20 && broj >= 10){
//         alert("Bravo")
//     }
//     else{
//         alert("Proamsio si")
//     }
// }

let rez = 0

while (1) {
    operacija = Number(prompt("Unesite broj operacije (1.sabiranje, 2.oduzimanje, 3.mnozenje, 4.deljenje): "))
    if(operacija === 1){
        let prvi = Number(prompt("Unesite prvi broj"))
        let drugi = Number(prompt("Unesite drugi broj"))
        rez = prvi + drugi
        console.log(rez);
    }
    if(operacija === 2){
        let prvi = Number(prompt("Unesite prvi broj"))
        let drugi = Number(prompt("Unesite drugi broj"))
        rez = prvi - drugi
        console.log(rez);
    }
    if(operacija === 3){
        let prvi = Number(prompt("Unesite prvi broj"))
        let drugi = Number(prompt("Unesite drugi broj"))
        rez = prvi * drugi
        console.log(rez);
    }
    if(operacija === 4){
        let prvi = Number(prompt("Unesite prvi broj"))
        let drugi = Number(prompt("Unesite drugi broj"))
        rez = prvi / drugi
        console.log(rez);
    }
    if(operacija >= 5 || operacija <= 0){
        alert("Izlaz iz programa");
    }
    break
}