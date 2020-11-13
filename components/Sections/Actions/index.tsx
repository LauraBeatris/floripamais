import React from "react";

import Section from "components/Sections/Section";
import ScrollLink from "components/ScrollLink";
import { SectionVariant } from "components/Sections/Section/types";
import { footerId } from "components/Footer/constants";
import ActionsSlider from "components/Slider/ActionsSlider";

import { ActionsSectionSliderContainerProps, ActionsSectionProps } from "./types";
import { actionsSectionFixtures, actionsSectionId } from "./constants";
import formatActions from "./formatActions";

const ActionsSectionSliderContainer: React.FC<ActionsSectionSliderContainerProps> = ({
  actions,
  subtitle,
  actionButtonText,
}) => {
  const formattedActions = formatActions(actions);

  const hasActions = actions.length > 0;

  return (
    <div className="my-16">
      <h2 className="text-left text-2xl text-black font-semibold mt-16 mb-10">
        {subtitle}
      </h2>

      {
        hasActions ? (
          <ActionsSlider
            buttonText={actionButtonText}
            formattedActions={formattedActions}
          />
        ) : (
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
        )
      }
    </div>
  );
};

const ActionsSection: React.FC<ActionsSectionProps> = ({
  text = actionsSectionFixtures.text,
  title = actionsSectionFixtures.title,
  nextActions = actionsSectionFixtures.nextActions,
  previousActions = actionsSectionFixtures.previousActions,
  actionButtonText = actionsSectionFixtures.actionButtonText,
  nextActionsSubtitle = actionsSectionFixtures.nextActionsSubtitle,
  previousActionsSubtitle = actionsSectionFixtures.previousActionsSubtitle,
}) => (
  <Section
    id={actionsSectionId}
    text={text}
    title={title}
    variant={SectionVariant.Primary}
  >
    <ActionsSectionSliderContainer
      actions={nextActions}
      subtitle={nextActionsSubtitle}
      actionButtonText={actionButtonText}
    />

    <ActionsSectionSliderContainer
      actions={previousActions}
      subtitle={previousActionsSubtitle}
      actionButtonText={actionButtonText}
    />
  </Section>
);

export default ActionsSection;
