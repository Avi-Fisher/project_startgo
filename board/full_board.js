import input_cli from "../utils/input_cli.js";
import create_basic_board from "./matrix_board.js";
import create_player from "./player/create_player.js";
import order_solder from "./player/order_soldier.js";
import placement_ai from "./player/placement_ai.js";
import create_army from "./soldier/create_army.js";

export default function full_board() {

    console.log("Enter Your Name");
    let name_player = input_cli()


    let player = create_player(name_player)
    
    let army_player = create_army(player.name)
    let board = create_basic_board()

    order_solder(board, army_player,name_player)
    placement_ai(board)


    return {
        player:player,
        board:board
    }
}


