import {
    Key,
    WhenKeyProps,
    whileNeedAsync,
    doc,
    runScripts,
    wrapToScriptWithDoc,
} from 'node-ahk';

import { getCommonScripts } from "./commonScripts";

type BurpeeScriptProps = {
    sitDelay?: number;
    jumpDelay?: number;
} & WhenKeyProps;

const burpeeScript = ({when, sitDelay = 400, jumpDelay = 725}: BurpeeScriptProps) => {
    const sitButton = Key.C;
    const jumpButton = Key.SPACE;

    const sit = async () => {
        await sitButton.holdTimed(sitDelay);
        return sitButton.holdTimed(sitDelay);
    }

    const jump = () => jumpButton.holdTimed(jumpDelay);

    const doBurpee = async () => {
        await sit();
        return jump();
    }

    return when.onToggleEnabled((state) => {
        whileNeedAsync({ needContinue: () => state.isEnabled, execute: doBurpee });
    })
}

const getBurpeeScript = wrapToScriptWithDoc(
    burpeeScript, {
    getDoc: ({when}) => `When ${doc.activate(when)}, then do burpee`,
});

const main = () => {
    runScripts([
        getCommonScripts(),
        getBurpeeScript({when: Key.DOWN}),
    ])
}

main();
