import create_basic_board from "../board/matrix_board.js";
import create_player from "../board/player/create_player.js";
import order_solder from "../board/player/order_soldier.js";
import placement_ai from "../board/player/placement_ai.js";
import create_army from "../board/soldier/create_army.js";
import input_cli from "../utils/input_cli.js";

export default function game_init() {

    console.log("Enter Your Name");
    let name_player = input_cli()


    let player = create_player(name_player)
    let army_player = create_army(player)
    let board = create_basic_board()

    order_solder(board, army_player,name_player)
    placement_ai(board)

    console.table(board);

}


game_init()



