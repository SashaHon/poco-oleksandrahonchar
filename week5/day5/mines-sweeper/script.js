// Set this constant to true to debug the placement of bombs without
// having to click on all cells to reveal them.
const CHEAT_REVEAL_ALL = true;

const ROWS_COUNT = 10;
const COLS_COUNT = 10;

const BOMBS_COUNT = 10;
const BOMBS_LIST = [];

const playfield = document.querySelector("#playfield");

let defeat = false;
let victory = false;

// Cell constructor
function Cell() {
  this.discovered = false;
  this.isBomb = false;
  this.hasBeenFlagged = false;
}

// Initialize cells
let cells = Array(ROWS_COUNT);
// console.log(cells);
for (let row = 0; row < ROWS_COUNT; row++) {
  cells[row] = Array(COLS_COUNT);
  for (let col = 0; col < COLS_COUNT; col++) {
    cells[row][col] = new Cell();
  }
}

// TODO: Task 1 - add some bombs at fixed positions.
function generateRandomNum() {
  let row = Math.floor(Math.random() * 10);
  let column = Math.floor(Math.random() * 10);
  return [row, column];
}

function checkCellIsBomb(row, column) {
  return cells[row][column].isBomb;
}

function addBombs(bombsCount) {
  for (let i = 0; i < bombsCount; i++) {
    let [row, column] = generateRandomNum(bombsCount);
    if (!checkCellIsBomb(row, column)) {
      cells[row][column].isBomb = true;
      BOMBS_LIST.push([row, column]);
    } else {
      i--;
    }
  }
}
// console.log(cells[BOMBS_LIST[0][0]][BOMBS_LIST[0][1]])

addBombs(BOMBS_COUNT);

// console.log(BOMBS_LIST[0]);
// console.log(BOMBS_LIST);
// console.log(countAdjacentBombs(BOMBS_LIST));

//
// TODO: Task 2 - Comment out the code of task 1. Instead of adding bombs in fixed places, add 10 of them in random places.
//                Add a BOMBS_COUNT constant so that you can easily change the amount of bombs placed. Put it next to the
//                other constants.
//

// Once the game has been initialized, we "render" it.
render();

//
// Game functions definitions
//

function addEventListeners() {}

function clickHandler(e) {
  console.log(e.target);
}
playfield.addEventListener("click", clickHandler);

function discoverCell(row, col) {
  //
  // TODO: Task 5 - Reveal cells when clicked.
  //
  //
  // TODO: Task 6 - Discover neighbor cells recursively, as long as there are no adjacent bombs to the current cell.
  //
  //
  // TODO: Task 8 - Implement defeat. If the player "discovers" a bomb (clicks on it without holding shift), set the letiable defeat to true.
  //
}

function flagCell(row, col) {
  //
  // TODO: Task 7 - Implement flags. Flags allow the player to mark cells that they think contain a bomb.
  //                When clicking a cell and holding shift, function flagCell() will be called for you.
  //
}

// This function is called once for each cell when rendering the game. The row and col of the current cell is
// passed to the functionn

function countAdjacentBombs(row, col) {
  //
  // TODO: Task 4 - Adjacent bombs are bombs in cells touching our cell (also diagonally). Implement this function
  //                so that it returns the count of adjacent cells with bombs in them.
  //
  // console.log("here:", [row, col]);
  return 1;
}

function isZeroOrNine(num) {
  if (num === 0) {
    return 0;
  } else if (num === 9) {
    return 9;
  }
  return false;
}

