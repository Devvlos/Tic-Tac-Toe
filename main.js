let result = document.getElementById("Result");
let boxes =  document.querySelectorAll(".box");
let resetBtn = document.getElementById("reset");



let count = 0;



let playerPlaying = "x";
let gameComplete = false;

const winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
]

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if (gameComplete === false)
        {
            count++;
            if (playerPlaying === "x")
            {
                box.innerHTML = "X"
                box.style.color = "red"
                playerPlaying = "o"
            }
            else
            {
                box.innerHTML = "O"
                box.style.color = "green"
                playerPlaying = "x"
            }
            box.disabled = true;
            checkWinner();
        }
    })
})

let pointX = 0;
let pointO = 0;
const checkWinner = () => {
    for(let pattern of winPatterns)
    {
        pl1 = document.getElementById('Player1').value;
        pl2 = document.getElementById('Player2').value;

        if (boxes[pattern[0]].innerHTML === "X" && boxes[pattern[1]].innerHTML === "X" && boxes[pattern[2]].innerHTML === "X")
        {
            result.innerHTML = 'Congratulations ' + pl1 + ' Won';
            result.style.opacity = "1";
            gameComplete = true;
            pointX++;
            document.getElementById("Playerinfo1").innerHTML = pl1 + ' : ' + pointX;
        }
        if (boxes[pattern[0]].innerHTML === "O" && boxes[pattern[1]].innerHTML === "O" && boxes[pattern[2]].innerHTML === "O")
        {
            result.innerHTML = 'Congratulations ' + pl2 + ' Won';
            result.style.opacity = "1";
            gameComplete = true;
            pointO++;
            document.getElementById("Playerinfo2").innerHTML = pointO + ' : ' + pl2;
        }
    }
    if (count >= 9 && gameComplete === false)
    {
       
       result.innerHTML = "Game Tie Nerds";
       result.style.opacity = "1";
    }
}
const reset = () => 
{
    count = 0;
    gameComplete = false;
    result.style.opacity = "0";
    for(i = 0; i < 9; i++)
    {
        boxes[i].innerHTML = "";
        boxes[i].disabled = false;
    }
}

resetBtn.addEventListener("click", reset);


const shareBtn = document.getElementById('shareBtn')

shareBtn.addEventListener('click', event => {

  // Check for Web Share api support
  if (navigator.share) {
    // Browser supports native share api
    navigator.share({
      text: 'Play Tic-Tac-Toe Here Online',
      url: 'https://devvlos.github.io/Tic-Tac-Toe/',
    }).then(() => {
      console.log('Thanks for sharing!');
    })
      .catch((err) => console.error(err));
  } else {
    // Fallback
    alert("The current browser does not support the share function. Please, manually share the link")
  }
});


function playerName()
{
    var player1 = document.getElementById('Player1').value;
    var player2 = document.getElementById('Player2').value;
    document.getElementById('InputPlayer').style.display = "none";
    document.getElementById("Playerinfo1").innerHTML = player1 + ' : 0';
    document.getElementById("Playerinfo2").innerHTML = '0 :  ' + player2;
}
