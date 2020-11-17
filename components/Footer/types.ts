import { GetMainPageSectionQuery } from "generated/graphql";

export type FooterProps = GetMainPageSectionQuery["footer"]

export interface FooterContentItemProps {
  title: string;
}
