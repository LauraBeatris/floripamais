import { Actions } from "generated/graphql";

export interface FormattedAction extends Partial<Actions> {
  formattedDate: string;
}

export interface ActionsSliderProps {
  buttonText: string;
  formattedActions: FormattedAction[];
}

