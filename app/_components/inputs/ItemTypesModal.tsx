"use client";
import React, { useState } from "react";
import PrimaryBtn from "../buttons/PrimaryBtn";

type Option = {
  category: string;
  items: string[];
};

type ItemTypesModalProps = {
  label?: string;
  options: Option[];
  placeholder?: string;
  onSelect?: (selected: string) => void;
};

const ItemTypesModal: React.FC<ItemTypesModalProps> = ({
  label = "Type of Lost Item",
  options,
  placeholder = "Select an item",
  onSelect,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState<string | null>(null);
  const [customItem, setCustomItem] = useState<string>("");

  const handleSelectItem = (item: string) => {
    setSelectedItem(item);
    if (item !== "Other") {
      setIsOpen(false);
      if (onSelect) onSelect(item);
    }
  };

  const handleOtherInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCustomItem(event.target.value);
  };

  const handleDone = () => {
    if (customItem.trim()) {
      setSelectedItem(customItem);
      setIsOpen(false);
      if (onSelect) onSelect(customItem);
    }
  };

  return (
    <div className="w-full">
      {label && <label className="block mb-2 text-subtitle font-medium">{label}</label>}
      <div
        className="bg-white flex justify-between items-center border border-border rounded-md p-5 pe-3 h-12 w-full outline-none hover:border-gray-400 cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-headlines">{selectedItem || placeholder}</span>
        <svg
          width="14"
          height="14"
          viewBox="0 0 14 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M7.0013 1.16406V12.8307M1.16797 6.9974H12.8346"
            stroke="#6B6969"
            strokeWidth="1.5"
            strokeLinejoin="round"
            strokeLinecap="round"
          />
        </svg>
      </div>

      {isOpen && (
        <>
          <div
            className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 z-10"
            onClick={() => setIsOpen(false)}
          ></div>
          <div className="fixed top-1/2 left-[52%] transform -translate-x-[55%] -translate-y-1/2 z-10 bg-white rounded-[20px] border border-border mt-2 w-full max-w-lg p-10 mx-3">
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
            <h3 className="text-center pb-2">{label}</h3>

            <div className="flex flex-col gap-5 max-h-96 overflow-y-auto custom-scroll">
              {options.map(({ category, items }) => (
                <div key={category}>
                  <h4 className="font-medium mb-2">{category}</h4>
                  <div className="flex flex-wrap gap-2">
                    {items.map((item) => (
                      <div
                        key={item}
                        className="p-2 rounded-xl bg-[#F2F3F7] text-subtitle cursor-pointer"
                        onClick={() => handleSelectItem(item)}
                      >
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
              <div
                className="p-2 rounded-xl bg-[#F2F3F7] cursor-pointer w-min"
                onClick={() => handleSelectItem("Other")}
              >
                Other
              </div>
              {selectedItem === "Other" && (
                <div className="flex flex-col gap-2">
                  <input
                    type="text"
                    value={customItem}
                    onChange={handleOtherInputChange}
                    placeholder="Describe the item"
                    className="mt-2  p-2 border border-border rounded-md w-full select-none"
                  />
                 
                  <PrimaryBtn  bgColor="primary" textColor="white" onClick={handleDone} extraStyle="mt-2 me-2" >Done</PrimaryBtn>
                </div>
              )}
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default ItemTypesModal;
