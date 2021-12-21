//Documentation
/* psuedo  
the parameters we need are the total starting units, which will equal 10,000
Set the random profitability of the item between 1.1 and 1.3
Set the quantity of items to 0
Set a turn counter to keep track of time
Set the Badluck events being random giving us a probability of 20% that we have bad luck this turn
Set the middle screen to give context and visuals for turn 0.
Set 3rd col to give info about the turn, and how the user is doing.
Initially set background to be green. 
Apply function to determine based on number of units, what color the button will be.
Set the input Buttons to Buy product
After the user clicks, display pop up, stating your turn is over.
*/
$("#newGame").hide();
$("#winner").hide();
$("#loser").hide();
$("#nextTurn").hide();
let score= 10000;
let Inventory= 0;
let risidual= 100;
//ocument.getElementById('Units').innerHTML=`${score}`;
function setScore() {
    document.getElementById('Units').innerHTML=`${score}`;
   return;
  //document.getElementById(x).value= "${score}";
 //$('#Units').val(score);
}
setScore();
function setInventory() {
    document.getElementById('Inventory').innerHTML=`${Inventory}`;
   return;
  //document.getElementById(x).value= "${score}";
 //$('#Units').val(score);
}
setInventory()
//let inventoryStart=document.querySelector('#Inventory');
let newScore;
let newInventory;
document.getElementById("colorChanger").style.textShadow = "1px 1px 4px ";
let colorSelector= document.querySelector("#colorChanger");
let colorChanger=colorSelector.style.color="green";
function colorHealth(score) {
    if (score>=10000) {
    colorChanger=colorSelector.style.color="green";
    document.getElementById("colorChanger").style.textShadow = "1px 1px 6px white";
    console.log("green");
    return;}
    if (score<10000 && score>=7500) {
    colorChanger=colorSelector.style.color="#adff2f"; //greenyellow
    document.getElementById("colorChanger").style.textShadow = "1px 1px 6px black";
    console.log("green yellow");
    return;}
    if (score<7500 && score>=5000) {
    colorChanger=colorSelector.style.color="yellow"; 
    document.getElementById("colorChanger").style.textShadow = "1px 1px 6px black";
    console.log("yellow");
    return;}
    if (score<5000 && score>2500){
    colorChanger=colorSelector.style.color="#ff7f50"; //coral red orange
    document.getElementById("colorChanger").style.textShadow = "1px 1px 6px black";
    console.log("red-orange");
    return;}
    if(score<2500){
    let colorChanger=colorSelector.style.color="red";
    document.getElementById("colorChanger").style.textShadow = "1px 1px 6px wheat";
    console.log("red");
    return; }
    }
//colorHealth(score);
    $('#button50').on('click', (event)=> {
        let newPurchase=50;
let newScore=score-(newPurchase*10);
 document.querySelector('#Units').innerHTML=`${newScore}`;
  score= newScore;
  console.log(score);
  let newInventory=Inventory+newPurchase;
document.querySelector('#Inventory').innerHTML=`${newInventory}`;
Inventory=newInventory;
console.log(score);
colorHealth(score);
$("#nextTurn").show();
return;
    }
    )
    $('#button100').on('click', (event)=> {
        let newPurchase=100;
let newScore=score-(newPurchase*10);
 document.querySelector('#Units').innerHTML=`${newScore}`;
  score= newScore;
  console.log(score);
  let newInventory=Inventory+newPurchase;
document.querySelector('#Inventory').innerHTML=`${newInventory}`;
Inventory=newInventory;
console.log(score);
colorHealth(score);
$("#nextTurn").show();
return;
    }
    )
    $('#button200').on('click', (event)=> {
        let newPurchase=200;
let newScore=score-(newPurchase*10);
 document.querySelector('#Units').innerHTML=`${newScore}`;
  score= newScore;
  console.log(score);
  let newInventory=Inventory+newPurchase;
document.querySelector('#Inventory').innerHTML=`${newInventory}`;
Inventory=newInventory;
console.log(score);
colorHealth(score);
$("#nextTurn").show();
return;
    }
    )
