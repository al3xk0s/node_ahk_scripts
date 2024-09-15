import { runScripts, getTickByHold, Key, MouseKey } from "node-ahk";

const main = () => runScripts([
    getTickByHold({when: Key.F, then: MouseKey.LEFT, activate: Key.NUMPAD_ADD}),
    getTickByHold({when: Key.G, then: Key.E, activate: Key.NUMPAD_ADD}),
]);

main();
