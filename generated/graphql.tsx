export type Maybe<T> = T;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: any;
  /** A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the `date-time` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  DateTime: any;
  /** A time string with format: HH:mm:ss.SSS */
  Time: any;
  /** A date string, such as 2007-12-03, compliant with the `full-date` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  Date: any;
  /** The `Long` scalar type represents 52-bit integers */
  Long: any;
  /** The `Upload` scalar type represents a file upload. */
  Upload: any;
};

export type FileInfoInput = {
  name: Maybe<Scalars['String']>;
  alternativeText: Maybe<Scalars['String']>;
  caption: Maybe<Scalars['String']>;
};

export type UsersPermissionsMe = {
  __typename?: 'UsersPermissionsMe';
  id: Scalars['ID'];
  username: Scalars['String'];
  email: Scalars['String'];
  confirmed: Maybe<Scalars['Boolean']>;
  blocked: Maybe<Scalars['Boolean']>;
  role: Maybe<UsersPermissionsMeRole>;
};

export type UsersPermissionsMeRole = {
  __typename?: 'UsersPermissionsMeRole';
  id: Scalars['ID'];
  name: Scalars['String'];
  description: Maybe<Scalars['String']>;
  type: Maybe<Scalars['String']>;
};

export type UsersPermissionsRegisterInput = {
  username: Scalars['String'];
  email: Scalars['String'];
  password: Scalars['String'];
};

export type UsersPermissionsLoginInput = {
  identifier: Scalars['String'];
  password: Scalars['String'];
  provider: Maybe<Scalars['String']>;
};

export type UsersPermissionsLoginPayload = {
  __typename?: 'UsersPermissionsLoginPayload';
  jwt: Maybe<Scalars['String']>;
  user: UsersPermissionsMe;
};

export type UserPermissionsPasswordPayload = {
  __typename?: 'UserPermissionsPasswordPayload';
  ok: Scalars['Boolean'];
};

export type AchievementsSection = {
  __typename?: 'AchievementsSection';
  id: Scalars['ID'];
  created_at: Scalars['DateTime'];
  updated_at: Scalars['DateTime'];
  title: Scalars['String'];
  published_at: Maybe<Scalars['DateTime']>;
  achievements: Maybe<Array<Maybe<Achievements>>>;
};


export type AchievementsSectionAchievementsArgs = {
  sort: Maybe<Scalars['String']>;
  limit: Maybe<Scalars['Int']>;
  start: Maybe<Scalars['Int']>;
  where: Maybe<Scalars['JSON']>;
};

export type AchievementsSectionInput = {
  title: Scalars['String'];
  achievements: Maybe<Array<Maybe<Scalars['ID']>>>;
  published_at: Maybe<Scalars['DateTime']>;
  created_by: Maybe<Scalars['ID']>;
  updated_by: Maybe<Scalars['ID']>;
};

export type EditAchievementsSectionInput = {
  title: Maybe<Scalars['String']>;
  achievements: Maybe<Array<Maybe<Scalars['ID']>>>;
  published_at: Maybe<Scalars['DateTime']>;
  created_by: Maybe<Scalars['ID']>;
  updated_by: Maybe<Scalars['ID']>;
};

export type UpdateAchievementsSectionInput = {
  data: Maybe<EditAchievementsSectionInput>;
};

export type UpdateAchievementsSectionPayload = {
  __typename?: 'updateAchievementsSectionPayload';
  achievementsSection: Maybe<AchievementsSection>;
};

export type DeleteAchievementsSectionPayload = {
  __typename?: 'deleteAchievementsSectionPayload';
  achievementsSection: Maybe<AchievementsSection>;
};

export type Achievements = {
  __typename?: 'Achievements';
  id: Scalars['ID'];
  created_at: Scalars['DateTime'];
  updated_at: Scalars['DateTime'];
  label: Scalars['String'];
  value: Scalars['Int'];
  published_at: Maybe<Scalars['DateTime']>;
};

export type AchievementsConnection = {
  __typename?: 'AchievementsConnection';
  values: Maybe<Array<Maybe<Achievements>>>;
  groupBy: Maybe<AchievementsGroupBy>;
  aggregate: Maybe<AchievementsAggregator>;
};

export type AchievementsAggregator = {
  __typename?: 'AchievementsAggregator';
  count: Maybe<Scalars['Int']>;
  totalCount: Maybe<Scalars['Int']>;
  sum: Maybe<AchievementsAggregatorSum>;
  avg: Maybe<AchievementsAggregatorAvg>;
  min: Maybe<AchievementsAggregatorMin>;
  max: Maybe<AchievementsAggregatorMax>;
};

export type AchievementsAggregatorSum = {
  __typename?: 'AchievementsAggregatorSum';
  value: Maybe<Scalars['Float']>;
};

export type AchievementsAggregatorAvg = {
  __typename?: 'AchievementsAggregatorAvg';
  value: Maybe<Scalars['Float']>;
};

export type AchievementsAggregatorMin = {
  __typename?: 'AchievementsAggregatorMin';
  value: Maybe<Scalars['Float']>;
};

export type AchievementsAggregatorMax = {
  __typename?: 'AchievementsAggregatorMax';
  value: Maybe<Scalars['Float']>;
};

export type AchievementsGroupBy = {
  __typename?: 'AchievementsGroupBy';
  id: Maybe<Array<Maybe<AchievementsConnectionId>>>;
  created_at: Maybe<Array<Maybe<AchievementsConnectionCreated_At>>>;
  updated_at: Maybe<Array<Maybe<AchievementsConnectionUpdated_At>>>;
  label: Maybe<Array<Maybe<AchievementsConnectionLabel>>>;
  value: Maybe<Array<Maybe<AchievementsConnectionValue>>>;
  published_at: Maybe<Array<Maybe<AchievementsConnectionPublished_At>>>;
};

export type AchievementsConnectionId = {
  __typename?: 'AchievementsConnectionId';
  key: Maybe<Scalars['ID']>;
  connection: Maybe<AchievementsConnection>;
};

export type AchievementsConnectionCreated_At = {
  __typename?: 'AchievementsConnectionCreated_at';
  key: Maybe<Scalars['DateTime']>;
  connection: Maybe<AchievementsConnection>;
};

export type AchievementsConnectionUpdated_At = {
  __typename?: 'AchievementsConnectionUpdated_at';
  key: Maybe<Scalars['DateTime']>;
  connection: Maybe<AchievementsConnection>;
};

export type AchievementsConnectionLabel = {
  __typename?: 'AchievementsConnectionLabel';
  key: Maybe<Scalars['String']>;
  connection: Maybe<AchievementsConnection>;
};

export type AchievementsConnectionValue = {
  __typename?: 'AchievementsConnectionValue';
  key: Maybe<Scalars['Int']>;
  connection: Maybe<AchievementsConnection>;
};

export type AchievementsConnectionPublished_At = {
  __typename?: 'AchievementsConnectionPublished_at';
  key: Maybe<Scalars['DateTime']>;
  connection: Maybe<AchievementsConnection>;
};

export type AchievementInput = {
  label: Scalars['String'];
  value: Scalars['Int'];
  published_at: Maybe<Scalars['DateTime']>;
  created_by: Maybe<Scalars['ID']>;
  updated_by: Maybe<Scalars['ID']>;
};

export type EditAchievementInput = {
  label: Maybe<Scalars['String']>;
  value: Maybe<Scalars['Int']>;
  published_at: Maybe<Scalars['DateTime']>;
  created_by: Maybe<Scalars['ID']>;
  updated_by: Maybe<Scalars['ID']>;
};

export type CreateAchievementInput = {
  data: Maybe<AchievementInput>;
};

export type CreateAchievementPayload = {
  __typename?: 'createAchievementPayload';
  achievement: Maybe<Achievements>;
};

export type UpdateAchievementInput = {
  where: Maybe<InputId>;
  data: Maybe<EditAchievementInput>;
};

export type UpdateAchievementPayload = {
  __typename?: 'updateAchievementPayload';
  achievement: Maybe<Achievements>;
};

export type DeleteAchievementInput = {
  where: Maybe<InputId>;
};

export type DeleteAchievementPayload = {
  __typename?: 'deleteAchievementPayload';
  achievement: Maybe<Achievements>;
};

export type ActionsSection = {
  __typename?: 'ActionsSection';
  id: Scalars['ID'];
  created_at: Scalars['DateTime'];
  updated_at: Scalars['DateTime'];
  title: Scalars['String'];
  text: Scalars['String'];
  actionButtonText: Scalars['String'];
  noActionsFoundText: Scalars['String'];
  nextActionsSubtitle: Maybe<Scalars['String']>;
  previousActionsSubtitle: Maybe<Scalars['String']>;
  published_at: Maybe<Scalars['DateTime']>;
  nextActions: Maybe<Array<Maybe<Actions>>>;
  previousActions: Maybe<Array<Maybe<Actions>>>;
};


export type ActionsSectionNextActionsArgs = {
  sort: Maybe<Scalars['String']>;
  limit: Maybe<Scalars['Int']>;
  start: Maybe<Scalars['Int']>;
  where: Maybe<Scalars['JSON']>;
};


export type ActionsSectionPreviousActionsArgs = {
  sort: Maybe<Scalars['String']>;
  limit: Maybe<Scalars['Int']>;
  start: Maybe<Scalars['Int']>;
  where: Maybe<Scalars['JSON']>;
};

