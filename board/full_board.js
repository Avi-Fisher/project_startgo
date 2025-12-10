import input_cli from "../utils/input_cli.js";
import create_basic_board from "./matrix_board.js";
import create_player from "./player/create_player.js";
import order_solder from "./player/order_soldier.js";
import placement_random from "./player/placement_random.js";
import create_army from "./soldier/create_army.js";
import mixing_army from "./soldier/mixing_army.js"

export default function full_board() {
    let board = create_basic_board()

    console.log("Enter Your Name");
    let name_player = input_cli()


    let player = create_player(name_player)
    let ai_player = create_player()

    let running = true
    while (running){
        console.log("1. Random peek  \n2. You peek");
        let peek_order = input_cli()


        switch (peek_order) {

            case "1":
                let army_mix = mixing_army(player)
                placement_random(board, army_mix, 0, 4)
                running = false
                break
            case "2":
                let army_player = create_army(player.name) 
                order_solder(board,army_player) 
                running = false
                break  
        }
    }
    
    let ai_arny = mixing_army(ai_player.name)
    
    placement_random(board,ai_arny,6,10)

   
    return board
}


