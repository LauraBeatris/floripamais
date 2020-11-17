import { Achievements, GetMainPageSectionQuery } from "generated/graphql";

export type AchievementItemProps = Pick<Achievements, "value" | "label">;

export type AchievementsSectionProps = GetMainPageSectionQuery["achievementsSection"]
