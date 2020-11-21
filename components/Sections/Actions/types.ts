import { GetMainPageSectionQuery } from "generated/graphql";

export type ActionsSectionProps = GetMainPageSectionQuery["actionsSection"];

export interface ActionsSliderContainerProps {
  title: string;
  actions: ActionsSectionProps["actions"];
  actionButtonText: ActionsSectionProps["actionButtonText"];
  shouldShowNoActionsMessage?: boolean;
}
