import {
    changeBackgroundColour,
    changeBackgroundImage,
    resetBackgroundColour,
    resetBackgroundImage,
    resetBackground,
    openNewTab, closeCurrentTab
} from "./actions";

// BACKGROUNDS
export const UPDATE_BACKGROUND_COLOUR = "update_background_colour";
export const RESET_BACKGROUND_COLOUR = "reset_background_colour";
export const UPDATE_BACKGROUND_IMAGE = "update_background_image";
export const RESET_BACKGROUND_IMAGE = "reset_background_image";
export const RESET_BACKGROUND = "reset_background";

// CHROME FUNCTIONS
export const OPEN_NEW_TAB = "open_new_tab";
export const CLOSE_CURRENT_TAB = "close_current_tab";

export const ACTIONS = [
    UPDATE_BACKGROUND_COLOUR,
    RESET_BACKGROUND_COLOUR,
    UPDATE_BACKGROUND_IMAGE,
    RESET_BACKGROUND_IMAGE,
    RESET_BACKGROUND,

    OPEN_NEW_TAB,
    CLOSE_CURRENT_TAB
];

export const ACTION_FUNCTIONS = {
    [UPDATE_BACKGROUND_COLOUR]: changeBackgroundColour,
    [RESET_BACKGROUND_COLOUR]: resetBackgroundColour,
    [UPDATE_BACKGROUND_IMAGE]: changeBackgroundImage,
    [RESET_BACKGROUND_IMAGE]: resetBackgroundImage,
    [RESET_BACKGROUND]: resetBackground,

    [OPEN_NEW_TAB]: openNewTab,
    [CLOSE_CURRENT_TAB]: closeCurrentTab
};
