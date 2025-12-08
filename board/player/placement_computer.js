import create_basic_board from "../matrix_board.js"
import create_army from "../soldier/create_army.js"

export default function placement_ai() {

    let army = create_army("ai")

    

    for (let x of army){

    let row = Math.floor(Math.random() * (10 - 6)) + 6
    let colmn = Math.floor(Math.random() * (10))

    board[row][colmn] = x
    }
    
    return army
}


// console.table(placement_ai(create_basic_board()));

console.log(create_army().);







