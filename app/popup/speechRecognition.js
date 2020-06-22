import $ from "jquery";

$(document).ready(() => {
    const SpeechRecognition = webkitSpeechRecognition;
    const SpeechRecognitionEvent = webkitSpeechRecognitionEvent;

    const recognition = new SpeechRecognition();
    recognition.continuous = false;
    recognition.lang = "en-GB";
    recognition.interimResults = false;
    recognition.maxAlternatives = 1;

    const $start_speech = $("#start-speech");
    $start_speech.click(() => {
        console.log("osgn");
        recognition.start();
        console.log("Started speech...");
    });

    recognition.onspeechend = () => {
        recognition.stop();
    };

    recognition.onresult = (event) => {
        console.log(event);
    };

    recognition.onnomatch = () => {
        console.log("I didn't understand that, please try again");
    };

    recognition.onerror = (event) => {
        console.log("Error occurred in recognition: " + event.error);
    };
});