export type ActionsSectionInput = {
  title: Scalars['String'];
  text: Scalars['String'];
  nextActions: Maybe<Array<Maybe<Scalars['ID']>>>;
  previousActions: Maybe<Array<Maybe<Scalars['ID']>>>;
  actionButtonText: Scalars['String'];
  noActionsFoundText: Scalars['String'];
  nextActionsSubtitle: Maybe<Scalars['String']>;
  previousActionsSubtitle: Maybe<Scalars['String']>;
  published_at: Maybe<Scalars['DateTime']>;
  created_by: Maybe<Scalars['ID']>;
  updated_by: Maybe<Scalars['ID']>;
};

export type EditActionsSectionInput = {
  title: Maybe<Scalars['String']>;
  text: Maybe<Scalars['String']>;
  nextActions: Maybe<Array<Maybe<Scalars['ID']>>>;
  previousActions: Maybe<Array<Maybe<Scalars['ID']>>>;
  actionButtonText: Maybe<Scalars['String']>;
  noActionsFoundText: Maybe<Scalars['String']>;
  nextActionsSubtitle: Maybe<Scalars['String']>;
  previousActionsSubtitle: Maybe<Scalars['String']>;
  published_at: Maybe<Scalars['DateTime']>;
  created_by: Maybe<Scalars['ID']>;
  updated_by: Maybe<Scalars['ID']>;
};

export type UpdateActionsSectionInput = {
  data: Maybe<EditActionsSectionInput>;
};

export type UpdateActionsSectionPayload = {
  __typename?: 'updateActionsSectionPayload';
  actionsSection: Maybe<ActionsSection>;
};

export type DeleteActionsSectionPayload = {
  __typename?: 'deleteActionsSectionPayload';
  actionsSection: Maybe<ActionsSection>;
};

export type Actions = {
  __typename?: 'Actions';
  id: Scalars['ID'];
  created_at: Scalars['DateTime'];
  updated_at: Scalars['DateTime'];
  name: Scalars['String'];
  date: Scalars['DateTime'];
  actionLink: Scalars['String'];
  description: Scalars['String'];
  published_at: Maybe<Scalars['DateTime']>;
};

export type ActionsConnection = {
  __typename?: 'ActionsConnection';
  values: Maybe<Array<Maybe<Actions>>>;
  groupBy: Maybe<ActionsGroupBy>;
  aggregate: Maybe<ActionsAggregator>;
};

export type ActionsAggregator = {
  __typename?: 'ActionsAggregator';
  count: Maybe<Scalars['Int']>;
  totalCount: Maybe<Scalars['Int']>;
};

export type ActionsGroupBy = {
  __typename?: 'ActionsGroupBy';
  id: Maybe<Array<Maybe<ActionsConnectionId>>>;
  created_at: Maybe<Array<Maybe<ActionsConnectionCreated_At>>>;
  updated_at: Maybe<Array<Maybe<ActionsConnectionUpdated_At>>>;
  name: Maybe<Array<Maybe<ActionsConnectionName>>>;
  date: Maybe<Array<Maybe<ActionsConnectionDate>>>;
  actionLink: Maybe<Array<Maybe<ActionsConnectionActionLink>>>;
  description: Maybe<Array<Maybe<ActionsConnectionDescription>>>;
  published_at: Maybe<Array<Maybe<ActionsConnectionPublished_At>>>;
};

export type ActionsConnectionId = {
  __typename?: 'ActionsConnectionId';
  key: Maybe<Scalars['ID']>;
  connection: Maybe<ActionsConnection>;
};

export type ActionsConnectionCreated_At = {
  __typename?: 'ActionsConnectionCreated_at';
  key: Maybe<Scalars['DateTime']>;
  connection: Maybe<ActionsConnection>;
};

export type ActionsConnectionUpdated_At = {
  __typename?: 'ActionsConnectionUpdated_at';
  key: Maybe<Scalars['DateTime']>;
  connection: Maybe<ActionsConnection>;
};

export type ActionsConnectionName = {
  __typename?: 'ActionsConnectionName';
  key: Maybe<Scalars['String']>;
  connection: Maybe<ActionsConnection>;
};

export type ActionsConnectionDate = {
  __typename?: 'ActionsConnectionDate';
  key: Maybe<Scalars['DateTime']>;
  connection: Maybe<ActionsConnection>;
};

export type ActionsConnectionActionLink = {
  __typename?: 'ActionsConnectionActionLink';
  key: Maybe<Scalars['String']>;
  connection: Maybe<ActionsConnection>;
};

export type ActionsConnectionDescription = {
  __typename?: 'ActionsConnectionDescription';
  key: Maybe<Scalars['String']>;
  connection: Maybe<ActionsConnection>;
};

export type ActionsConnectionPublished_At = {
  __typename?: 'ActionsConnectionPublished_at';
  key: Maybe<Scalars['DateTime']>;
  connection: Maybe<ActionsConnection>;
};

export type ActionInput = {
  name: Scalars['String'];
  date: Scalars['DateTime'];
  actionLink: Scalars['String'];
  description: Scalars['String'];
  published_at: Maybe<Scalars['DateTime']>;
  created_by: Maybe<Scalars['ID']>;
  updated_by: Maybe<Scalars['ID']>;
};

export type EditActionInput = {
  name: Maybe<Scalars['String']>;
  date: Maybe<Scalars['DateTime']>;
  actionLink: Maybe<Scalars['String']>;
  description: Maybe<Scalars['String']>;
  published_at: Maybe<Scalars['DateTime']>;
  created_by: Maybe<Scalars['ID']>;
  updated_by: Maybe<Scalars['ID']>;
};

export type CreateActionInput = {
  data: Maybe<ActionInput>;
};

export type CreateActionPayload = {
  __typename?: 'createActionPayload';
  action: Maybe<Actions>;
};

export type UpdateActionInput = {
  where: Maybe<InputId>;
  data: Maybe<EditActionInput>;
};

export type UpdateActionPayload = {
  __typename?: 'updateActionPayload';
  action: Maybe<Actions>;
};

export type DeleteActionInput = {
  where: Maybe<InputId>;
};

export type DeleteActionPayload = {
  __typename?: 'deleteActionPayload';
  action: Maybe<Actions>;
};

export type DonationsSection = {
  __typename?: 'DonationsSection';
  id: Scalars['ID'];
  created_at: Scalars['DateTime'];
  updated_at: Scalars['DateTime'];
  title: Scalars['String'];
  buttonText: Scalars['String'];
  text: Scalars['String'];
  sheetLink: Scalars['String'];
  emojiSymbol: Scalars['String'];
  published_at: Maybe<Scalars['DateTime']>;
};

export type DonationsSectionInput = {
  title: Scalars['String'];
  buttonText: Scalars['String'];
  text: Scalars['String'];
  sheetLink: Scalars['String'];
  emojiSymbol: Scalars['String'];
  published_at: Maybe<Scalars['DateTime']>;
  created_by: Maybe<Scalars['ID']>;
  updated_by: Maybe<Scalars['ID']>;
};

export type EditDonationsSectionInput = {
  title: Maybe<Scalars['String']>;
  buttonText: Maybe<Scalars['String']>;
  text: Maybe<Scalars['String']>;
  sheetLink: Maybe<Scalars['String']>;
  emojiSymbol: Maybe<Scalars['String']>;
  published_at: Maybe<Scalars['DateTime']>;
  created_by: Maybe<Scalars['ID']>;
  updated_by: Maybe<Scalars['ID']>;
};

export type UpdateDonationsSectionInput = {
  data: Maybe<EditDonationsSectionInput>;
};

export type UpdateDonationsSectionPayload = {
  __typename?: 'updateDonationsSectionPayload';
  donationsSection: Maybe<DonationsSection>;
};

export type DeleteDonationsSectionPayload = {
  __typename?: 'deleteDonationsSectionPayload';
  donationsSection: Maybe<DonationsSection>;
};

export type Footer = {
  __typename?: 'Footer';
  id: Scalars['ID'];
  created_at: Scalars['DateTime'];
  updated_at: Scalars['DateTime'];
  socialMediasTitle: Scalars['String'];
  contactEmailTitle: Scalars['String'];
  contactEmail: Scalars['String'];
  published_at: Maybe<Scalars['DateTime']>;
  socialMedias: Maybe<Array<Maybe<SocialMedias>>>;
};


export type FooterSocialMediasArgs = {
  sort: Maybe<Scalars['String']>;
  limit: Maybe<Scalars['Int']>;
  start: Maybe<Scalars['Int']>;
  where: Maybe<Scalars['JSON']>;
};

export type FooterInput = {
  socialMediasTitle: Scalars['String'];
  contactEmailTitle: Scalars['String'];
  contactEmail: Scalars['String'];
  socialMedias: Maybe<Array<Maybe<Scalars['ID']>>>;
  published_at: Maybe<Scalars['DateTime']>;
  created_by: Maybe<Scalars['ID']>;
  updated_by: Maybe<Scalars['ID']>;
};

export type EditFooterInput = {
  socialMediasTitle: Maybe<Scalars['String']>;
  contactEmailTitle: Maybe<Scalars['String']>;
  contactEmail: Maybe<Scalars['String']>;
  socialMedias: Maybe<Array<Maybe<Scalars['ID']>>>;
  published_at: Maybe<Scalars['DateTime']>;
  created_by: Maybe<Scalars['ID']>;
  updated_by: Maybe<Scalars['ID']>;
};

export type UpdateFooterInput = {
  data: Maybe<EditFooterInput>;
};

export type UpdateFooterPayload = {
  __typename?: 'updateFooterPayload';
  footer: Maybe<Footer>;
};

export type DeleteFooterPayload = {
  __typename?: 'deleteFooterPayload';
  footer: Maybe<Footer>;
};

