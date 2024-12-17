"use client";
import React, { useState } from "react";
import ActionCheckBox from "../inputs/ActionCheckBox";
import { redirect } from "next/navigation";

interface Header {
  key: string;
  label: string;
}

interface Row {
  id: string; // Ensure each row has a unique identifier
  [key: string]: React.ReactNode;
}

interface DynamicTableProps {
  headers: Header[];
  data: Row[];
  type: "hotels" | "airlines" | "airports" | "reports" | "founds"; // Type of table
  showCheckbox?: boolean; 
  redirectedRoute?: string;
}

const DynamicTable: React.FC<DynamicTableProps> = ({
  headers,
  data,
  showCheckbox = true,
  redirectedRoute= "/admin",
  type="hotels",
}) => {
  const [selectedItems, setSelectedItems] = useState<Set<string>>(new Set());

  const handleCheckboxChange = (id: string, isSelected: boolean) => {
    setSelectedItems((prevSelected) => {
      const updated = new Set(prevSelected);
      if (isSelected) {
        updated.add(id);
      } else {
        updated.delete(id);
      }
      return updated;
    });
  };

  // const redirectedRoute = `/admin/${type}/`;

  return (
    <table className="min-w-full divide-y divide-gray-200 rounded-lg overflow-hidden">
      <thead className="bg-[#DAE6F2] text-center ">
        <tr>
          {headers.map((header) => (
            <th
              key={header.key}
              scope="col"
              className="px-6 py-3  text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              {header.label}
            </th>
          ))}
          {showCheckbox && (
            <th
              scope="col"
              className="px-3 py-3  text-xs  font-medium text-gray-500 uppercase tracking-wider"
            >
              Action
            </th>
          )}
        </tr>
      </thead>
      <tbody className="bg-white divide-y divide-gray-200 text-center ">
        {data.length > 0 ? (
          data.map((row) => (
            <tr
              key={row.id}
              className="hover:bg-gray-100 cursor-pointer"
              onClick={() => redirect(`${redirectedRoute}/${type}/${row.id}`)}
            >
              {headers.map((header) => (
                <td
                  key={header.key}
                  className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 "
                >
                  {row[header.key]}
                </td>
              ))}
              {showCheckbox && (
                <td
                  className="px-6 py-4 whitespace-nowrap text-sm text-gray-500"
                  onClick={(e) => e.stopPropagation()}
                >
                  <ActionCheckBox
                    isChecked={selectedItems.has(row.id)}
                    onChange={(isSelected) => handleCheckboxChange(row.id, isSelected)}
                  />
                </td>
              )}
            </tr>
          ))
        ) : (
          <tr>
            <td
              colSpan={headers.length + (showCheckbox ? 1 : 0)}
              className="px-6 py-4 text-center text-sm text-gray-500"
            >
              No data available.
            </td>
          </tr>
        )}
      </tbody>
    </table>
  );
};

export default DynamicTable;
