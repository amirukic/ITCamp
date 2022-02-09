let Eren = {
  fullName: `Eren Jeager`,
  mass: 70,
  height: 1.82,
  calcBMI: function () {
    this.bmi = this.mass / (this.height * this.height);
    return this.bmi;
  }
}

let Zeke = {...Eren}
Zeke.fullName = `Zeke Jeager`
Zeke.mass = 78
Zeke.height = 1.78
Eren.calcBMI()
Zeke.calcBMI()
console.log(Eren, Zeke);
console.log(" ");
if(Eren.bmi > Zeke.bmi){
  console.log(`Veci BMI ima ${Eren.fullName} sa ${Eren.bmi}`);
}
else if(Zeke.bmi > Eren.bmi){
  console.log(`Veci BMI ima ${Zeke.fullName} sa ${Zeke.bmi}`);
}
else{
  console.log(`Oboje imaju isti BMI`);
}


///////////////////////////////////////////////////////////////////////////// DOMACI 1

let student = {
  name: "David Rayy",
  sclass: "VI",
  rollno: 12,
};
let niz = [];
for (let el in student) {
  niz.push(el);
}
console.log(niz);
