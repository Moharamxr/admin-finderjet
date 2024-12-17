"use client";

import React from "react";
import clsx from "clsx";

type PrimaryBtnProps = {
  children?: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  bgColor?: "primary" | "secondary" | "discard" | "primaryLight";
  textColor?: "primary" | "white" | "secondary" | "headlines";
  extraStyle?: string;
};

const PrimaryBtn = ({
  children,
  onClick,
  disabled = false,
  bgColor = "primary",
  textColor = "white",
  extraStyle = "",
}: PrimaryBtnProps) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={clsx(
        "px-4 py-2 rounded-lg  tracking-wide" ,
        "sm:px-6 sm:py-3",
        bgColor === "primary" && "bg-primary hover:bg-primaryHover",
        bgColor === "secondary" && "bg-secondary hover:bg-secondaryHover",
        bgColor === "discard" && "bg-discard hover:bg-discardHover",
        bgColor === "primaryLight" && "bg-primaryLight hover:bg-discardHover",
        textColor === "primary" && "text-primary",
        textColor === "secondary" && "text-secondary",
        textColor === "headlines" && "text-headlines",
        textColor === "white" && "text-white",
        { "opacity-50 cursor-not-allowed": disabled },
        "transition-all duration-300",
        extraStyle // Ensure extraStyle is applied last
      )}
    >
      {children}

    </button>
  );
};

export default PrimaryBtn;
