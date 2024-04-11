// Write code below 💖

//0 = Rock;
//1 = Paper
//2 = Scissors

const player = 3;
computer = Math.floor(Math.random() * 3)

if (player === 0){
  if (computer == 0){
    console.log("It's a tie. Lets go again!")
}
  else if(computer === 1){
    console.log("Computer Wins")
  }
  else if(computer === 2){
    console.log("Player Wins")
  }
  else{
    console.log("Error!")
  }
}

if (player === 1){
  if (computer == 1){
    console.log("It's a tie. Lets go again!")
}
  else if(computer === 3){
    console.log("Computer Wins")
  }
  else if(computer === 0){
    console.log("Player Wins")
  }
  else{
    console.log("Error!")
  }
}
if (player === 2){
  if (computer == 2){
    console.log("It's a tie. Lets go again!")
}
  else if(computer === 0){
    console.log("Computer Wins")
  }
  else if(computer === 1){
    console.log("Player Wins")
  }
  else{
    console.log("Error!")
  }
}