//    let Ad=false; // future work for allowing users to buy Ads
//     let Adcost; // additional feature
//     $('#buttonA').on('click', (event2)=> {
//         let Adcost=200;
//         let Ad=true;
// let newScore=score-(Adcost);
//  document.querySelector('#Units').innerHTML=`${newScore}`;
//   score= newScore;
//   console.log(score);
// console.log(score);
// colorHealth(score);
// $("#nextTurn").show();
// console.log(`Ads are `+Ad);
// return Ad;
//     }
//     )
    let numberSales= .2; //how much inventory sells per turn
    let profitPerTurn;
    function salesData(InvData) {
        // if (Ad=true){
        //     a=2; //2x multiplier on inventory sold
        //      }
        //      if (Ad=false){
        //          a=1
        //      }
        //      console.log(a);
        let a=1;
    profitPerTurn= Math.round((InvData)*(numberSales*(a))*profitability*(10));
    updateUnits=score+profitPerTurn-(risidual);
    console.log(updateUnits);
    document.querySelector('#Units').innerHTML=`${updateUnits}`;
    score=updateUnits;
    updateInventory=Math.round(Inventory*((1-numberSales)*(1)));
    if (updateInventory>=10){
    document.querySelector('#Inventory').innerHTML=`${updateInventory}`;
    Inventory=updateInventory;
    }
    else if (updateInventory<=10){
        console.log("No inventory")
        document.querySelector('#Inventory').innerHTML=`${0}`; 
        document.querySelector('#header').innerHTML="You've sold out of items buy more";
        $('#header').hide(5000,"linear");
    }
    //let a=a-1;
    return profitPerTurn;
    }
    let x;
    let y;
    let a; //inventory sold multiplier additional feature for later
    let b; //Sales profitability multiplier additional feature for later
    let c; //Sales  additional feature for later
    
    $('#nextTurn').on('click', (event)=> {
 turn++;
 turnTitle(turn);
 $('#header').show();
 badLuck(turn);
 if (gameStatus==true) {
let x=Inventory;
//let y=Units;
$('#newTurn').html(`Your had some sales! ${salesData(x)} Units to be exact!`)
colorHealth(score);
console.log(turn);
 }
 else if (gameStatus==false) {
     let badEvent=problemsArr[Math.floor(Math.random()*problemsArr.length)];
     console.log("false")
     $('#newTurn').html(`${badEvent}`);
 }
 
gameScript(turn);
    })

let turn=0;
let gameStatus;
let maxp=145; //maximum profitability is 1.30 aka 30 percent margins
let minp=125; //minimum profitability is 1.1 aka 10 percent margins
const profitability=(Math.floor(Math.random()*(maxp-minp+1)+minp))/100;
console.log(profitability);
// function for the odds of an external event happening on a given turn
 function badLuck(turn){ 
let odds= (Math.random()*100);
    if (odds<=80) { //0-79 
 return gameStatus= true;
    }
    else if (odds>80) {
 return gameStatus= false;
    }}

//console.log(badLuck())
    function gameScript(turn){
        if(turn==0) {
           console.log("normal game start text") //change middle text to read information regarding getting going
        return;
        }
        if ((turn>0 && turn<12) && gameStatus==true) {
           console.log("keep building");
           return;
            // change middle text to read information regarding what options the user has
        }
         if ((turn>0 && turn<12) && gameStatus==false){
           console.log("bad news"); // change middle text to relay the bad news
        return;
        }
        if (turn==12) {
            if (score>=10000){
                $('#newTurn').html("You won! Congratuations!"); 
                $('#winner').show();
                playAgain(turn);
            }
            else if (score<=10000){
                $('#newTurn').html("You lost, better luck next time!");
                $('#loser').show();
                playAgain(turn);
            }
            console.log("win or lose");
            return;
            // change text to you win if score>10000
            //change text to you lose if score<10000
        }
    };
    function turnTitle(turn){
        if (turn == 0) {
            $('#turnInfo').html(`Its Turn 0, Can you build a successful online business?`)
        }
        if (turn >= 1 && turn<=5) {
            $('#turnInfo').html(`Its Turn ${turn}, its still early, keep buying more Product!`)
        }
        if (turn>=6 && turn<=9) {
           $('#turnInfo').html(`Its Turn ${turn}, you can do it!`)
        }
        if (turn>=10 && turn<12) {
           $('#turnInfo').html(`Its Turn ${turn}, we don't have a lot of time left!`)
        }
        if (turn==12) {
           $('#turnInfo').html(`Its Turn ${turn}!!! Click play again!`)
       }}
       problemsArr= ["Due to Supply shortages, we weren't able to have any sales this Turn", "A virus has hit our distributors, no Sales this Turn", "We were hit with a blizzard, no sales this Turn"];
       function playAgain(turn) {
           $('#button50').hide();
           $('#button100').hide();
           $('#button200').hide();
           $("#nextTurn").hide();
           $("#help-info").hide();
           $("#newGame").show();
       }
       $('#newGame').on('click', (event)=> {
       location.reload();
return;
    }
    )
    



   

