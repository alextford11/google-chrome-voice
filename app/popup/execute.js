import { ACTION_FUNCTIONS } from "./action_vars";
import { noIntentFound } from "./actions";
import { getMostConfidentFromArray } from "./wit";

export function executeRequest(data) {
    const func = getRequestFunction(data);
    const code = func(data);
    executeScript(code);
}

export function getRequestFunction(data) {
    console.log(data);
    const intents = data["intents"];
    let most_confident_intent = getMostConfidentFromArray(intents);
    if (Object.entries(most_confident_intent).length) {
        return ACTION_FUNCTIONS[most_confident_intent["name"]];
    } else {
        return noIntentFound;
    }
}

export function executeScript(code) {
    chrome.tabs.executeScript(null, { code: code }, (results) => {
        console.log("Results: " + results.toString());
    });
    // window.close();
}
