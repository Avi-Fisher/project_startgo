export default function log_board(board) {

    let log_board = []

    for (let r of board) {

        let colmn = []

        for (let c of r) {

            if (c === "_") {
                colmn.push(c)
            } else if (c.player === "ai"){
                colmn.push("📛")
            }else {
                colmn.push(c.value)
            }

        }
        log_board.push(colmn)
    }

    console.table(log_board);
}






