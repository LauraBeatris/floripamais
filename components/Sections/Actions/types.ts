import { SectionProps } from "components/Sections/Section/types";

export interface ActionsSectionContentProps extends Partial<SectionProps> {
  noActionsFoundText?: string;
  nextActionsSubtitle?: string;
  previousActionsSubtitle?: string;
}
