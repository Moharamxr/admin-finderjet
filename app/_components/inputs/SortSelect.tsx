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
const SortSelect: React.FC<SelectInputProps> = ({
  extraStyle = "w-full",
  placeholder = "Sort",
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
        <span className="truncate text-suede ps-1">
          {value
            ? options.find((opt) => opt.value === value)?.label
            : placeholder}
        </span>
        <svg
          width="10"
          height="16"
          viewBox="0 0 10 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M8.5745 9.90535L4.9995 13.4887L1.4245 9.90535C1.26758 9.74843 1.05475 9.66028 0.832837 9.66028C0.610919 9.66028 0.39809 9.74843 0.24117 9.90535C0.0842504 10.0623 -0.00390625 10.2751 -0.00390625 10.497C-0.00390625 10.7189 0.0842504 10.9318 0.24117 11.0887L4.40784 15.2554C4.48531 15.3335 4.57747 15.3955 4.67902 15.4378C4.78057 15.4801 4.88949 15.5019 4.9995 15.5019C5.10951 15.5019 5.21844 15.4801 5.31998 15.4378C5.42153 15.3955 5.5137 15.3335 5.59117 15.2554L9.75784 11.0887C9.83554 11.011 9.89717 10.9187 9.93922 10.8172C9.98127 10.7157 10.0029 10.6069 10.0029 10.497C10.0029 10.3871 9.98127 10.2783 9.93922 10.1768C9.89717 10.0753 9.83554 9.98305 9.75784 9.90535C9.68014 9.82765 9.5879 9.76602 9.48638 9.72397C9.38486 9.68192 9.27605 9.66028 9.16617 9.66028C9.05629 9.66028 8.94748 9.68192 8.84596 9.72397C8.74444 9.76602 8.6522 9.82765 8.5745 9.90535ZM1.4245 6.08869L4.9995 2.50535L8.5745 6.08869C8.65197 6.16679 8.74414 6.22879 8.84569 6.2711C8.94724 6.3134 9.05616 6.33518 9.16617 6.33518C9.27618 6.33518 9.3851 6.3134 9.48665 6.2711C9.5882 6.22879 9.68037 6.16679 9.75784 6.08869C9.83594 6.01122 9.89794 5.91905 9.94025 5.8175C9.98255 5.71595 10.0043 5.60703 10.0043 5.49702C10.0043 5.38701 9.98255 5.27809 9.94025 5.17654C9.89794 5.07499 9.83594 4.98282 9.75784 4.90535L5.59117 0.738686C5.5137 0.660579 5.42153 0.598584 5.31998 0.556277C5.21844 0.513969 5.10951 0.492188 4.9995 0.492188C4.88949 0.492187 4.78057 0.513969 4.67902 0.556277C4.57747 0.598584 4.48531 0.660579 4.40784 0.738686L0.24117 4.90535C0.163471 4.98305 0.101838 5.07529 0.0597873 5.17681C0.017737 5.27833 -0.00390625 5.38714 -0.00390625 5.49702C-0.00390625 5.71894 0.0842504 5.93177 0.24117 6.08869C0.39809 6.24561 0.610919 6.33376 0.832837 6.33376C1.05475 6.33376 1.26758 6.24561 1.4245 6.08869Z"
            fill="#6B6969"
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

export default SortSelect;
