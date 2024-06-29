import React from "react";
import Link from "next/link";

interface ButtonProps {
  text: string;
  cls: string;
  type: "button" | "submit" | undefined;
  onClick?: () => {};
  linkTag?: boolean;
  link?: string;
}

const Button = ({
  text,
  cls,
  type = "button",
  onClick,
  linkTag = false,
  link = "/",
}: ButtonProps) => {
  return (
    <div>
      {linkTag ? (
        <Link className={cls} href={link}>
          {text}
        </Link>
      ) : (
        <button type={type} onClick={onClick} className={cls}>
          {text}
        </button>
      )}
    </div>
  );
};

export default Button;
