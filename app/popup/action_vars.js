import { changeBackgroundColour } from "./actions";

export const UPDATE_BACKGROUND = "update_background";

export const ACTIONS = [UPDATE_BACKGROUND];

export const ACTION_FUNCTIONS = { [UPDATE_BACKGROUND]: changeBackgroundColour };
