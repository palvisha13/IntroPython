/* Task4.js - Add your Java Script Code Here */

// function to roll the dice

function roll_dice(){
   return (Math.random()*5)+1;
}
var number_pair = [];
function roll_twice(){
    for (i=1;i<=2;i++){
        number_pair.push(roll_dice());
    }

    document.getElementById("mydata").innerHTML=number_pair.values();
}
    

