import create_soldier from "./create_soldier.js"


export default function create_army(name) {

    let army = []


    let soldier = {

        1: 1,
        2: 8,
        3: 5,
        4: 4,
        5: 4,
        6: 4,
        7: 3,
        8: 2,
        9: 1,
        10: 1,
    }

    for (let i = 1; i <= 10; i++) {

        for (let j = 0; j < soldier[i]; j++)
            army.push(create_soldier(i, name))
    }

    army.push(create_soldier("flag", name))


    return army
}















