"use client";
import React from "react";

interface TextInputProps {
  type?: string;
  className?: string;
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  label?: string;
}

const TextInput: React.FC<TextInputProps> = ({
  type = "text",
  className = "bg-white border border-border rounded-md p-2 h-12 w-full outline-none focus:border-gray-400 transform duration-300 transition-colors",
  placeholder = "",
  value,
  onChange,
  label,
}) => {
  // const id = useId();

  return (
    <div className="w-full">
      {label && (
        <label  className="block mb-2 text-subtitle font-medium">
          {label}
        </label>
      )}
      <input
        type={type}
        className={className}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default TextInput;
