import { parseISO, format } from "date-fns";

import { FormattedAction } from "components/Slider/ActionsSlider/types";
import { Actions } from "generated/graphql";

const formatActions = (actions: Partial<Actions>[]): FormattedAction[] => (
  actions.map(action => ({
    ...action,
    formattedDate: format(parseISO(action.date), "dd'-'MM'-'yyyy"),
  }))
);

export default formatActions;
