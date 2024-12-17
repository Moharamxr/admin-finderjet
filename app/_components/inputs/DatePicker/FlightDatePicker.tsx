import React, { useState } from "react";

const FlightDatePicker: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState<string | null>(null);

  const handleDateSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setSelectedDate(value);
    console.log("Selected date:", value);
  };

  return (
    <div>
      <label className="block mb-2 text-subtitle font-medium">
        Choose Flight Date
      </label>
      <div className="relative w-full min-w-[30.5rem]">
        {/* <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
          <svg
            className="w-5 h-4 text-gray-500 dark:text-gray-400"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
          </svg>
        </div> */}
        <input
          id="default-datepicker"
          type="date"
          value={selectedDate || ""}
          onChange={handleDateSelect}
          className="bg-white border h-12 border-border text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Select date"
        />
      </div>
    </div>
  );
};

export default FlightDatePicker;
