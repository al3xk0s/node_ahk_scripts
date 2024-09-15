import { runScripts, Key, ScrollKey, getTapKey } from 'node-ahk';
import { getCommonScripts } from './commonScripts';
import { getScrollScripts } from './scrollScripts';
import { getShifterScript, sixShifterPairs } from './shifterScripts';

const main = () => {
  runScripts([
    getScrollScripts({
      scrollUpToggle: Key.THREE,
      scrollDownToggle: Key.FOUR,
      triggerButton: Key.CAPS_LOCK,
      delayMs: 5,
      scrollStep: 100,
    }),

    getShifterScript(Key.NUMPAD_ADD, sixShifterPairs),

    getCommonScripts(),    

    getTapKey({when: Key.UP, then: ScrollKey.UP()}),

    getTapKey({when: Key.DOWN,then: ScrollKey.DOWN()}),
  ]);
}

main();
