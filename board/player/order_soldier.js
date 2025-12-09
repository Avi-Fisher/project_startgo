import input_cli from "../../utils/input_cli.js"


export default function order_solder(board,army) {

    console.log("\n ================== \n")
    console.log("Now Order Your Soldier ")

    let index = 0
    while (index <= army.length) {

        console.table(board)

        console.log("soldier: ", army[index])

        console.log("What your row between 0 - 3");
        let row = input_cli()

        console.log("peek colmn for soldier between 0 - 9")
        let colmn = input_cli()

        if (3 >= row && row >= 0 && 9 >= colmn && colmn >= 0){

            if (board[row][colmn] === "_"){
                
                board[row][colmn] = army[index]
                            index ++
            }
        }
    }
}