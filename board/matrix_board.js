export default function create_basic_board() {

    let board = []

    for (let i = 0; i < 10; i++) {
        let colmn = []

        for (let j = 0; j < 10; j++){

            colmn.push("_")
        }
        board.push(colmn)

    }
    return board
}











