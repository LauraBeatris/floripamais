import { GetActionsSectionQuery } from "generated/graphql";

export type ActionsSectionProps = GetActionsSectionQuery["actionsSection"];

export interface ActionsSectionSliderContainerProps {
  actions: ActionsSectionProps["nextActions"] | ActionsSectionProps["previousActions"];
  subtitle: ActionsSectionProps["nextActionsSubtitle"] | ActionsSectionProps["previousActionsSubtitle"];
  actionButtonText: ActionsSectionProps["actionButtonText"];
}
