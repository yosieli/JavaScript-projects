var jhone= { fullname:'jhone smith',bills:[124,48,268,24],
    calTips:function(){
    this.tips=[];
    this.finalvalues=[];
    for( var i =0;i < this.bills.length;i++){
        var percentage;
            var bill = this.bills[i];
   
        if(bill <50)
           { 
        percentage=0.2;
               }
        else if( bill >=50 && bill < 200){
            percentage=0.15;}
            else{
                percentage=0.1;
            }
    this.tips[i] = bill * percentage;
    //this.finalValues[i] = bill + bill * percentage;
        }
        }
    }
function calcAverage(tips) {
    var sum = 0;
    for (var i = 0; i < tips.length; i++) {
        sum = sum + tips[i];
    }
    return sum / tips.length;
}

// Do the calculations
jhone.calTips();
jhone.average = calcAverage(jhone.tips);
console.log(jhone);



