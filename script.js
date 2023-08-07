console.log("Welcome to tic tac tow");
let audioturn = new Audio("turn.mp3");
let iswin = false;
let turn = "X";

const changeTurn = () =>{
    return turn == "X" ?"0":"X";
}

const cheakwin = ()=>{
    let boxtext = document.getElementsByClassName('boxtext');
    let win = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
    ]
    win.forEach(e =>{
        if((boxtext[e[0]].innerText != "")&&(boxtext[e[0]].innerText==boxtext[e[1]].innerText)&&(boxtext[e[2]].innerText==boxtext[e[1]].innerText)){
            document.querySelector(".infoturn").innerText ="Congrats " + boxtext[e[0]].innerText + " wins";
            var imageElement = document.getElementById("image");
            imageElement.style.display = "block";
            iswin = true;
        }
    })
}

//game logic

let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element =>{
    let boxtext = element.querySelector('.boxtext');
    element.addEventListener('click', ()=>{
        if(boxtext.innerText == ''){
            boxtext.innerText = turn;
            turn = changeTurn();
            audioturn.play();
            cheakwin();
            if(!iswin){
            document.getElementsByClassName("infoturn")[0].innerText = "Turn for " + turn;
            }
        }
            
    })
})

//onclick reset button
reset = document.getElementsByClassName('reset')[0];
reset.addEventListener('click', ()=>{
    let boxtexts = document.querySelectorAll('.boxtext');
    Array.from(boxtexts).forEach(element => {
        element.innerText = "";
    })
    turn = "X";
    iswin = false;
    document.getElementsByClassName("infoturn")[0].innerText = "Turn for " + turn;
    var imageElement = document.getElementById("image");
    imageElement.style.display = "none";
})
