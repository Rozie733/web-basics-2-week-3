//I experienced some issues with GitHub where when I tried to push this branch, it told me I was unable to
//I looked through Github and I couldn't find the repository there, and I don't recall deleting it or performing the wrong step when forking/cloning this assignment
//therefore, I reforked and recloned the repository and pasted to work I had on the previous one here
//Please let know if you happen to know where my mistake was to prevent it in the future. Thanks!


const battleship = () => {
  let player1 = {
    name:"", 
    shipCount: 4,
    gameBoard: [[0, 0, 0, 0],
                 [0, 0, 0, 0],
                 [0, 0, 0, 0],
                 [0, 0, 0, 0]]
  };
 
  let player2 = {
   name:"", 
   shipCount: 4, 
   gameBoard: [[0, 0, 0, 0],
               [0, 0, 0, 0],
               [0, 0, 0, 0],
               [0, 0, 0, 0]]
  };
 
 function randNum () {
   return Math.floor(Math.random()*3 + 1);
  
 }
 player1.name = prompt("What is your name player1?");
 player2.name = prompt("What is your name player2?");
 
  
 
 let shipsAdded = 1;
 while(shipsAdded < 9) {
    
 
    let cord1 = player1.gameBoard[randNum()][randNum()]; 
    let cord2 = player2.gameBoard[randNum()][randNum()];
    
   
    if (cord1 !== 1) {
    cord1 = 1;
     shipsAdded++;
    }
 
    if (cord2 !== 1) {
     cord2 = 1;
    shipsAdded++;
   }
  
 }
 
   let i = 2;
   let currentPlayer;
 
   do{
     let j = i%2;
     
     if (j === 0 ){
       currentPlayer = player1;
       i++;
     }
     else if (j === 1){
       currentPlayer = player2;
       i--;
     }
     let strikeXHere = prompt(`Choose an x-value (0-3) to strike ${currentPlayer.name}.`);
     let strikeYHere = prompt(`Choose an y-value (0-3) to strike ${currentPlayer.name}.`);
 
     let coordinate = currentPlayer.gameBoard[strikeXHere][strikeYHere];
     
 
   if (coordinate === 1){ 
     currentPlayer.gameBoard[strikeXHere][strikeYHere] = 0;
     currentPlayer.shipCount--;
     alert("Hit!");
   }
   else{
     alert("Miss!")
   }
   let message = "";
     if (currentPlayer.shipCount === 0){
       alert("end of game");
       message = `The winner is ${currentPlayer}!`;
       break;
     }
 } while(i < 33)
 
  
  
   return message;
 }
 
 const gameResult = battleship()
 
 const htmlTarget = document.getElementById('result')
 htmlTarget.innerHTML = gameResult
 