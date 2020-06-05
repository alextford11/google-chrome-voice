import $ from "jquery";
import { addBackgroundButton, addRandomTestButton } from "./test_functions";
import { witSendMessage } from "./wit";

("use strict");
console.log("THIS IS THE POPUP");

function addTestButtons() {
    const $test_button_container = $("#test-buttons");
    addBackgroundButton($test_button_container);
    addBackgroundButton($test_button_container);
    addBackgroundButton($test_button_container);
    addRandomTestButton($test_button_container, "Change background to #000");
    $test_button_container.find("button").on("click", (e) => {
        const btn_val = $(e.target).val();
        witSendMessage(btn_val);
    });
}

$(document).ready(() => {
    addTestButtons();
});
