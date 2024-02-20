let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let newGameBtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");
let scoreX = 0;
let scoreO = 0;
let scoreXElement = document.querySelector("#score-x");
let scoreOElement = document.querySelector("#score-o");


let turnO = true;

const winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
];

const resetGame = () =>{
    turnO = true;
    enableBoxes();
    msgContainer.classList.add("hide");
    boxes.forEach(box => box.classList.remove("clicked"));
};

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        
        if (turnO) {
            box.innerText = "O";
            turnO = false;
        }else {
            box.innerText = "X";
            turnO = true;
        }
        box.disabled = true;

        checkWinner();

        box.classList.add("clicked"); // Add the "clicked" class to the button
    });
});


const disableBoxes =() => {
    for (let box of boxes){
        box.disabled = true;
    }
};

const enableBoxes =() => {
    for (let box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
};



const showWinner = (winner) => {
    // msg.innerText = `Congratulations, winner is ${winner}`;
    // msgContainer.classList.remove("hide");
    if (winner === 'X') {
        scoreX++;
    } else {
        scoreO++;
    }
    scoreXElement.innerText = scoreX;
    scoreOElement.innerText = scoreO;
    
    msg.innerText = `Congratulations, winner is ${winner}`;
    msgContainer.classList.remove("hide");
    
}

const checkWinner = () => {
    for (let pattern of winPatterns) {
        let pos1Val = boxes[pattern[0]].innerHTML;
        let pos2Val = boxes[pattern[1]].innerHTML;
        let pos3Val = boxes[pattern[2]].innerHTML;

        if (pos1Val !="" && pos2Val !="" && pos3Val !=""){
            if(pos1Val === pos2Val && pos2Val === pos3Val){
                console.log("winner", pos1Val);
                showWinner(pos1Val);
                disableBoxes();


                  
            }
        }
    }
};


newGameBtn.addEventListener("click", resetGame);
resetBtn.addEventListener("click",resetGame);








