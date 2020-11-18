import React from "react";
import clsx from "clsx";
import Emoji from "a11y-react-emoji";

import Touchable from "components/Touchable";
import MaxWidthContainer from "components/MaxWidthContainer";
import { BackgroundVariant, backgroundVariantsStyles } from "styles/variants";

import { SectionProps } from "./types";

const Section: React.FC<SectionProps> = ({
  emojiSymbol,
  buttonText,
  touchableHref,
  className,
  children,
  variant = BackgroundVariant.Secondary,
  title,
  text,
  ...rest
}) => {
  const concatenateSectionClassName = clsx(
    className,
    "text-center w-full py-16 px-5 md:px-20",
    backgroundVariantsStyles[variant],
  );

  return (
    <section
      className={concatenateSectionClassName}
      {...rest}
    >
      <MaxWidthContainer>
        {
          emojiSymbol && (
            <Emoji
              className="inline-block text-3xl mb-3"
              symbol={emojiSymbol}
            />
          )
        }

        <h1 className="text-4xl font-bold mb-4">
          {title}
        </h1>

        <h2 className="text-lg font-light max-w-1/2">
          {text}
        </h2>

        {
          buttonText && (
            <Touchable
              touchableHref={touchableHref}
              touchableWrapperClassName="mt-8 mx-auto"
            >
              {buttonText}
            </Touchable>
          )
        }

        {
          children && (
            <div className="w-full mt-5">
              {children}
            </div>
          )
        }
      </MaxWidthContainer>
    </section>
  );
};

export default Section;
