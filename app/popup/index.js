import $ from "jquery";
import { addBackgroundButton, addRandomTestButton } from "./test_functions";
import { witSendMessage } from "./wit";

("use strict");
console.log("THIS IS THE POPUP");

function addTestButtons() {
    const $test_button_container = $("#test-buttons");
    addRandomTestButton($test_button_container, "Change background to #17bebb");
    addRandomTestButton($test_button_container, "background #016997");
    addRandomTestButton($test_button_container, "make background to lightslategrey");
    addRandomTestButton($test_button_container, "make the fucking background blue");
    $test_button_container.find("button").on("click", (e) => {
        const btn_val = $(e.target).val();
        witSendMessage(btn_val);
    });
}

$(document).ready(() => {
    addTestButtons();
});
