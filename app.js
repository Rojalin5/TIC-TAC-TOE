let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector("#reset-btn");
let newgamebtn = document.querySelector("#new-btn");
let msgcontainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg")

let turnX = true;
let count = 0;
const winpatterns = [[0, 1, 2], [0, 3, 6], [0, 4, 8], [1, 4, 7], [2, 5, 8], [2, 4, 6], [3, 4, 5], [6, 7, 8]];

const resetgame = () => {
    turnX = true;
    btnenabled();
    msgcontainer.classList.add("hide")
}
boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if (turnX) {
            box.innerText = "X";
            box.style.color = "white";
            turnX = false;
        } else {
            box.innerText = "O";
            box.style.color = "antiquewhite";
            turnX = true;
        }
        box.disabled = true;
        count++;
        
        let iswinner = checkWinner();
        if (count === 9 && !iswinner) {
            gameDraw();
        }
    });
});
const btndisabled = () => {
    for (let box of boxes) {
        box.disabled = true;
    }
};
const btnenabled = () => {
    for (let box of boxes) {
        box.disabled = false;
        box.innerHTML = "";
    };
}

const gameDraw = () => {
    msg.innerText = "Game is Draw!!"
    msgcontainer.classList.remove("hide")
    btndisabled();
};
const showWinner = (Winner) => {
    msg.innerText = `Congratulation,Winner is ${Winner} 🥳!\n Please click New Game to replay!`;
    msgcontainer.classList.remove("hide");
    btndisabled();
};

const checkWinner = () => {
    for (let pattern of winpatterns) {

        let pos1 = boxes[pattern[0]].innerText;
        let pos2 = boxes[pattern[1]].innerText;
        let pos3 = boxes[pattern[2]].innerText;

        if (pos1 != "" && pos2 != "" && pos3 != "") {
            if (pos1 === pos2 && pos2 === pos3) {
                showWinner(pos1);
            }
        }

    }
};
newgamebtn.addEventListener("click", resetgame);
resetbtn.addEventListener("click", resetgame);
