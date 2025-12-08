import create_army from "./create_army.js";

export default function mixing_army(name) {

    let army = create_army(name)

    for (let i = 0; i < 1000; i++) {

        let num1 = Math.floor(Math.random() * army.length)
        let num2 = Math.floor(Math.random() * army.length)

        let temp = army[num1]
        army[num1] = army[num2]
        army[num2] = temp

    }
    return army
}








