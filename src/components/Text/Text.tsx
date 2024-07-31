import React, { FunctionComponent, HTMLAttributes } from "react";
import { tv } from "tailwind-variants";

const text = tv({
  base: "text-brand-text-base",
  variants: {
    fontSize: {
      sm: "text-sm",
      md: "text-md",
      lg: "text-lg",
      xl: "text-3xl",
      inherit: "text-[length:inherit]",
    },
    fontWeight: {
      regular: "font-normal",
      medium: "font-medium",
      semiBold: "font-semibold",
      bold: "font-bold",
      extraBold: "font-extrabold",
      inherit: "font-inherit",
    },
  },
});

type TextComponent = typeof text;

interface TextPropsType extends HTMLAttributes<HTMLParagraphElement> {
  fontSize?: keyof TextComponent["variants"]["fontSize"];
  fontWeight?: keyof TextComponent["variants"]["fontWeight"];
}

export const Text: FunctionComponent<TextPropsType> = ({
  children,
  className,
  fontSize = "inherit",
  fontWeight = "inherit",
  ...props
}) => {
  return (
    <>
      <p
        className={text({ class: className, fontSize, fontWeight })}
        {...props}
      >
        {children}
      </p>
    </>
  );
};
