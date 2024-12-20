"use client";
import React, { useEffect, useState } from "react";
import clsx from "clsx";

interface ActionCheckBoxProps {
  isChecked?: boolean;
  onChange?: (isChecked: boolean) => void;
}

const ActionCheckBox: React.FC<ActionCheckBoxProps> = ({
  isChecked = false,
  onChange = () => {},
}) => {
  const [checked, setChecked] = useState(isChecked);

  useEffect(() => {
    setChecked(isChecked);
  }, [isChecked]);

  const handleClick = () => {
    const newChecked = !checked;
    setChecked(newChecked);
    onChange(newChecked);
  };

  return (
    <div
      role="checkbox"
      aria-checked={checked}
      tabIndex={0}
      className={clsx(
        "w-6 h-6 border-gray-200 border-2 rounded-lg  hover:border-green-500 flex items-center justify-center transition-all duration-200",
        checked ? "bg-green-500" : "bg-white",
        
      )}
      onClick={handleClick}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") handleClick();
      }}
    >
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={clsx("w-4 h-4")}
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M14.3634 3.4064C14.5508 3.59393 14.6562 3.84824 14.6562 4.1134C14.6562 4.37857 14.5508 4.63287 14.3634 4.8204L6.86803 12.3157C6.76898 12.4148 6.65138 12.4934 6.52195 12.547C6.39252 12.6006 6.2538 12.6282 6.1137 12.6282C5.9736 12.6282 5.83488 12.6006 5.70545 12.547C5.57602 12.4934 5.45842 12.4148 5.35937 12.3157L1.63537 8.5924C1.53986 8.50015 1.46367 8.38981 1.41126 8.26781C1.35886 8.1458 1.33127 8.01458 1.33012 7.8818C1.32896 7.74902 1.35426 7.61734 1.40454 7.49445C1.45483 7.37155 1.52908 7.2599 1.62297 7.16601C1.71686 7.07211 1.82852 6.99786 1.95141 6.94758C2.07431 6.8973 2.20599 6.872 2.33877 6.87315C2.47155 6.8743 2.60277 6.90189 2.72477 6.9543C2.84677 7.00671 2.95712 7.08289 3.04937 7.1784L6.11337 10.2424L12.9487 3.4064C13.0416 3.31347 13.1518 3.23976 13.2732 3.18946C13.3946 3.13917 13.5247 3.11328 13.656 3.11328C13.7874 3.11328 13.9175 3.13917 14.0389 3.18946C14.1602 3.23976 14.2705 3.31347 14.3634 3.4064Z"
          fill={checked ? "#ffff" : "transparent"}
        />
      </svg>
    </div>
  );
};

export default ActionCheckBox;
