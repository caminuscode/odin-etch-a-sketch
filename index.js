createBoard(16);

function createBoard(size) {
  const board = document.querySelector(".board");

  board.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
  board.style.gridTemplateRows = `repeat(${size}, 1fr)`;

  let numDivs = size * size;

  for (let i = 0; i < numDivs; i++) {
    let div = document.createElement("div");
    div.addEventListener("mouseover", function () {
      div.style.backgroundColor = "black";
    });
    div.classList.add("board-div");
    board.appendChild(div);
  }
}

function getSize() {
  let feedback = document.querySelector(".feedback");
  let size = prompt("Pick a number between 1-100");

  if (size == "" || size > 100 || size < 1) {
    feedback.innerHTML = "Invalid Number";
  } else {
    feedback.innerHTML = "Valid Number";
    createBoard(size);
  }
}

function reset() {
  let boardDivs = document.getElementsByClassName("board-div");

  for (let i = 0; i < boardDivs.length; i++) {
    boardDivs[i].style.backgroundColor = "white";
  }
}
