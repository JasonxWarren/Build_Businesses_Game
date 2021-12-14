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
const score= 10000;
//let colorSelector= document.querySelectorAll("#colorChanger")
//let colorChanger=colorSelector.style.color="green";
function colorHealth(round) {
    if (this.score>=10000) {;
    let colorChanger=colorSelector.style.color="green";
    return;}
    if (this.score<10000 && this.score>7500) {
    let colorChanger=colorSelector.style.color="adff2f"; //greenyellow
    return;}
    if (this.score<7500 && this.score>5000) {
    let colorChanger=colorSelector.style.color="yellow"; 
    return;}
    if (this.score<5000 && this.score>2500){
    let colorChanger=colorSelector.style.color="ff7f50"; //coral red orange
    return;}
    if(this.score<2500){
    let colorChanger=colorSelector.style.color="ff7f50";
    return;}
    }
    

totalQuan=0;
let turn=0;
let gameStatus;
let maxp=130; //maximum profitability is 1.30 aka 30 percent margins
let minp=110; //minimum profitability is 1.1 aka 10 percent margins
let profitability=(Math.floor(Math.random()*(maxp-minp+1)+minp))/100;
console.log(profitability);
// function for the odds of an external event happening on a given turn
 function badLuck(round){ 
let odds= (Math.random()*100);
    if (odds<80) { //0-79 
 return gameStatus= true;
    }
    else if (odds>80) {
 return gameStatus= false;
    }}

console.log(badLuck())
    function gameScript(round){
        if(round==0) {
           console.log("normal game start text") //change middle text to read information regarding getting going
        return;
        }
        if ((round>0 && round<12) && gameStatus==true) {
           console.log("keep building");
           return;
            // change middle text to read information regarding what options the user has
        }
         if ((round>0 && round<12) && gameStatus==false){
           console.log("bad news"); // change middle text to relay the bad news
        return;
        }
        if (round==12) {
            console.log("win or lose");
            return;
            // change text to you win if score>10000
            //change text to you lose if score<10000
        }
    };
   console.log(gameScript(1));
   console.log(gameScript(12));
   console.log(gameScript(0));



   

