import React from "react";

import Section from "components/Sections/Section";
import ScrollLink from "components/ScrollLink";
import ActionsSlider from "components/Slider/ActionsSlider";
import { BackgroundVariant } from "styles/variants";
import { footerId } from "components/Footer/constants";

import { ActionsSectionProps } from "./types";
import { actionsSectionFixtures, actionsSectionId } from "./constants";
import formatActions from "./formatActions";

const ActionsSection: React.FC<ActionsSectionProps> = ({
  text = actionsSectionFixtures.text,
  title = actionsSectionFixtures.title,
  nextActions = actionsSectionFixtures.nextActions,
  actionButtonText = actionsSectionFixtures.actionButtonText,
  nextActionsSubtitle = actionsSectionFixtures.nextActionsSubtitle,
}) => {
  const formattedActions = formatActions(nextActions);

  const hasActions = nextActions.length > 0;

  return (
    <Section
      id={actionsSectionId}
      text={text}
      title={title}
      variant={BackgroundVariant.Primary}
    >
      <div className="my-16">
        <h2 className="text-left text-2xl text-black font-semibold mt-16 mb-10">
          {nextActionsSubtitle}
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
    </Section>
  );
};

export default ActionsSection;
