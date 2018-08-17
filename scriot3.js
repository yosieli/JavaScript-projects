function tipcal(bill){
    var precentage;
    if(bill < 50 ){
        precentage=  0.2;
    }
    else if( bill >= 50 && bill < 200){
        precentage=0.15
    }
    else{
        precentage=0.1;
        
    }
    return precentage * bill;
}

var bills=[124,48,268];
var tips=[tipcal(bills[0]),tipcal(bills[1]),tipcal(bills[2])];
var finalvalue=[bills[0]+tips[0],
               bills[1]+tips[1],
               bills[1]+tips[1]];
console.log(tips,finalvalue);