function countAdjacentBombsAlt(row, col) {
  let adjBombsCount = 0;

  //function that checks if row or col == 0 || 9
  for (let i = 0; i < 3; i++) {
    // for (let j = 0; j < 3; j++){

    // console.log("first", row, isZeroOrNine(row));
    // console.log("second", row, !isZeroOrNine(row));

    console.log("case:", [row, col]);

    if (i === 0 && !isZeroOrNine(row)) {
      if (!isZeroOrNine(col) && cells[row - 1][col - 1].isBomb) {
        adjBombsCount += 1;
      } else if (!isZeroOrNine(col) && cells[row - 1][col].isBomb) {
        adjBombsCount += 1;
      } else if (!isZeroOrNine(col) && cells[row - 1][col + 1].isBomb) {
        adjBombsCount += 1;
      } ////////PLEASE ALSO ADD CHECKUP IF ALL OF THE CELLS "BEFORE, AFTER ETC EXIST";
    } else if (i === 1) {
      if (!isZeroOrNine(col) && cells[row][col - 1].isBomb) {
        adjBombsCount += 1;
      } else if (!isZeroOrNine(col) && cells[row][col + 1].isBomb) {
        adjBombsCount += 1;
      }
    } else if (i === 2 && !isZeroOrNine(row)) {
      if (!isZeroOrNine(col) && cells[row + 1][col - 1].isBomb) {
        adjBombsCount += 1;
      } else if (!isZeroOrNine(col) && cells[row + 1][col].isBomb) {
        adjBombsCount += 1;
      } else if (!isZeroOrNine(col) && cells[row + 1][col + 1].isBomb) {
        adjBombsCount += 1;
      }
    }

    //[2][0] => [1][-1], [2][-1], [3][-1]
    //  }
  }
  console.log(adjBombsCount);
  console.log("here:", [row, col]);
  return 1;
}

countAdjacentBombsAlt(...BOMBS_LIST[0]);

function getBombsCount() {
  //
  // TODO: Task 9 - Implement stats: the counters currently always display 0, calculate and return the relevant values.
  //
  return 0;
}

function getClearedCells() {
  //
  // TODO: Task 9 - Implement stats: the counters currently always display 0, calculate and return the relevant values.
  //
  return 0;
}

function getTotalCellsToClear() {
  //
  // TODO: Task 9 - Implement stats: the counters currently always display 0, calculate and return the relevant values.
  //
  return 0;
}

function checkForVictory() {
  //
  // TODO: Task 10 - Implement victory. If the player has revealed as many cells as they must (every cell that isn't a
  //                 bomb), set letiable victory to true.
  //
  return 0;
}

//
// Rendering functions
//
function getMessage() {
  if (victory == true) {
    return "Well done! 👏🏼<br><br>Refresh the page to start again.";
  } else if (defeat) {
    return "Boom! 💥<br><br>Refresh the page to try again.";
  }
  return "";
}

// "Render" the game. Update the content of the page to reflect any changes to the game state.
function render() {
  let playfield = document.getElementById("playfield");
  let html = "";
  for (let row = 0; row < ROWS_COUNT; row++) {
    html += '<div class="row">';
    for (let col = 0; col < COLS_COUNT; col++) {
      let cell = cells[row][col];
      let cellText = "";
      let cssClass = "";
      let textColor = "";
      if (cell.discovered || CHEAT_REVEAL_ALL || defeat) {
        cssClass = "discovered";
        if (cell.isBomb) {
          cellText = "💣";
        } else {
          let adjBombs = countAdjacentBombs(row, col);
          if (adjBombs > 0) {
            cellText = adjBombs.toString();
            if (adjBombs == 1) {
              textColor = "blue";
            } else if (adjBombs == 2) {
              textColor = "green";
            } else if (adjBombs == 3) {
              textColor = "red";
            } else if (adjBombs == 4) {
              textColor = "black";
            }
          }
        }
      } else {
        if (cell.hasBeenFlagged) {
          cellText = "🚩";
        }
      }
      html += `<div class="cell ${cssClass}" style="color:${textColor}" onclick="onCellClicked(${row}, ${col}, event)">${cellText}</div>`;
    }
    html += "</div>";
  }
  playfield.innerHTML = html;

  // Defeat screen
  let body = document.getElementsByTagName("body")[0];
  if (defeat) {
    body.classList.add("defeat");
  }

  // Victory screen
  if (victory) {
    body.classList.add("victory");
  }

  // Update stats
  document.getElementById("bombs-count").innerText = getBombsCount().toString();
  document.getElementById("cleared-cells-count").innerText =
    getClearedCells().toString();
  document.getElementById("total-cells-to-clear").innerText =
    getTotalCellsToClear().toString();

  // Update message
  document.getElementById("message").innerHTML = getMessage();
}

// This function gets called each time a cell is clicked. Arguments "row" and "col" will be set to the relevant
// values. Argument "event" is used to check if the shift key was held during the click.
function onCellClicked(row, col, event) {
  if (event.shiftKey) {
    flagCell(row, col);
  } else {
    discoverCell(row, col);
  }
  checkForVictory();
  render();
}
