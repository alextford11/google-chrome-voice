import $ from "jquery";
import { getMostConfidentFromArray, objectBool } from "./wit";

export function noIntentFound(data) {
    return `alert("I'm sorry I didn't understand that, could you please try again")`;
}

export function noTargetFound(message) {
    return `alert("${message}")`;
}

export function changeBackgroundColour(data) {
    const failure_code = noTargetFound(
        "Couldn't find a colour to change the background to, please try again."
    );
    const targets = data["entities"]["target:target"];
    const most_confident_target = getMostConfidentFromArray(targets);
    if (!objectBool(most_confident_target)) {
        return failure_code;
    }
    const most_confident_entity = getMostConfidentFromArray(most_confident_target["entities"]);
    if (!objectBool(most_confident_entity)) {
        return failure_code;
    }
    const colour = most_confident_entity["value"];
    return `document.body.style.backgroundColor = "${colour}"`;
}
