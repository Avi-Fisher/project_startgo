

export default function placement_random(board, army, min_row, max_row) {

    
    let index = 0


    for (let row = min_row; row < max_row; row++)

        for (let colmn = 0; colmn < 10; colmn++) {

            board[row][colmn] = army[index]
            

            index++
            if (index === army.length) {
                break
            }
        }
}