export type IntroductionSection = {
  __typename?: 'IntroductionSection';
  id: Scalars['ID'];
  created_at: Scalars['DateTime'];
  updated_at: Scalars['DateTime'];
  title: Scalars['String'];
  buttonText: Scalars['String'];
  backgroundImageLink: Scalars['String'];
  published_at: Maybe<Scalars['DateTime']>;
};

export type IntroductionSectionInput = {
  title: Scalars['String'];
  buttonText: Scalars['String'];
  backgroundImageLink: Scalars['String'];
  published_at: Maybe<Scalars['DateTime']>;
  created_by: Maybe<Scalars['ID']>;
  updated_by: Maybe<Scalars['ID']>;
};

export type EditIntroductionSectionInput = {
  title: Maybe<Scalars['String']>;
  buttonText: Maybe<Scalars['String']>;
  backgroundImageLink: Maybe<Scalars['String']>;
  published_at: Maybe<Scalars['DateTime']>;
  created_by: Maybe<Scalars['ID']>;
  updated_by: Maybe<Scalars['ID']>;
};

export type UpdateIntroductionSectionInput = {
  data: Maybe<EditIntroductionSectionInput>;
};

export type UpdateIntroductionSectionPayload = {
  __typename?: 'updateIntroductionSectionPayload';
  introductionSection: Maybe<IntroductionSection>;
};

export type DeleteIntroductionSectionPayload = {
  __typename?: 'deleteIntroductionSectionPayload';
  introductionSection: Maybe<IntroductionSection>;
};

export type OrgInfo = {
  __typename?: 'OrgInfo';
  id: Scalars['ID'];
  created_at: Scalars['DateTime'];
  updated_at: Scalars['DateTime'];
  title: Scalars['String'];
  text: Scalars['String'];
  emojiSymbol: Scalars['String'];
  published_at: Maybe<Scalars['DateTime']>;
};

export type OrgInfoConnection = {
  __typename?: 'OrgInfoConnection';
  values: Maybe<Array<Maybe<OrgInfo>>>;
  groupBy: Maybe<OrgInfoGroupBy>;
  aggregate: Maybe<OrgInfoAggregator>;
};

export type OrgInfoAggregator = {
  __typename?: 'OrgInfoAggregator';
  count: Maybe<Scalars['Int']>;
  totalCount: Maybe<Scalars['Int']>;
};

export type OrgInfoGroupBy = {
  __typename?: 'OrgInfoGroupBy';
  id: Maybe<Array<Maybe<OrgInfoConnectionId>>>;
  created_at: Maybe<Array<Maybe<OrgInfoConnectionCreated_At>>>;
  updated_at: Maybe<Array<Maybe<OrgInfoConnectionUpdated_At>>>;
  title: Maybe<Array<Maybe<OrgInfoConnectionTitle>>>;
  text: Maybe<Array<Maybe<OrgInfoConnectionText>>>;
  emojiSymbol: Maybe<Array<Maybe<OrgInfoConnectionEmojiSymbol>>>;
  published_at: Maybe<Array<Maybe<OrgInfoConnectionPublished_At>>>;
};

export type OrgInfoConnectionId = {
  __typename?: 'OrgInfoConnectionId';
  key: Maybe<Scalars['ID']>;
  connection: Maybe<OrgInfoConnection>;
};

export type OrgInfoConnectionCreated_At = {
  __typename?: 'OrgInfoConnectionCreated_at';
  key: Maybe<Scalars['DateTime']>;
  connection: Maybe<OrgInfoConnection>;
};

export type OrgInfoConnectionUpdated_At = {
  __typename?: 'OrgInfoConnectionUpdated_at';
  key: Maybe<Scalars['DateTime']>;
  connection: Maybe<OrgInfoConnection>;
};

export type OrgInfoConnectionTitle = {
  __typename?: 'OrgInfoConnectionTitle';
  key: Maybe<Scalars['String']>;
  connection: Maybe<OrgInfoConnection>;
};

export type OrgInfoConnectionText = {
  __typename?: 'OrgInfoConnectionText';
  key: Maybe<Scalars['String']>;
  connection: Maybe<OrgInfoConnection>;
};

export type OrgInfoConnectionEmojiSymbol = {
  __typename?: 'OrgInfoConnectionEmojiSymbol';
  key: Maybe<Scalars['String']>;
  connection: Maybe<OrgInfoConnection>;
};

export type OrgInfoConnectionPublished_At = {
  __typename?: 'OrgInfoConnectionPublished_at';
  key: Maybe<Scalars['DateTime']>;
  connection: Maybe<OrgInfoConnection>;
};

export type OrgInfoInput = {
  title: Scalars['String'];
  text: Scalars['String'];
  emojiSymbol: Scalars['String'];
  published_at: Maybe<Scalars['DateTime']>;
  created_by: Maybe<Scalars['ID']>;
  updated_by: Maybe<Scalars['ID']>;
};

export type EditOrgInfoInput = {
  title: Maybe<Scalars['String']>;
  text: Maybe<Scalars['String']>;
  emojiSymbol: Maybe<Scalars['String']>;
  published_at: Maybe<Scalars['DateTime']>;
  created_by: Maybe<Scalars['ID']>;
  updated_by: Maybe<Scalars['ID']>;
};

export type CreateOrgInfoInput = {
  data: Maybe<OrgInfoInput>;
};

export type CreateOrgInfoPayload = {
  __typename?: 'createOrgInfoPayload';
  orgInfo: Maybe<OrgInfo>;
};

export type UpdateOrgInfoInput = {
  where: Maybe<InputId>;
  data: Maybe<EditOrgInfoInput>;
};

export type UpdateOrgInfoPayload = {
  __typename?: 'updateOrgInfoPayload';
  orgInfo: Maybe<OrgInfo>;
};

export type DeleteOrgInfoInput = {
  where: Maybe<InputId>;
};

export type DeleteOrgInfoPayload = {
  __typename?: 'deleteOrgInfoPayload';
  orgInfo: Maybe<OrgInfo>;
};

export type SocialMedias = {
  __typename?: 'SocialMedias';
  id: Scalars['ID'];
  created_at: Scalars['DateTime'];
  updated_at: Scalars['DateTime'];
  href: Scalars['String'];
  label: Scalars['String'];
  published_at: Maybe<Scalars['DateTime']>;
};

export type SocialMediasConnection = {
  __typename?: 'SocialMediasConnection';
  values: Maybe<Array<Maybe<SocialMedias>>>;
  groupBy: Maybe<SocialMediasGroupBy>;
  aggregate: Maybe<SocialMediasAggregator>;
};

export type SocialMediasAggregator = {
  __typename?: 'SocialMediasAggregator';
  count: Maybe<Scalars['Int']>;
  totalCount: Maybe<Scalars['Int']>;
};

export type SocialMediasGroupBy = {
  __typename?: 'SocialMediasGroupBy';
  id: Maybe<Array<Maybe<SocialMediasConnectionId>>>;
  created_at: Maybe<Array<Maybe<SocialMediasConnectionCreated_At>>>;
  updated_at: Maybe<Array<Maybe<SocialMediasConnectionUpdated_At>>>;
  href: Maybe<Array<Maybe<SocialMediasConnectionHref>>>;
  label: Maybe<Array<Maybe<SocialMediasConnectionLabel>>>;
  published_at: Maybe<Array<Maybe<SocialMediasConnectionPublished_At>>>;
};

export type SocialMediasConnectionId = {
  __typename?: 'SocialMediasConnectionId';
  key: Maybe<Scalars['ID']>;
  connection: Maybe<SocialMediasConnection>;
};

export type SocialMediasConnectionCreated_At = {
  __typename?: 'SocialMediasConnectionCreated_at';
  key: Maybe<Scalars['DateTime']>;
  connection: Maybe<SocialMediasConnection>;
};

export type SocialMediasConnectionUpdated_At = {
  __typename?: 'SocialMediasConnectionUpdated_at';
  key: Maybe<Scalars['DateTime']>;
  connection: Maybe<SocialMediasConnection>;
};

export type SocialMediasConnectionHref = {
  __typename?: 'SocialMediasConnectionHref';
  key: Maybe<Scalars['String']>;
  connection: Maybe<SocialMediasConnection>;
};

export type SocialMediasConnectionLabel = {
  __typename?: 'SocialMediasConnectionLabel';
  key: Maybe<Scalars['String']>;
  connection: Maybe<SocialMediasConnection>;
};

export type SocialMediasConnectionPublished_At = {
  __typename?: 'SocialMediasConnectionPublished_at';
  key: Maybe<Scalars['DateTime']>;
  connection: Maybe<SocialMediasConnection>;
};

export type SocialMediaInput = {
  href: Scalars['String'];
  label: Scalars['String'];
  published_at: Maybe<Scalars['DateTime']>;
  created_by: Maybe<Scalars['ID']>;
  updated_by: Maybe<Scalars['ID']>;
};

export type EditSocialMediaInput = {
  href: Maybe<Scalars['String']>;
  label: Maybe<Scalars['String']>;
  published_at: Maybe<Scalars['DateTime']>;
  created_by: Maybe<Scalars['ID']>;
  updated_by: Maybe<Scalars['ID']>;
};

export type CreateSocialMediaInput = {
  data: Maybe<SocialMediaInput>;
};

export type CreateSocialMediaPayload = {
  __typename?: 'createSocialMediaPayload';
  socialMedia: Maybe<SocialMedias>;
};

export type UpdateSocialMediaInput = {
  where: Maybe<InputId>;
  data: Maybe<EditSocialMediaInput>;
};

