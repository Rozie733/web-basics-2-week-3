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
    return Math.floor(Math.random()*3) + 1;
   
  }

 player1.name = prompt("What is your name player1?");
 player2.name = prompt("What is your name player2?");
 
  
 /*to establish the ships on boards
 @param maximum ships per board and the current player
 @return a console table 
 */

 function addShips(maxShips, player){
   let i = 0;
  while (i < maxShips){
    let cordX = randNum();
    let cordY = randNum();
    let cord = player.gameBoard[cordX][cordY];
    if (cord !== 1) {
      player.gameBoard[cordX][cordY] = 1; 
     i++;
    }
  }
   console.table(player.gameBoard);
 }
 addShips(4, player1);
 addShips(4, player2);


  let message = "";
   let i = 2;
   let offensePlayer;
   let defensePlayer;
 
   do{
     let j = i%2;
     
     if (j === 0 ){
       offensePlayer = player1;
       defensePlayer = player2;
       i++;
     }
     else if (j === 1){
       offensePlayer = player2;
       defensePlayer = player1
       i--;
     }
     alert(`offense: ${offensePlayer.name} and defense: ${defensePlayer.name}`)
     let strikeXHere = prompt(`${offensePlayer.name}, choose an x-value (0-3) to strike.`);
     let strikeYHere = prompt(`${offensePlayer.name}, choose a y-value (0-3) to strike.`);
 
     let coordinate = defensePlayer.gameBoard[strikeXHere][strikeYHere];
     
 
   if (coordinate === 1){ 
     defensePlayer.gameBoard[strikeXHere][strikeYHere] = 0;
     defensePlayer.shipCount--;
     alert("Hit!" + "by" + offensePlayer.name);
   }
   else{
     alert("Miss!")
   }
     if (defensePlayer.shipCount === 0){
       alert("End of the game");
       message = `The winner is ${offensePlayer.name}!`;
       break;
     }
 } while(i < 33)
 
  
  
   return message;
 }
 
 const gameResult = battleship()
 
 const htmlTarget = document.getElementById('result')
 htmlTarget.innerHTML = gameResult
 