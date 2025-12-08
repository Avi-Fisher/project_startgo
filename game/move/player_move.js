import input_cli from "../../utils/input_cli.js";

function player_move(player) {
    let running = true

    while (running)
    console.log("\n \n Now ", player.name, " move ");
    
    console.log("peek row");
    let row = input_cli() 

    console.log("peek coulmn");
    let coulmn = input_cli()
    
}