export type UpdateSocialMediaPayload = {
  __typename?: 'updateSocialMediaPayload';
  socialMedia: Maybe<SocialMedias>;
};

export type DeleteSocialMediaInput = {
  where: Maybe<InputId>;
};

export type DeleteSocialMediaPayload = {
  __typename?: 'deleteSocialMediaPayload';
  socialMedia: Maybe<SocialMedias>;
};

export type TeamMember = {
  __typename?: 'TeamMember';
  id: Scalars['ID'];
  created_at: Scalars['DateTime'];
  updated_at: Scalars['DateTime'];
  name: Scalars['String'];
  photoUrl: Scalars['String'];
  published_at: Maybe<Scalars['DateTime']>;
};

export type TeamMemberConnection = {
  __typename?: 'TeamMemberConnection';
  values: Maybe<Array<Maybe<TeamMember>>>;
  groupBy: Maybe<TeamMemberGroupBy>;
  aggregate: Maybe<TeamMemberAggregator>;
};

export type TeamMemberAggregator = {
  __typename?: 'TeamMemberAggregator';
  count: Maybe<Scalars['Int']>;
  totalCount: Maybe<Scalars['Int']>;
};

export type TeamMemberGroupBy = {
  __typename?: 'TeamMemberGroupBy';
  id: Maybe<Array<Maybe<TeamMemberConnectionId>>>;
  created_at: Maybe<Array<Maybe<TeamMemberConnectionCreated_At>>>;
  updated_at: Maybe<Array<Maybe<TeamMemberConnectionUpdated_At>>>;
  name: Maybe<Array<Maybe<TeamMemberConnectionName>>>;
  photoUrl: Maybe<Array<Maybe<TeamMemberConnectionPhotoUrl>>>;
  published_at: Maybe<Array<Maybe<TeamMemberConnectionPublished_At>>>;
};

export type TeamMemberConnectionId = {
  __typename?: 'TeamMemberConnectionId';
  key: Maybe<Scalars['ID']>;
  connection: Maybe<TeamMemberConnection>;
};

export type TeamMemberConnectionCreated_At = {
  __typename?: 'TeamMemberConnectionCreated_at';
  key: Maybe<Scalars['DateTime']>;
  connection: Maybe<TeamMemberConnection>;
};

export type TeamMemberConnectionUpdated_At = {
  __typename?: 'TeamMemberConnectionUpdated_at';
  key: Maybe<Scalars['DateTime']>;
  connection: Maybe<TeamMemberConnection>;
};

export type TeamMemberConnectionName = {
  __typename?: 'TeamMemberConnectionName';
  key: Maybe<Scalars['String']>;
  connection: Maybe<TeamMemberConnection>;
};

export type TeamMemberConnectionPhotoUrl = {
  __typename?: 'TeamMemberConnectionPhotoUrl';
  key: Maybe<Scalars['String']>;
  connection: Maybe<TeamMemberConnection>;
};

export type TeamMemberConnectionPublished_At = {
  __typename?: 'TeamMemberConnectionPublished_at';
  key: Maybe<Scalars['DateTime']>;
  connection: Maybe<TeamMemberConnection>;
};

export type TeamMemberInput = {
  name: Scalars['String'];
  photoUrl: Scalars['String'];
  published_at: Maybe<Scalars['DateTime']>;
  created_by: Maybe<Scalars['ID']>;
  updated_by: Maybe<Scalars['ID']>;
};

export type EditTeamMemberInput = {
  name: Maybe<Scalars['String']>;
  photoUrl: Maybe<Scalars['String']>;
  published_at: Maybe<Scalars['DateTime']>;
  created_by: Maybe<Scalars['ID']>;
  updated_by: Maybe<Scalars['ID']>;
};

export type CreateTeamMemberInput = {
  data: Maybe<TeamMemberInput>;
};

export type CreateTeamMemberPayload = {
  __typename?: 'createTeamMemberPayload';
  teamMember: Maybe<TeamMember>;
};

export type UpdateTeamMemberInput = {
  where: Maybe<InputId>;
  data: Maybe<EditTeamMemberInput>;
};

export type UpdateTeamMemberPayload = {
  __typename?: 'updateTeamMemberPayload';
  teamMember: Maybe<TeamMember>;
};

export type DeleteTeamMemberInput = {
  where: Maybe<InputId>;
};

export type DeleteTeamMemberPayload = {
  __typename?: 'deleteTeamMemberPayload';
  teamMember: Maybe<TeamMember>;
};

export type TeamMembersSection = {
  __typename?: 'TeamMembersSection';
  id: Scalars['ID'];
  created_at: Scalars['DateTime'];
  updated_at: Scalars['DateTime'];
  title: Scalars['String'];
  text: Scalars['String'];
  published_at: Maybe<Scalars['DateTime']>;
  teamMembers: Maybe<Array<Maybe<TeamMember>>>;
};


export type TeamMembersSectionTeamMembersArgs = {
  sort: Maybe<Scalars['String']>;
  limit: Maybe<Scalars['Int']>;
  start: Maybe<Scalars['Int']>;
  where: Maybe<Scalars['JSON']>;
};

export type TeamMembersSectionInput = {
  title: Scalars['String'];
  text: Scalars['String'];
  teamMembers: Maybe<Array<Maybe<Scalars['ID']>>>;
  published_at: Maybe<Scalars['DateTime']>;
  created_by: Maybe<Scalars['ID']>;
  updated_by: Maybe<Scalars['ID']>;
};

export type EditTeamMembersSectionInput = {
  title: Maybe<Scalars['String']>;
  text: Maybe<Scalars['String']>;
  teamMembers: Maybe<Array<Maybe<Scalars['ID']>>>;
  published_at: Maybe<Scalars['DateTime']>;
  created_by: Maybe<Scalars['ID']>;
  updated_by: Maybe<Scalars['ID']>;
};

export type UpdateTeamMembersSectionInput = {
  data: Maybe<EditTeamMembersSectionInput>;
};

export type UpdateTeamMembersSectionPayload = {
  __typename?: 'updateTeamMembersSectionPayload';
  teamMembersSection: Maybe<TeamMembersSection>;
};

export type DeleteTeamMembersSectionPayload = {
  __typename?: 'deleteTeamMembersSectionPayload';
  teamMembersSection: Maybe<TeamMembersSection>;
};

export type UploadFile = {
  __typename?: 'UploadFile';
  id: Scalars['ID'];
  created_at: Scalars['DateTime'];
  updated_at: Scalars['DateTime'];
  name: Scalars['String'];
  alternativeText: Maybe<Scalars['String']>;
  caption: Maybe<Scalars['String']>;
  width: Maybe<Scalars['Int']>;
  height: Maybe<Scalars['Int']>;
  formats: Maybe<Scalars['JSON']>;
  hash: Scalars['String'];
  ext: Maybe<Scalars['String']>;
  mime: Scalars['String'];
  size: Scalars['Float'];
  url: Scalars['String'];
  previewUrl: Maybe<Scalars['String']>;
  provider: Scalars['String'];
  provider_metadata: Maybe<Scalars['JSON']>;
  related: Maybe<Array<Maybe<Morph>>>;
};


export type UploadFileRelatedArgs = {
  sort: Maybe<Scalars['String']>;
  limit: Maybe<Scalars['Int']>;
  start: Maybe<Scalars['Int']>;
  where: Maybe<Scalars['JSON']>;
};

export type UploadFileConnection = {
  __typename?: 'UploadFileConnection';
  values: Maybe<Array<Maybe<UploadFile>>>;
  groupBy: Maybe<UploadFileGroupBy>;
  aggregate: Maybe<UploadFileAggregator>;
};

export type UploadFileAggregator = {
  __typename?: 'UploadFileAggregator';
  count: Maybe<Scalars['Int']>;
  totalCount: Maybe<Scalars['Int']>;
  sum: Maybe<UploadFileAggregatorSum>;
  avg: Maybe<UploadFileAggregatorAvg>;
  min: Maybe<UploadFileAggregatorMin>;
  max: Maybe<UploadFileAggregatorMax>;
};

export type UploadFileAggregatorSum = {
  __typename?: 'UploadFileAggregatorSum';
  width: Maybe<Scalars['Float']>;
  height: Maybe<Scalars['Float']>;
  size: Maybe<Scalars['Float']>;
};

export type UploadFileAggregatorAvg = {
  __typename?: 'UploadFileAggregatorAvg';
  width: Maybe<Scalars['Float']>;
  height: Maybe<Scalars['Float']>;
  size: Maybe<Scalars['Float']>;
};

export type UploadFileAggregatorMin = {
  __typename?: 'UploadFileAggregatorMin';
  width: Maybe<Scalars['Float']>;
  height: Maybe<Scalars['Float']>;
  size: Maybe<Scalars['Float']>;
};

export type UploadFileAggregatorMax = {
  __typename?: 'UploadFileAggregatorMax';
  width: Maybe<Scalars['Float']>;
  height: Maybe<Scalars['Float']>;
  size: Maybe<Scalars['Float']>;
};

