import clsx from "clsx";
import React from "react";

const BackIcon = ({ extraStyle = "" }: { extraStyle?: string }) => {
  return (
    <svg
      width="13"
      height="22"
      viewBox="0 0 13 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={clsx("mb-4 cursor-pointer", extraStyle)}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M1.07047 9.81656L10.4988 0.388227L12.8555 2.74489L4.60547 10.9949L12.8555 19.2449L10.4988 21.6016L1.07047 12.1732C0.758019 11.8607 0.582494 11.4368 0.582494 10.9949C0.582494 10.553 0.758019 10.1291 1.07047 9.81656Z"
        fill="#6B6969"
      />
    </svg>
  );
};

export default BackIcon;
