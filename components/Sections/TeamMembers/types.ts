import { SectionProps } from "components/Sections/Section/types";

export interface Member {
  id: number;
  name: string;
  photoUrl: string;
}

export interface TeamMembersSectionContentProps extends Partial<SectionProps> {
  members?: Member[];
}
