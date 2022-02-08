let Eren = {
  fullName: `Eren Jeager`,
  mass: 70,
  height: 1.82,
  calcBMI: function () {
    this.bmi = this.mass / (this.height * this.height);
    return this.bmi;
  },
};
let Zeke = {...Eren}
Zeke.fullName = `Zeke Jeager`
Zeke.mass = 78
Zeke.height = 1.78
Eren.calcBMI()
Zeke.calcBMI()
console.log(Eren, Zeke);
