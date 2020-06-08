import $ from "jquery";
import { addBackgroundButton, addRandomTestButton } from "./test_functions";
import { witSendMessage } from "./wit";

("use strict");

function addTestButtons() {
    const $test_button_container = $("#test-buttons");
    addRandomTestButton($test_button_container, "Change background to #17bebb");
    addRandomTestButton($test_button_container, "Reset background colour");
    addRandomTestButton($test_button_container, "Change background to an image of a dog");
    $test_button_container.find("button").on("click", (e) => {
        const btn_val = $(e.target).val();
        witSendMessage(btn_val);
    });
}

$(document).ready(() => {
    addTestButtons();
});
