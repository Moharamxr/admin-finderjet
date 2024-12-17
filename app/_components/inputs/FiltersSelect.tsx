"use client";
import clsx from "clsx";
import React, { useState } from "react";
interface SelectInputProps {
  extraStyle?: string;
  value?: string;
  onChange?: (value: string) => void;
  label?: string;
  options: { value: string; label: string }[];
  placeholder?: string;
}
const FiltersSelect: React.FC<SelectInputProps> = ({
  extraStyle = "w-full",
  placeholder = "Filter",
  value,
  onChange,
  label,
  options,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleSelect = (value: string) => {
    if (onChange) onChange(value);
    setIsOpen(false);
  };
  return (
    <div className={clsx(" relative text-suede", extraStyle)}>
      {label && (
        <label className="block mb-2 text-subtitle font-medium">{label}</label>
      )}
      <div
        className={clsx(
          "bg-white border border-border rounded-lg p-2 w-full h-12 focus:ring-1  focus:ring-gray-400",
          "flex items-center justify-between cursor-pointer relative",
          isOpen ? "rounded-b-none border-gray-900" : "rounded-lg"
        )}
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="truncate text-suede">
          {value
            ? options.find((opt) => opt.value === value)?.label
            : placeholder}
        </span>
        <svg
          className={`w-4 h-4 text-suede transition-transform ${
            isOpen ? "rotate-180" : ""
          }`}
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </div>
      {isOpen && (
        <div
          className={
            "absolute left-0 right-0  bg-white border border-t-0 rounded-t-none rounded-lg shadow-lg z-10 " +
            (isOpen ? "border-gray-900" : "border-gray-300")
          }
        >
          {options.map((option) => (
            <div
              key={option.value}
              className="p-2 hover:bg-gray-200 cursor-pointer last:rounded-b-lg"
              onClick={() => handleSelect(option.value)}
            >
              {option.label}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default FiltersSelect;
