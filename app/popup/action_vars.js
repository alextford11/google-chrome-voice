import { changeBackgroundColour, resetBackgroundColour } from "./actions";

export const UPDATE_BACKGROUND = "update_background";
export const RESET_BACKGROUND = "reset_background";

export const ACTIONS = [UPDATE_BACKGROUND, RESET_BACKGROUND];

export const ACTION_FUNCTIONS = {
    [UPDATE_BACKGROUND]: changeBackgroundColour,
    [RESET_BACKGROUND]: resetBackgroundColour
};
