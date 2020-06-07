import $ from "jquery";
import { executeRequest } from "./execute";
import { noTargetFound } from "./actions";
const { Wit, log } = require("node-wit");

const AUTH_CLIENT_TOKEN = "Bearer JTVPV6GG7KI2XGIYCH4RKUMTN3LUBVDU";

export function witSendMessage(message) {
    const q = encodeURIComponent(message);
    const uri = "https://api.wit.ai/message?q=" + q;
    fetch(uri, { headers: { Authorization: AUTH_CLIENT_TOKEN } })
        .then((response) => response.json())
        .then((data) => executeRequest(data))
        .catch(console.error);
}

export function getMostConfidentFromArray(array) {
    let most_confident_obj = {};
    $.each(array, (index, obj) => {
        if (
            !Object.entries(most_confident_obj).length ||
            most_confident_obj["confidence"] < obj["confidence"]
        ) {
            most_confident_obj = obj;
        }
    });
    return most_confident_obj;
}

export function _getEntityWithName(entities, name) {
    let entity_to_return = {};
    $.each(entities, (index, entity) => {
        if (entity["name"] === name) {
            entity_to_return = entity;
            return false;
        }
    });
    return entity_to_return;
}

export function checkAndGetEntities(entities, entity_requirements) {
    let entity_details = {};
    let entity_to_check = entity_requirements;
    let check_complete = false;
    const error_code = noTargetFound("I wasn't sure about what you said there, please try again.");
    while (!check_complete) {
        const req_name = entity_to_check["name"];
        const entity = _getEntityWithName(entities, req_name);
        if (!entity) {
            return { check: false, code: error_code };
        }
        if (!entity["confidence"] >= 0.85) {
            return { check: false, code: error_code };
        }
        entity_details[req_name] = entity;
        if (entity_to_check.hasOwnProperty("sub_entity")) {
            entities = entity["entities"];
            entity_to_check = entity_to_check["sub_entity"];
        } else {
            check_complete = true;
        }
    }
    return { check: true, entity_details: entity_details };
}
