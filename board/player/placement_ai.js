import mixing_army from "../soldier/mixing_army.js"

export default function placement_ai(board) {

    let army = mixing_army("ai")
    let index = 0


    for (let row = 9; row > 5; row--)

        for (let colmn = 0; colmn < 10; colmn++) {

            board[row][colmn] = army[index]
            console.log(board[row][colmn]);
            
            index ++
            if (index === army.length){
                break
            }
        }

    return board
}


 





