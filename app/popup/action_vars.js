import { changeBackgroundColour, changeBackgroundImage, resetBackgroundColour } from "./actions";

export const UPDATE_BACKGROUND_COLOUR = "update_background_colour";
export const RESET_BACKGROUND_COLOUR = "reset_background_colour";
export const UPDATE_BACKGROUND_IMAGE = "update_background_image";
export const RESET_BACKGROUND_IMAGE = "reset_background_image";

export const ACTIONS = [
    UPDATE_BACKGROUND_COLOUR,
    RESET_BACKGROUND_COLOUR,
    UPDATE_BACKGROUND_IMAGE,
    RESET_BACKGROUND_IMAGE
];

export const ACTION_FUNCTIONS = {
    [UPDATE_BACKGROUND_COLOUR]: changeBackgroundColour,
    [RESET_BACKGROUND_COLOUR]: resetBackgroundColour,
    [UPDATE_BACKGROUND_IMAGE]: changeBackgroundImage
};
