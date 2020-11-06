import { format } from "date-fns";

import { FormattedAction } from "components/Slider/ActionsSlider/types";

import { Action } from "./types";

const formatActions = (actions: Action[]): FormattedAction[] => (
  actions.map(action => ({
    ...action,
    formattedDate: format(action.date, "dd'-'MM'-'yyyy"),
  }))
);

export default formatActions;
