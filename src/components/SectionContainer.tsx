import React from "react";
import classNames from "classnames";

type Props = {
  background: string;
  children: React.ReactNode;
  container?: string;
};

const SectionContainer = ({ background, children, container }: Props) => {
  return (
    <section
      className={classNames(
        "flex flex-col items-center justify-start",
        background
      )}
    >
      <div
        className={classNames(
          "w-full max-w-[1440px] flex flex-col flex-grow",
          container
        )}
      >
        <div className="w-full max-w-[1440px] mx-auto">{children}</div>
      </div>
    </section>
  );
};

export default SectionContainer;
