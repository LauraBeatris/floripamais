import { SectionProps } from "components/Sections/Section/types";

export interface Member {
  id: number;
  name: string;
  photoUrl: string;
}

export interface TeamSectionContentProps extends Partial<SectionProps> {
  members?: Member[];
}