export type UploadFileGroupBy = {
  __typename?: 'UploadFileGroupBy';
  id: Maybe<Array<Maybe<UploadFileConnectionId>>>;
  created_at: Maybe<Array<Maybe<UploadFileConnectionCreated_At>>>;
  updated_at: Maybe<Array<Maybe<UploadFileConnectionUpdated_At>>>;
  name: Maybe<Array<Maybe<UploadFileConnectionName>>>;
  alternativeText: Maybe<Array<Maybe<UploadFileConnectionAlternativeText>>>;
  caption: Maybe<Array<Maybe<UploadFileConnectionCaption>>>;
  width: Maybe<Array<Maybe<UploadFileConnectionWidth>>>;
  height: Maybe<Array<Maybe<UploadFileConnectionHeight>>>;
  formats: Maybe<Array<Maybe<UploadFileConnectionFormats>>>;
  hash: Maybe<Array<Maybe<UploadFileConnectionHash>>>;
  ext: Maybe<Array<Maybe<UploadFileConnectionExt>>>;
  mime: Maybe<Array<Maybe<UploadFileConnectionMime>>>;
  size: Maybe<Array<Maybe<UploadFileConnectionSize>>>;
  url: Maybe<Array<Maybe<UploadFileConnectionUrl>>>;
  previewUrl: Maybe<Array<Maybe<UploadFileConnectionPreviewUrl>>>;
  provider: Maybe<Array<Maybe<UploadFileConnectionProvider>>>;
  provider_metadata: Maybe<Array<Maybe<UploadFileConnectionProvider_Metadata>>>;
};

