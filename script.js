let button = document.querySelectorAll(".btn");
let chanceX = true;
let winmsg = document.querySelector(".win-msg");
let resbtn = document.querySelector("#resbtn");
let newbtn = document.querySelector("#newbtn");
let msg = document.querySelector("#msg");
let welcome = document.querySelector(".welcome")
const win = [
    [0, 1, 2],
    [0, 4, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [3, 4, 5],
    [6, 7, 8],
    [6, 4, 2]
]
button.forEach((btn) => {
    btn.addEventListener("click", () => {
        if (chanceX) {
            btn.innerText = "X";
            chanceX = false;
        }
        else {
            btn.innerText = "O";
            chanceX = true
        }
        btn.disbaled = true;
        checkwin();
    })
})
const checkwin = () => {
    for (let pattern of win) {
        let pos0val = button[pattern[0]].innerText;
        let pos1val = button[pattern[1]].innerText;
        let pos2val = button[pattern[2]].innerText;

        if (pos0val != "" && pos1val != "" && pos2val != "") {
            if (pos0val === pos1val && pos1val === pos2val) {
                showWinner(pos1val);
            }
        }
    }
}
const disable = () => {
    for (let btn of button) {
        btn.disabled = true;
    }
}
const reset = () => {
    for (let btn of button) {
        btn.disabled = false;
        winmsg.classList.add("hide");
        welcome.classList.remove("hide");
        btn.innerText = "";
        chanceX = true;
    }
}
const showWinner = (winner) => {
    msg.innerText = `Winner is ${winner} player`;
    winmsg.classList.remove("hide");
    welcome.classList.add("hide");
    disable();
}
resbtn.addEventListener("click", reset);
newbtn.addEventListener("click", reset);
