import {
    Key,
    WhenKeyProps,
    whileNeedAsync,
    DocUtils,
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
        await sitButton.holdOnTime(sitDelay);
        return sitButton.holdOnTime(sitDelay);
    }

    const jump = () => jumpButton.holdOnTime(jumpDelay);

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
    getDoc: ({when}) => `When ${DocUtils.activate(when)}, then do burpee`,
});

const main = () => {
    runScripts([
        getCommonScripts(),
        getBurpeeScript({when: Key.DOWN}),
    ])
}

main();
