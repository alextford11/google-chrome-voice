import $ from "jquery";
import { executeRequest } from "./execute";
const { Wit, log } = require("node-wit");

const AUTH_CLIENT_TOKEN = "Bearer JTVPV6GG7KI2XGIYCH4RKUMTN3LUBVDU";

// const client = new Wit({
//     headers: {Authorization: AUTH_CLIENT_TOKEN},
//     logger: new log.Logger(log.DEBUG)
// });

export function witSendMessage(message) {
    // client
    //     .message(message)
    //     .then((data) => {
    //         executeRequest(data);
    //     })
    //     .catch(console.error);
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

export function objectBool(obj) {
    return !!Object.entries(obj).length;
}
