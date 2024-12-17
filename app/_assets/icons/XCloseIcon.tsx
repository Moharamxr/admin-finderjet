import React from "react";

const XCloseIcon = ({
  setIsOpen,
}: {
  setIsOpen: (isOpen: boolean) => void;
}) => {
  return (
    <svg
      width="11"
      height="11"
      viewBox="0 0 11 11"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="absolute top-5 left-5 cursor-pointer"
      onClick={() => setIsOpen(false)}
    >
      <path
        d="M9.37479 1.12479L1.12521 9.37437M1.12521 1.12479L9.37479 9.37437"
        stroke="#1E1E1E"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default XCloseIcon;
