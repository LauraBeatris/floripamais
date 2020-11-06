import { Action } from "components/Sections/Actions/types";

export interface FormattedAction extends Action {
  formattedDate: string;
}

export interface ActionsSliderProps {
  buttonText: string;
  formattedActions: FormattedAction[];
}
