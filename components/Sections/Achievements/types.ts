import { Achievements, GetAchievementsSectionQuery } from "generated/graphql";

export type AchievementItemProps = Pick<Achievements, "value" | "label">;

export type AchievementsSectionProps = GetAchievementsSectionQuery["achievementsSection"]
