import React, { FunctionComponent, HTMLAttributes } from "react";
import { tv } from "tailwind-variants";

interface ButtonPropsType extends HTMLAttributes<HTMLButtonElement> {}

const button = tv({
  base: "text-brand-text-base text-md shadow-lg font-medium bg-brand-primary-normal hover:bg-brand-primary-normalHover p-3 rounded-lg min-w-[250px]",
});

export const Button: FunctionComponent<ButtonPropsType> = ({
  children,
  className,
  ...props
}) => {
  return (
    <button className={button({ class: className })} {...props}>
      {children}
    </button>
  );
};
