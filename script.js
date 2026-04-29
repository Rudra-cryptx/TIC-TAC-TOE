let boxes = document.querySelectorAll('.box');
let reset = document.querySelector(".reset_btn");
let player_1 = "X";
let player_2 = "O";
let count = true;
let winner = document.querySelector(".color");
let arr = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 6, 8],
    [0, 4, 8],
    [2, 4, 6]
];
let current = document.querySelector(".turn");
let move = 0;
boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if (count) {
            box.innerText = player_1;
            count = false;
            current.innerText = "Player 2";

        } else {
            box.innerText = player_2;
            count = true;
            current.innerText = "Player 1";
        }
        box.disabled = true;
        move++;
        checkwinner();
    });
})
let s = false;
const checkwinner = ()=>{
    arr.forEach((i)=>{
        if(boxes[i[0]].innerText === boxes[i[1]].innerText &&  boxes[i[1]].innerText ===  boxes[i[2]].innerText && boxes[i[0]].innerText !== ""){
            if(boxes[i[0]].innerText === player_1){
                winner.innerHTML = "<p>Player 1 wins!</p>";
            }
            else{
                
                winner.innerHTML = "<p>Player 2 wins!</p>";
            }
            s = true;
            boxes.forEach((box)=>{
                box.disabled = true;
            })
        }
    })
    if(!s && move === 9){
        winner.innerHTML = "<p>Match is Draw!</p>";
    }
}

document.querySelector(".reset_btn").addEventListener("click" , ()=>{
    boxes.forEach((box)=>{
        box.innerText = "";
        box.disabled = false;
    })
    count = true;
    winner.innerHTML = "<p>Current Turn: <span class=\"turn\">Player 1</span></p>";
})