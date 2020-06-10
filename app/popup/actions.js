import $ from "jquery";
import { checkAndGetEntities } from "./wit";
import { TARGET, TARGET_COLOUR, TARGET_IMAGE, TARGET_TARGET } from "./entity_vars";
import { getImage } from "./google-search";

export function noIntentFound(data) {
    return `alert("I'm sorry I didn't understand that, could you please try again")`;
}

export function noTargetFound(message) {
    return `alert("${message}")`;
}

export function changeBackgroundColour(data) {
    const entity_requirements = { name: TARGET, sub_entity: { name: TARGET_COLOUR } };
    const entities = data["entities"][TARGET_TARGET];
    const entity_check = checkAndGetEntities(entities, entity_requirements);
    if (!entity_check["check"]) {
        return entity_check["code"];
    }
    const colour = entity_check["entity_details"][TARGET_COLOUR]["value"];
    return `document.body.style.backgroundColor = "${colour}"`;
}

export function resetBackgroundColour(data) {
    return `document.body.style.backgroundColor = ""`;
}

export function changeBackgroundImage(data) {
    const entity_requirements = { name: TARGET, sub_entity: { name: TARGET_IMAGE } };
    const entities = data["entities"][TARGET_TARGET];
    const entity_check = checkAndGetEntities(entities, entity_requirements);
    if (!entity_check["check"]) {
        return entity_check["code"];
    }
    const image_term = entity_check["entity_details"][TARGET_IMAGE]["value"];
    const image = getImage(image_term);
    const image_url = image["link"];
    return `document.body.style.backgroundImage = "url('${image_url}')"`;
}

export function resetBackgroundImage(data) {
    return `document.body.style.backgroundImage = ""`;
}

export function resetBackground(data) {
    return `document.body.style.background = ""`;
}

const example = {
    text: "change background to blue",
    intents: [{ id: "976245286168170", name: "update_background", confidence: 0.9998 }],
    entities: {
        "target:target": [
            {
                id: "891957377944518",
                name: "target",
                role: "target",
                start: 18,
                end: 25,
                body: "to blue",
                confidence: 0.9946,
                entities: [
                    {
                        id: "2761741540726975",
                        name: "target_colour",
                        role: "target_colour",
                        start: 3,
                        end: 7,
                        body: "blue",
                        confidence: 0.9947,
                        entities: [],
                        value: "blue",
                        type: "value"
                    }
                ],
                value: "to blue",
                type: "value"
            }
        ],
        "action:action": [
            {
                id: "302896127382838",
                name: "action",
                role: "action",
                start: 0,
                end: 17,
                body: "change background",
                confidence: 0.995,
                entities: [
                    {
                        id: "811559899249930",
                        name: "target_element",
                        role: "target_element",
                        start: 7,
                        end: 17,
                        body: "background",
                        confidence: 0.9923,
                        entities: [],
                        value: "background",
                        type: "value"
                    }
                ],
                value: "Change background",
                type: "value"
            }
        ]
    },
    traits: {}
};
