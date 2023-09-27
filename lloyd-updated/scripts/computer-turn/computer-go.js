import { whichBoard } from "../renderBoard/renderBoard.js"
import { genValidShip } from "./adians-code-modified.js"


//This function manages the logic for the computer having a turn
export const computerTurn = (turnManager, gameBoardsObj) => {
    console.log(`the computer is having a turn`)

    // determine which board the computer will play on using the which board function 
    const board = whichBoard(turnManager, gameBoardsObj)

    if (turnManager.turn < 6) {
        //If the total turn count is less than three the computer will set a ship using the ship generation code
        genValidShip(board)

    } else {
        //select square after turn 6 to show hit or miss
        board.selectGridSquareById("1A")

        //A function similar to gen valid ship to select a square could be used here. use the board.selectShipByID to shoot.
    }



}