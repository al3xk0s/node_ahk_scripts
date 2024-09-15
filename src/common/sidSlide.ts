import { Key, getTickByHold } from "node-ahk";

const main = () => {
    getTickByHold({
        when: Key.V,
        then: Key.C,
        activate: Key.NUMPAD_0,
    })
}

main();
