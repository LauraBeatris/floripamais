import { SectionProps } from "components/Sections/Section/types";

export interface Action {
  id: number;
  name: string;
  date: Date;
  touchableHref: string;
  description: string;
}

export interface ActionsSectionContentProps extends Partial<SectionProps> {
  nextActions?: Action[];
  previousActions?: Action[];
  actionButtonText?: string;
  noActionsFoundText?: string;
  nextActionsSubtitle?: string;
  previousActionsSubtitle?: string;
}

export interface ActionsSectionSliderContainerProps {
  actions: Action[];
  subtitle: string;
  actionButtonText: ActionsSectionContentProps["actionButtonText"];
}
