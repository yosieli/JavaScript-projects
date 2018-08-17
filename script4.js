 var jhone={ fullName: 'John Smith',
    mass: 110,
    height: 1.95,
    calcBMI: function() {
        this.bmi = this.mass / (this.height * this.height);
        return this.bmi;
          }}
var Mark={ fullName: 'Mark lucas',
    mass: 90,
    height: 1.65,
    calcBMI: function() {
        this.bmi = this.mass / (this.height * this.height);
        return this.bmi;
          }}
jhone.calcBMI();
Mark.calcBMI();
console.log(jhone,Mark);
if(jhone.bmi > Mark.bmi){
    console.log(jhone.fullName+"has the higest BMIS"+"with vallue of"+ '' + jhone.bmi);
}
else if(Mark.bmi > jhone.bmi){
    console.log(Mark.fullName+"has the higest BMIS"+"with vallue of"+ '' + Mark.bmi);}
else{
    console.log("they have the same BMIS");
}