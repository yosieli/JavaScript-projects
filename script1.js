/*var FistName='feven';
console.log(FistName);*/
var markWeight=70;
var markHeight=1.70;
var jhonWeight=65;
var jhoneHeight=1.65;
var mark_bmi=markWeight/(markHeight * markHeight);
 var jhone_bmi=jhonWeight/(jhoneHeight * jhoneHeight);
var higher_bmi=mark_bmi < jhone_bmi;
console.log("Is Mark's BMI higher than Jhon's? " +  higher_bmi );