export type UploadFileConnectionId = {
  __typename?: 'UploadFileConnectionId';
  key: Maybe<Scalars['ID']>;
  connection: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionCreated_At = {
  __typename?: 'UploadFileConnectionCreated_at';
  key: Maybe<Scalars['DateTime']>;
  connection: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionUpdated_At = {
  __typename?: 'UploadFileConnectionUpdated_at';
  key: Maybe<Scalars['DateTime']>;
  connection: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionName = {
  __typename?: 'UploadFileConnectionName';
  key: Maybe<Scalars['String']>;
  connection: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionAlternativeText = {
  __typename?: 'UploadFileConnectionAlternativeText';
  key: Maybe<Scalars['String']>;
  connection: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionCaption = {
  __typename?: 'UploadFileConnectionCaption';
  key: Maybe<Scalars['String']>;
  connection: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionWidth = {
  __typename?: 'UploadFileConnectionWidth';
  key: Maybe<Scalars['Int']>;
  connection: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionHeight = {
  __typename?: 'UploadFileConnectionHeight';
  key: Maybe<Scalars['Int']>;
  connection: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionFormats = {
  __typename?: 'UploadFileConnectionFormats';
  key: Maybe<Scalars['JSON']>;
  connection: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionHash = {
  __typename?: 'UploadFileConnectionHash';
  key: Maybe<Scalars['String']>;
  connection: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionExt = {
  __typename?: 'UploadFileConnectionExt';
  key: Maybe<Scalars['String']>;
  connection: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionMime = {
  __typename?: 'UploadFileConnectionMime';
  key: Maybe<Scalars['String']>;
  connection: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionSize = {
  __typename?: 'UploadFileConnectionSize';
  key: Maybe<Scalars['Float']>;
  connection: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionUrl = {
  __typename?: 'UploadFileConnectionUrl';
  key: Maybe<Scalars['String']>;
  connection: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionPreviewUrl = {
  __typename?: 'UploadFileConnectionPreviewUrl';
  key: Maybe<Scalars['String']>;
  connection: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionProvider = {
  __typename?: 'UploadFileConnectionProvider';
  key: Maybe<Scalars['String']>;
  connection: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionProvider_Metadata = {
  __typename?: 'UploadFileConnectionProvider_metadata';
  key: Maybe<Scalars['JSON']>;
  connection: Maybe<UploadFileConnection>;
};

export type FileInput = {
  name: Scalars['String'];
  alternativeText: Maybe<Scalars['String']>;
  caption: Maybe<Scalars['String']>;
  width: Maybe<Scalars['Int']>;
  height: Maybe<Scalars['Int']>;
  formats: Maybe<Scalars['JSON']>;
  hash: Scalars['String'];
  ext: Maybe<Scalars['String']>;
  mime: Scalars['String'];
  size: Scalars['Float'];
  url: Scalars['String'];
  previewUrl: Maybe<Scalars['String']>;
  provider: Scalars['String'];
  provider_metadata: Maybe<Scalars['JSON']>;
  related: Maybe<Array<Maybe<Scalars['ID']>>>;
  created_by: Maybe<Scalars['ID']>;
  updated_by: Maybe<Scalars['ID']>;
};

export type EditFileInput = {
  name: Maybe<Scalars['String']>;
  alternativeText: Maybe<Scalars['String']>;
  caption: Maybe<Scalars['String']>;
  width: Maybe<Scalars['Int']>;
  height: Maybe<Scalars['Int']>;
  formats: Maybe<Scalars['JSON']>;
  hash: Maybe<Scalars['String']>;
  ext: Maybe<Scalars['String']>;
  mime: Maybe<Scalars['String']>;
  size: Maybe<Scalars['Float']>;
  url: Maybe<Scalars['String']>;
  previewUrl: Maybe<Scalars['String']>;
  provider: Maybe<Scalars['String']>;
  provider_metadata: Maybe<Scalars['JSON']>;
  related: Maybe<Array<Maybe<Scalars['ID']>>>;
  created_by: Maybe<Scalars['ID']>;
  updated_by: Maybe<Scalars['ID']>;
};

export type DeleteFileInput = {
  where: Maybe<InputId>;
};

export type DeleteFilePayload = {
  __typename?: 'deleteFilePayload';
  file: Maybe<UploadFile>;
};

export type UsersPermissionsPermission = {
  __typename?: 'UsersPermissionsPermission';
  id: Scalars['ID'];
  type: Scalars['String'];
  controller: Scalars['String'];
  action: Scalars['String'];
  enabled: Scalars['Boolean'];
  policy: Maybe<Scalars['String']>;
  role: Maybe<UsersPermissionsRole>;
};

export type UsersPermissionsRole = {
  __typename?: 'UsersPermissionsRole';
  id: Scalars['ID'];
  name: Scalars['String'];
  description: Maybe<Scalars['String']>;
  type: Maybe<Scalars['String']>;
  permissions: Maybe<Array<Maybe<UsersPermissionsPermission>>>;
  users: Maybe<Array<Maybe<UsersPermissionsUser>>>;
};


export type UsersPermissionsRolePermissionsArgs = {
  sort: Maybe<Scalars['String']>;
  limit: Maybe<Scalars['Int']>;
  start: Maybe<Scalars['Int']>;
  where: Maybe<Scalars['JSON']>;
};


export type UsersPermissionsRoleUsersArgs = {
  sort: Maybe<Scalars['String']>;
  limit: Maybe<Scalars['Int']>;
  start: Maybe<Scalars['Int']>;
  where: Maybe<Scalars['JSON']>;
};

export type UsersPermissionsRoleConnection = {
  __typename?: 'UsersPermissionsRoleConnection';
  values: Maybe<Array<Maybe<UsersPermissionsRole>>>;
  groupBy: Maybe<UsersPermissionsRoleGroupBy>;
  aggregate: Maybe<UsersPermissionsRoleAggregator>;
};

export type UsersPermissionsRoleAggregator = {
  __typename?: 'UsersPermissionsRoleAggregator';
  count: Maybe<Scalars['Int']>;
  totalCount: Maybe<Scalars['Int']>;
};

export type UsersPermissionsRoleGroupBy = {
  __typename?: 'UsersPermissionsRoleGroupBy';
  id: Maybe<Array<Maybe<UsersPermissionsRoleConnectionId>>>;
  name: Maybe<Array<Maybe<UsersPermissionsRoleConnectionName>>>;
  description: Maybe<Array<Maybe<UsersPermissionsRoleConnectionDescription>>>;
  type: Maybe<Array<Maybe<UsersPermissionsRoleConnectionType>>>;
};

export type UsersPermissionsRoleConnectionId = {
  __typename?: 'UsersPermissionsRoleConnectionId';
  key: Maybe<Scalars['ID']>;
  connection: Maybe<UsersPermissionsRoleConnection>;
};

export type UsersPermissionsRoleConnectionName = {
  __typename?: 'UsersPermissionsRoleConnectionName';
  key: Maybe<Scalars['String']>;
  connection: Maybe<UsersPermissionsRoleConnection>;
};

export type UsersPermissionsRoleConnectionDescription = {
  __typename?: 'UsersPermissionsRoleConnectionDescription';
  key: Maybe<Scalars['String']>;
  connection: Maybe<UsersPermissionsRoleConnection>;
};

export type UsersPermissionsRoleConnectionType = {
  __typename?: 'UsersPermissionsRoleConnectionType';
  key: Maybe<Scalars['String']>;
  connection: Maybe<UsersPermissionsRoleConnection>;
};

export type RoleInput = {
  name: Scalars['String'];
  description: Maybe<Scalars['String']>;
  type: Maybe<Scalars['String']>;
  permissions: Maybe<Array<Maybe<Scalars['ID']>>>;
  users: Maybe<Array<Maybe<Scalars['ID']>>>;
  created_by: Maybe<Scalars['ID']>;
  updated_by: Maybe<Scalars['ID']>;
};

export type EditRoleInput = {
  name: Maybe<Scalars['String']>;
  description: Maybe<Scalars['String']>;
  type: Maybe<Scalars['String']>;
  permissions: Maybe<Array<Maybe<Scalars['ID']>>>;
  users: Maybe<Array<Maybe<Scalars['ID']>>>;
  created_by: Maybe<Scalars['ID']>;
  updated_by: Maybe<Scalars['ID']>;
};

export type CreateRoleInput = {
  data: Maybe<RoleInput>;
};

export type CreateRolePayload = {
  __typename?: 'createRolePayload';
  role: Maybe<UsersPermissionsRole>;
};

export type UpdateRoleInput = {
  where: Maybe<InputId>;
  data: Maybe<EditRoleInput>;
};

export type UpdateRolePayload = {
  __typename?: 'updateRolePayload';
  role: Maybe<UsersPermissionsRole>;
};

export type DeleteRoleInput = {
  where: Maybe<InputId>;
};

export type DeleteRolePayload = {
  __typename?: 'deleteRolePayload';
  role: Maybe<UsersPermissionsRole>;
};

export type UsersPermissionsUser = {
  __typename?: 'UsersPermissionsUser';
  id: Scalars['ID'];
  created_at: Scalars['DateTime'];
  updated_at: Scalars['DateTime'];
  username: Scalars['String'];
  email: Scalars['String'];
  provider: Maybe<Scalars['String']>;
  confirmed: Maybe<Scalars['Boolean']>;
  blocked: Maybe<Scalars['Boolean']>;
  role: Maybe<UsersPermissionsRole>;
};

export type UsersPermissionsUserConnection = {
  __typename?: 'UsersPermissionsUserConnection';
  values: Maybe<Array<Maybe<UsersPermissionsUser>>>;
  groupBy: Maybe<UsersPermissionsUserGroupBy>;
  aggregate: Maybe<UsersPermissionsUserAggregator>;
};

export type UsersPermissionsUserAggregator = {
  __typename?: 'UsersPermissionsUserAggregator';
  count: Maybe<Scalars['Int']>;
  totalCount: Maybe<Scalars['Int']>;
};

export type UsersPermissionsUserGroupBy = {
  __typename?: 'UsersPermissionsUserGroupBy';
  id: Maybe<Array<Maybe<UsersPermissionsUserConnectionId>>>;
  created_at: Maybe<Array<Maybe<UsersPermissionsUserConnectionCreated_At>>>;
  updated_at: Maybe<Array<Maybe<UsersPermissionsUserConnectionUpdated_At>>>;
  username: Maybe<Array<Maybe<UsersPermissionsUserConnectionUsername>>>;
  email: Maybe<Array<Maybe<UsersPermissionsUserConnectionEmail>>>;
  provider: Maybe<Array<Maybe<UsersPermissionsUserConnectionProvider>>>;
  confirmed: Maybe<Array<Maybe<UsersPermissionsUserConnectionConfirmed>>>;
  blocked: Maybe<Array<Maybe<UsersPermissionsUserConnectionBlocked>>>;
  role: Maybe<Array<Maybe<UsersPermissionsUserConnectionRole>>>;
};

export type UsersPermissionsUserConnectionId = {
  __typename?: 'UsersPermissionsUserConnectionId';
  key: Maybe<Scalars['ID']>;
  connection: Maybe<UsersPermissionsUserConnection>;
};

export type UsersPermissionsUserConnectionCreated_At = {
  __typename?: 'UsersPermissionsUserConnectionCreated_at';
  key: Maybe<Scalars['DateTime']>;
  connection: Maybe<UsersPermissionsUserConnection>;
};

export type UsersPermissionsUserConnectionUpdated_At = {
  __typename?: 'UsersPermissionsUserConnectionUpdated_at';
  key: Maybe<Scalars['DateTime']>;
  connection: Maybe<UsersPermissionsUserConnection>;
};

export type UsersPermissionsUserConnectionUsername = {
  __typename?: 'UsersPermissionsUserConnectionUsername';
  key: Maybe<Scalars['String']>;
  connection: Maybe<UsersPermissionsUserConnection>;
};

export type UsersPermissionsUserConnectionEmail = {
  __typename?: 'UsersPermissionsUserConnectionEmail';
  key: Maybe<Scalars['String']>;
  connection: Maybe<UsersPermissionsUserConnection>;
};

export type UsersPermissionsUserConnectionProvider = {
  __typename?: 'UsersPermissionsUserConnectionProvider';
  key: Maybe<Scalars['String']>;
  connection: Maybe<UsersPermissionsUserConnection>;
};

export type UsersPermissionsUserConnectionConfirmed = {
  __typename?: 'UsersPermissionsUserConnectionConfirmed';
  key: Maybe<Scalars['Boolean']>;
  connection: Maybe<UsersPermissionsUserConnection>;
};

export type UsersPermissionsUserConnectionBlocked = {
  __typename?: 'UsersPermissionsUserConnectionBlocked';
  key: Maybe<Scalars['Boolean']>;
  connection: Maybe<UsersPermissionsUserConnection>;
};

export type UsersPermissionsUserConnectionRole = {
  __typename?: 'UsersPermissionsUserConnectionRole';
  key: Maybe<Scalars['ID']>;
  connection: Maybe<UsersPermissionsUserConnection>;
};

export type UserInput = {
  username: Scalars['String'];
  email: Scalars['String'];
  provider: Maybe<Scalars['String']>;
  password: Maybe<Scalars['String']>;
  resetPasswordToken: Maybe<Scalars['String']>;
  confirmationToken: Maybe<Scalars['String']>;
  confirmed: Maybe<Scalars['Boolean']>;
  blocked: Maybe<Scalars['Boolean']>;
  role: Maybe<Scalars['ID']>;
  created_by: Maybe<Scalars['ID']>;
  updated_by: Maybe<Scalars['ID']>;
};

export type EditUserInput = {
  username: Maybe<Scalars['String']>;
  email: Maybe<Scalars['String']>;
  provider: Maybe<Scalars['String']>;
  password: Maybe<Scalars['String']>;
  resetPasswordToken: Maybe<Scalars['String']>;
  confirmationToken: Maybe<Scalars['String']>;
  confirmed: Maybe<Scalars['Boolean']>;
  blocked: Maybe<Scalars['Boolean']>;
  role: Maybe<Scalars['ID']>;
  created_by: Maybe<Scalars['ID']>;
  updated_by: Maybe<Scalars['ID']>;
};

export type CreateUserInput = {
  data: Maybe<UserInput>;
};

export type CreateUserPayload = {
  __typename?: 'createUserPayload';
  user: Maybe<UsersPermissionsUser>;
};

export type UpdateUserInput = {
  where: Maybe<InputId>;
  data: Maybe<EditUserInput>;
};

export type UpdateUserPayload = {
  __typename?: 'updateUserPayload';
  user: Maybe<UsersPermissionsUser>;
};

export type DeleteUserInput = {
  where: Maybe<InputId>;
};

export type DeleteUserPayload = {
  __typename?: 'deleteUserPayload';
  user: Maybe<UsersPermissionsUser>;
};

export type Morph = UsersPermissionsMe | UsersPermissionsMeRole | UsersPermissionsLoginPayload | UserPermissionsPasswordPayload | AchievementsSection | UpdateAchievementsSectionPayload | DeleteAchievementsSectionPayload | Achievements | AchievementsConnection | AchievementsAggregator | AchievementsAggregatorSum | AchievementsAggregatorAvg | AchievementsAggregatorMin | AchievementsAggregatorMax | AchievementsGroupBy | AchievementsConnectionId | AchievementsConnectionCreated_At | AchievementsConnectionUpdated_At | AchievementsConnectionLabel | AchievementsConnectionValue | AchievementsConnectionPublished_At | CreateAchievementPayload | UpdateAchievementPayload | DeleteAchievementPayload | ActionsSection | UpdateActionsSectionPayload | DeleteActionsSectionPayload | Actions | ActionsConnection | ActionsAggregator | ActionsGroupBy | ActionsConnectionId | ActionsConnectionCreated_At | ActionsConnectionUpdated_At | ActionsConnectionName | ActionsConnectionDate | ActionsConnectionActionLink | ActionsConnectionDescription | ActionsConnectionPublished_At | CreateActionPayload | UpdateActionPayload | DeleteActionPayload | DonationsSection | UpdateDonationsSectionPayload | DeleteDonationsSectionPayload | Footer | UpdateFooterPayload | DeleteFooterPayload | IntroductionSection | UpdateIntroductionSectionPayload | DeleteIntroductionSectionPayload | OrgInfo | OrgInfoConnection | OrgInfoAggregator | OrgInfoGroupBy | OrgInfoConnectionId | OrgInfoConnectionCreated_At | OrgInfoConnectionUpdated_At | OrgInfoConnectionTitle | OrgInfoConnectionText | OrgInfoConnectionEmojiSymbol | OrgInfoConnectionPublished_At | CreateOrgInfoPayload | UpdateOrgInfoPayload | DeleteOrgInfoPayload | SocialMedias | SocialMediasConnection | SocialMediasAggregator | SocialMediasGroupBy | SocialMediasConnectionId | SocialMediasConnectionCreated_At | SocialMediasConnectionUpdated_At | SocialMediasConnectionHref | SocialMediasConnectionLabel | SocialMediasConnectionPublished_At | CreateSocialMediaPayload | UpdateSocialMediaPayload | DeleteSocialMediaPayload | TeamMember | TeamMemberConnection | TeamMemberAggregator | TeamMemberGroupBy | TeamMemberConnectionId | TeamMemberConnectionCreated_At | TeamMemberConnectionUpdated_At | TeamMemberConnectionName | TeamMemberConnectionPhotoUrl | TeamMemberConnectionPublished_At | CreateTeamMemberPayload | UpdateTeamMemberPayload | DeleteTeamMemberPayload | TeamMembersSection | UpdateTeamMembersSectionPayload | DeleteTeamMembersSectionPayload | UploadFile | UploadFileConnection | UploadFileAggregator | UploadFileAggregatorSum | UploadFileAggregatorAvg | UploadFileAggregatorMin | UploadFileAggregatorMax | UploadFileGroupBy | UploadFileConnectionId | UploadFileConnectionCreated_At | UploadFileConnectionUpdated_At | UploadFileConnectionName | UploadFileConnectionAlternativeText | UploadFileConnectionCaption | UploadFileConnectionWidth | UploadFileConnectionHeight | UploadFileConnectionFormats | UploadFileConnectionHash | UploadFileConnectionExt | UploadFileConnectionMime | UploadFileConnectionSize | UploadFileConnectionUrl | UploadFileConnectionPreviewUrl | UploadFileConnectionProvider | UploadFileConnectionProvider_Metadata | DeleteFilePayload | UsersPermissionsPermission | UsersPermissionsRole | UsersPermissionsRoleConnection | UsersPermissionsRoleAggregator | UsersPermissionsRoleGroupBy | UsersPermissionsRoleConnectionId | UsersPermissionsRoleConnectionName | UsersPermissionsRoleConnectionDescription | UsersPermissionsRoleConnectionType | CreateRolePayload | UpdateRolePayload | DeleteRolePayload | UsersPermissionsUser | UsersPermissionsUserConnection | UsersPermissionsUserAggregator | UsersPermissionsUserGroupBy | UsersPermissionsUserConnectionId | UsersPermissionsUserConnectionCreated_At | UsersPermissionsUserConnectionUpdated_At | UsersPermissionsUserConnectionUsername | UsersPermissionsUserConnectionEmail | UsersPermissionsUserConnectionProvider | UsersPermissionsUserConnectionConfirmed | UsersPermissionsUserConnectionBlocked | UsersPermissionsUserConnectionRole | CreateUserPayload | UpdateUserPayload | DeleteUserPayload;

export type InputId = {
  id: Scalars['ID'];
};

export enum PublicationState {
  Live = 'LIVE',
  Preview = 'PREVIEW'
}

export type AdminUser = {
  __typename?: 'AdminUser';
  id: Scalars['ID'];
  username: Maybe<Scalars['String']>;
  firstname: Scalars['String'];
  lastname: Scalars['String'];
};

export type Query = {
  __typename?: 'Query';
  achievementsSection: Maybe<AchievementsSection>;
  achievement: Maybe<Achievements>;
  achievements: Maybe<Array<Maybe<Achievements>>>;
  achievementsConnection: Maybe<AchievementsConnection>;
  actionsSection: Maybe<ActionsSection>;
  action: Maybe<Actions>;
  actions: Maybe<Array<Maybe<Actions>>>;
  actionsConnection: Maybe<ActionsConnection>;
  donationsSection: Maybe<DonationsSection>;
  footer: Maybe<Footer>;
  introductionSection: Maybe<IntroductionSection>;
  orgInfo: Maybe<OrgInfo>;
  orgInfos: Maybe<Array<Maybe<OrgInfo>>>;
  orgInfosConnection: Maybe<OrgInfoConnection>;
  socialMedia: Maybe<SocialMedias>;
  socialMedias: Maybe<Array<Maybe<SocialMedias>>>;
  socialMediasConnection: Maybe<SocialMediasConnection>;
  teamMember: Maybe<TeamMember>;
  teamMembers: Maybe<Array<Maybe<TeamMember>>>;
  teamMembersConnection: Maybe<TeamMemberConnection>;
  teamMembersSection: Maybe<TeamMembersSection>;
  files: Maybe<Array<Maybe<UploadFile>>>;
  filesConnection: Maybe<UploadFileConnection>;
  role: Maybe<UsersPermissionsRole>;
  /** Retrieve all the existing roles. You can't apply filters on this query. */
  roles: Maybe<Array<Maybe<UsersPermissionsRole>>>;
  rolesConnection: Maybe<UsersPermissionsRoleConnection>;
  user: Maybe<UsersPermissionsUser>;
  users: Maybe<Array<Maybe<UsersPermissionsUser>>>;
  usersConnection: Maybe<UsersPermissionsUserConnection>;
  me: Maybe<UsersPermissionsMe>;
};


export type QueryAchievementsSectionArgs = {
  publicationState: Maybe<PublicationState>;
};


export type QueryAchievementArgs = {
  id: Scalars['ID'];
  publicationState: Maybe<PublicationState>;
};


export type QueryAchievementsArgs = {
  sort: Maybe<Scalars['String']>;
  limit: Maybe<Scalars['Int']>;
  start: Maybe<Scalars['Int']>;
  where: Maybe<Scalars['JSON']>;
  publicationState: Maybe<PublicationState>;
};


export type QueryAchievementsConnectionArgs = {
  sort: Maybe<Scalars['String']>;
  limit: Maybe<Scalars['Int']>;
  start: Maybe<Scalars['Int']>;
  where: Maybe<Scalars['JSON']>;
};


export type QueryActionsSectionArgs = {
  publicationState: Maybe<PublicationState>;
};


export type QueryActionArgs = {
  id: Scalars['ID'];
  publicationState: Maybe<PublicationState>;
};


export type QueryActionsArgs = {
  sort: Maybe<Scalars['String']>;
  limit: Maybe<Scalars['Int']>;
  start: Maybe<Scalars['Int']>;
  where: Maybe<Scalars['JSON']>;
  publicationState: Maybe<PublicationState>;
};


export type QueryActionsConnectionArgs = {
  sort: Maybe<Scalars['String']>;
  limit: Maybe<Scalars['Int']>;
  start: Maybe<Scalars['Int']>;
  where: Maybe<Scalars['JSON']>;
};


export type QueryDonationsSectionArgs = {
  publicationState: Maybe<PublicationState>;
};


export type QueryFooterArgs = {
  publicationState: Maybe<PublicationState>;
};


export type QueryIntroductionSectionArgs = {
  publicationState: Maybe<PublicationState>;
};


export type QueryOrgInfoArgs = {
  id: Scalars['ID'];
  publicationState: Maybe<PublicationState>;
};


export type QueryOrgInfosArgs = {
  sort: Maybe<Scalars['String']>;
  limit: Maybe<Scalars['Int']>;
  start: Maybe<Scalars['Int']>;
  where: Maybe<Scalars['JSON']>;
  publicationState: Maybe<PublicationState>;
};


export type QueryOrgInfosConnectionArgs = {
  sort: Maybe<Scalars['String']>;
  limit: Maybe<Scalars['Int']>;
  start: Maybe<Scalars['Int']>;
  where: Maybe<Scalars['JSON']>;
};


export type QuerySocialMediaArgs = {
  id: Scalars['ID'];
  publicationState: Maybe<PublicationState>;
};


export type QuerySocialMediasArgs = {
  sort: Maybe<Scalars['String']>;
  limit: Maybe<Scalars['Int']>;
  start: Maybe<Scalars['Int']>;
  where: Maybe<Scalars['JSON']>;
  publicationState: Maybe<PublicationState>;
};


export type QuerySocialMediasConnectionArgs = {
  sort: Maybe<Scalars['String']>;
  limit: Maybe<Scalars['Int']>;
  start: Maybe<Scalars['Int']>;
  where: Maybe<Scalars['JSON']>;
};


export type QueryTeamMemberArgs = {
  id: Scalars['ID'];
  publicationState: Maybe<PublicationState>;
};


export type QueryTeamMembersArgs = {
  sort: Maybe<Scalars['String']>;
  limit: Maybe<Scalars['Int']>;
  start: Maybe<Scalars['Int']>;
  where: Maybe<Scalars['JSON']>;
  publicationState: Maybe<PublicationState>;
};


export type QueryTeamMembersConnectionArgs = {
  sort: Maybe<Scalars['String']>;
  limit: Maybe<Scalars['Int']>;
  start: Maybe<Scalars['Int']>;
  where: Maybe<Scalars['JSON']>;
};


export type QueryTeamMembersSectionArgs = {
  publicationState: Maybe<PublicationState>;
};


export type QueryFilesArgs = {
  sort: Maybe<Scalars['String']>;
  limit: Maybe<Scalars['Int']>;
  start: Maybe<Scalars['Int']>;
  where: Maybe<Scalars['JSON']>;
  publicationState: Maybe<PublicationState>;
};


export type QueryFilesConnectionArgs = {
  sort: Maybe<Scalars['String']>;
  limit: Maybe<Scalars['Int']>;
  start: Maybe<Scalars['Int']>;
  where: Maybe<Scalars['JSON']>;
};


export type QueryRoleArgs = {
  id: Scalars['ID'];
  publicationState: Maybe<PublicationState>;
};


export type QueryRolesArgs = {
  sort: Maybe<Scalars['String']>;
  limit: Maybe<Scalars['Int']>;
  start: Maybe<Scalars['Int']>;
  where: Maybe<Scalars['JSON']>;
  publicationState: Maybe<PublicationState>;
};


export type QueryRolesConnectionArgs = {
  sort: Maybe<Scalars['String']>;
  limit: Maybe<Scalars['Int']>;
  start: Maybe<Scalars['Int']>;
  where: Maybe<Scalars['JSON']>;
};


export type QueryUserArgs = {
  id: Scalars['ID'];
  publicationState: Maybe<PublicationState>;
};


export type QueryUsersArgs = {
  sort: Maybe<Scalars['String']>;
  limit: Maybe<Scalars['Int']>;
  start: Maybe<Scalars['Int']>;
  where: Maybe<Scalars['JSON']>;
  publicationState: Maybe<PublicationState>;
};


export type QueryUsersConnectionArgs = {
  sort: Maybe<Scalars['String']>;
  limit: Maybe<Scalars['Int']>;
  start: Maybe<Scalars['Int']>;
  where: Maybe<Scalars['JSON']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  updateAchievementsSection: Maybe<UpdateAchievementsSectionPayload>;
  deleteAchievementsSection: Maybe<DeleteAchievementsSectionPayload>;
  createAchievement: Maybe<CreateAchievementPayload>;
  updateAchievement: Maybe<UpdateAchievementPayload>;
  deleteAchievement: Maybe<DeleteAchievementPayload>;
  updateActionsSection: Maybe<UpdateActionsSectionPayload>;
  deleteActionsSection: Maybe<DeleteActionsSectionPayload>;
  createAction: Maybe<CreateActionPayload>;
  updateAction: Maybe<UpdateActionPayload>;
  deleteAction: Maybe<DeleteActionPayload>;
  updateDonationsSection: Maybe<UpdateDonationsSectionPayload>;
  deleteDonationsSection: Maybe<DeleteDonationsSectionPayload>;
  updateFooter: Maybe<UpdateFooterPayload>;
  deleteFooter: Maybe<DeleteFooterPayload>;
  updateIntroductionSection: Maybe<UpdateIntroductionSectionPayload>;
  deleteIntroductionSection: Maybe<DeleteIntroductionSectionPayload>;
  createOrgInfo: Maybe<CreateOrgInfoPayload>;
  updateOrgInfo: Maybe<UpdateOrgInfoPayload>;
  deleteOrgInfo: Maybe<DeleteOrgInfoPayload>;
  createSocialMedia: Maybe<CreateSocialMediaPayload>;
  updateSocialMedia: Maybe<UpdateSocialMediaPayload>;
  deleteSocialMedia: Maybe<DeleteSocialMediaPayload>;
  createTeamMember: Maybe<CreateTeamMemberPayload>;
  updateTeamMember: Maybe<UpdateTeamMemberPayload>;
  deleteTeamMember: Maybe<DeleteTeamMemberPayload>;
  updateTeamMembersSection: Maybe<UpdateTeamMembersSectionPayload>;
  deleteTeamMembersSection: Maybe<DeleteTeamMembersSectionPayload>;
  /** Delete one file */
  deleteFile: Maybe<DeleteFilePayload>;
  /** Create a new role */
  createRole: Maybe<CreateRolePayload>;
  /** Update an existing role */
  updateRole: Maybe<UpdateRolePayload>;
  /** Delete an existing role */
  deleteRole: Maybe<DeleteRolePayload>;
  /** Create a new user */
  createUser: Maybe<CreateUserPayload>;
  /** Update an existing user */
  updateUser: Maybe<UpdateUserPayload>;
  /** Delete an existing user */
  deleteUser: Maybe<DeleteUserPayload>;
  upload: UploadFile;
  multipleUpload: Array<Maybe<UploadFile>>;
  updateFileInfo: UploadFile;
  login: UsersPermissionsLoginPayload;
  register: UsersPermissionsLoginPayload;
  forgotPassword: Maybe<UserPermissionsPasswordPayload>;
  resetPassword: Maybe<UsersPermissionsLoginPayload>;
  emailConfirmation: Maybe<UsersPermissionsLoginPayload>;
};


export type MutationUpdateAchievementsSectionArgs = {
  input: Maybe<UpdateAchievementsSectionInput>;
};


export type MutationCreateAchievementArgs = {
  input: Maybe<CreateAchievementInput>;
};


export type MutationUpdateAchievementArgs = {
  input: Maybe<UpdateAchievementInput>;
};


export type MutationDeleteAchievementArgs = {
  input: Maybe<DeleteAchievementInput>;
};


export type MutationUpdateActionsSectionArgs = {
  input: Maybe<UpdateActionsSectionInput>;
};


export type MutationCreateActionArgs = {
  input: Maybe<CreateActionInput>;
};


export type MutationUpdateActionArgs = {
  input: Maybe<UpdateActionInput>;
};


export type MutationDeleteActionArgs = {
  input: Maybe<DeleteActionInput>;
};


export type MutationUpdateDonationsSectionArgs = {
  input: Maybe<UpdateDonationsSectionInput>;
};


export type MutationUpdateFooterArgs = {
  input: Maybe<UpdateFooterInput>;
};


export type MutationUpdateIntroductionSectionArgs = {
  input: Maybe<UpdateIntroductionSectionInput>;
};


export type MutationCreateOrgInfoArgs = {
  input: Maybe<CreateOrgInfoInput>;
};


export type MutationUpdateOrgInfoArgs = {
  input: Maybe<UpdateOrgInfoInput>;
};


export type MutationDeleteOrgInfoArgs = {
  input: Maybe<DeleteOrgInfoInput>;
};


export type MutationCreateSocialMediaArgs = {
  input: Maybe<CreateSocialMediaInput>;
};


export type MutationUpdateSocialMediaArgs = {
  input: Maybe<UpdateSocialMediaInput>;
};


export type MutationDeleteSocialMediaArgs = {
  input: Maybe<DeleteSocialMediaInput>;
};


export type MutationCreateTeamMemberArgs = {
  input: Maybe<CreateTeamMemberInput>;
};


export type MutationUpdateTeamMemberArgs = {
  input: Maybe<UpdateTeamMemberInput>;
};


export type MutationDeleteTeamMemberArgs = {
  input: Maybe<DeleteTeamMemberInput>;
};


export type MutationUpdateTeamMembersSectionArgs = {
  input: Maybe<UpdateTeamMembersSectionInput>;
};


export type MutationDeleteFileArgs = {
  input: Maybe<DeleteFileInput>;
};


export type MutationCreateRoleArgs = {
  input: Maybe<CreateRoleInput>;
};


export type MutationUpdateRoleArgs = {
  input: Maybe<UpdateRoleInput>;
};


export type MutationDeleteRoleArgs = {
  input: Maybe<DeleteRoleInput>;
};


export type MutationCreateUserArgs = {
  input: Maybe<CreateUserInput>;
};


export type MutationUpdateUserArgs = {
  input: Maybe<UpdateUserInput>;
};


export type MutationDeleteUserArgs = {
  input: Maybe<DeleteUserInput>;
};


export type MutationUploadArgs = {
  refId: Maybe<Scalars['ID']>;
  ref: Maybe<Scalars['String']>;
  field: Maybe<Scalars['String']>;
  source: Maybe<Scalars['String']>;
  file: Scalars['Upload'];
};


export type MutationMultipleUploadArgs = {
  refId: Maybe<Scalars['ID']>;
  ref: Maybe<Scalars['String']>;
  field: Maybe<Scalars['String']>;
  source: Maybe<Scalars['String']>;
  files: Array<Maybe<Scalars['Upload']>>;
};


export type MutationUpdateFileInfoArgs = {
  id: Scalars['ID'];
  info: FileInfoInput;
};


export type MutationLoginArgs = {
  input: UsersPermissionsLoginInput;
};


export type MutationRegisterArgs = {
  input: UsersPermissionsRegisterInput;
};


export type MutationForgotPasswordArgs = {
  email: Scalars['String'];
};


export type MutationResetPasswordArgs = {
  password: Scalars['String'];
  passwordConfirmation: Scalars['String'];
  code: Scalars['String'];
};


export type MutationEmailConfirmationArgs = {
  confirmation: Scalars['String'];
};







export enum CacheControlScope {
  Public = 'PUBLIC',
  Private = 'PRIVATE'
}

export type GetMainPageSectionQueryVariables = Exact<{ [key: string]: never; }>;


export type GetMainPageSectionQuery = (
  { __typename?: 'Query' }
  & { introductionSection: Maybe<(
    { __typename?: 'IntroductionSection' }
    & Pick<IntroductionSection, 'id' | 'title' | 'buttonText' | 'backgroundImageLink'>
  )>, achievementsSection: Maybe<(
    { __typename?: 'AchievementsSection' }
    & Pick<AchievementsSection, 'id' | 'title'>
    & { achievements: Maybe<Array<Maybe<(
      { __typename?: 'Achievements' }
      & Pick<Achievements, 'id' | 'label' | 'value'>
    )>>> }
  )>, donationsSection: Maybe<(
    { __typename?: 'DonationsSection' }
    & Pick<DonationsSection, 'id' | 'text' | 'title' | 'sheetLink' | 'buttonText' | 'emojiSymbol'>
  )>, actionsSection: Maybe<(
    { __typename?: 'ActionsSection' }
    & Pick<ActionsSection, 'id' | 'text' | 'title' | 'actionButtonText' | 'nextActionsSubtitle' | 'previousActionsSubtitle'>
    & { nextActions: Maybe<Array<Maybe<(
      { __typename?: 'Actions' }
      & Pick<Actions, 'id' | 'name' | 'date' | 'description' | 'actionLink'>
    )>>> }
  )>, orgInfos: Maybe<Array<Maybe<(
    { __typename?: 'OrgInfo' }
    & Pick<OrgInfo, 'id' | 'text' | 'title' | 'emojiSymbol'>
  )>>>, teamMembersSection: Maybe<(
    { __typename?: 'TeamMembersSection' }
    & Pick<TeamMembersSection, 'id' | 'text' | 'title'>
    & { teamMembers: Maybe<Array<Maybe<(
      { __typename?: 'TeamMember' }
      & Pick<TeamMember, 'id' | 'name' | 'photoUrl'>
    )>>> }
  )>, footer: Maybe<(
    { __typename?: 'Footer' }
    & Pick<Footer, 'id' | 'contactEmail' | 'socialMediasTitle' | 'contactEmailTitle'>
    & { socialMedias: Maybe<Array<Maybe<(
      { __typename?: 'SocialMedias' }
      & Pick<SocialMedias, 'id' | 'label' | 'href'>
    )>>> }
  )> }
);
