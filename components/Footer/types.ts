import { GetFooterQuery } from "generated/graphql";

export type FooterProps = GetFooterQuery["footer"]

export interface FooterContentItemProps {
  title: string;
}
