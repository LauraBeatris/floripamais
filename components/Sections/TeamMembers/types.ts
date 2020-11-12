import { SectionProps } from "components/Sections/Section/types";

export interface TeamMember {
  id: number;
  name: string;
  photoUrl: string;
}

export interface TeamMembersSectionContentProps extends Partial<SectionProps> {
  members?: TeamMember[];
}
