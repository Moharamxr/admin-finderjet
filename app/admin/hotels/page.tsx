import React from "react";
import PlusIcon from "@/app/_assets/icons/PlusIcon";
import PrimaryBtn from "@/app/_components/buttons/PrimaryBtn";
import FiltersSelect from "@/app/_components/inputs/FiltersSelect";
import SortSelect from "@/app/_components/inputs/SortSelect";
import DynamicTable from "@/app/_components/tables/DynamicTable";
import { hotelTableHeaders, hotelTableData } from "@/app/_data/static-data";
import Link from "next/link";

const Hotels: React.FC = () => {
  return (
    <div className="overflow-auto min-h-screen">
      <h1 className="text-4xl mb-5">Hotel's Head Quarters Management</h1>
      <div className="flex flex-row-reverse gap-3 mb-5">
        <Link href={"/admin/hotels/add/head-quarter"}>
          <PrimaryBtn extraStyle="flex items-center gap-2 font-normal text-sm">
            <span>Add Hotel</span>
            <PlusIcon />
          </PrimaryBtn>
        </Link>
        <FiltersSelect
          options={[
            { value: "All", label: "All" },
            { value: "Active", label: "Active" },
            { value: "Inactive", label: "Inactive" },
          ]}
          extraStyle="w-20"
        />
        <SortSelect
          options={[
            { value: "Name", label: "Name" },
            { value: "Location", label: "Location" },
          ]}
          extraStyle="w-20"
        />
      </div>
      <DynamicTable headers={hotelTableHeaders} data={hotelTableData} type="hotels" redirectedRoute='/admin/hotels' />
    </div>
  );
};

export default Hotels;
