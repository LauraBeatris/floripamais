import React from "react";
import { isAfter, isBefore, parseISO } from "date-fns";

import Section from "components/Sections/Section";
import ScrollLink from "components/ScrollLink";
import ActionsSlider from "components/Slider/ActionsSlider";
import { BackgroundVariant } from "styles/variants";
import { footerId } from "components/Footer/constants";

import { ActionsSliderContainerProps, ActionsSectionProps } from "./types";
import { actionsSectionFixtures, actionsSectionId } from "./constants";
import formatActions from "./formatActions";

const ActionsSliderContainer: React.FC<ActionsSliderContainerProps> = ({
  title,
  actions,
  actionButtonText,
  shouldShowNoActionsMessage = false,
}) => {
  const formattedActions = formatActions(actions);

  return (
    <div className="my-16">
      <h2 className="text-left text-2xl text-black font-semibold mt-16 mb-10">
        {title}
      </h2>

      {
        shouldShowNoActionsMessage ? (
          <p className="text-left font-light">
            Não há ações no momento, mas nos siga nas
            {" "}
            <ScrollLink
              className="cursor-pointer hover:underline text-black font-semibold"
              to={footerId}
            >
              redes sociais
            </ScrollLink>
            {" "}
            para mais informaçöes
          </p>
        ) : (
          <ActionsSlider
            buttonText={actionButtonText}
            formattedActions={formattedActions}
          />
        )
      }
    </div>
  );
};

const now = Date.now();

const ActionsSection: React.FC<ActionsSectionProps> = ({
  text = actionsSectionFixtures.text,
  title = actionsSectionFixtures.title,
  actions = actionsSectionFixtures.actions = [],
  actionButtonText = actionsSectionFixtures.actionButtonText,
  nextActionsSubtitle = actionsSectionFixtures.nextActionsSubtitle,
  previousActionsSubtitle = actionsSectionFixtures.previousActionsSubtitle,
}) => {
  const nextActions = actions.filter(action => isAfter(parseISO(action.date), now));

  const previousActions = actions.filter(action => isBefore(parseISO(action.date), now));

  const hasNextActions = nextActions.length === 0;

  return (
    <Section
      id={actionsSectionId}
      text={text}
      title={title}
      variant={BackgroundVariant.Primary}
    >
      <ActionsSliderContainer
        title={nextActionsSubtitle}
        actions={nextActions}
        actionButtonText={actionButtonText}
        shouldShowNoActionsMessage={hasNextActions}
      />

      <ActionsSliderContainer
        title={previousActionsSubtitle}
        actions={previousActions}
        actionButtonText={actionButtonText}
      />
    </Section>
  );
};

export default ActionsSection;
