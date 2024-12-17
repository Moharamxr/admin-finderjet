import BackIcon from "@/app/_assets/icons/BackIcon";
import TextInput from "@/app/_components/inputs/TextInput";
import Link from "next/link";
import React from "react";

const FormRow = ({ children }: { children: React.ReactNode }) => (
  <div className="flex md:flex-row flex-col justify-between items-center gap-10">
    {children}
  </div>
);

const AddNewBranch = () => {
  return (
    <div className="flex flex-col gap-5">
      <div className="flex items-center gap-5">
        <Link href="/admin/hotels">
        <BackIcon />
        </Link>
        <h1 className="mb-5">Add New Hotel Branch</h1>
      </div>
      <h3>Hotel Information</h3>
      <FormRow>
        <TextInput label="Hotel Name" placeholder="Enter hotel name" />
        <TextInput label="Number Contact" placeholder="Number Contact" />
      </FormRow>
      <FormRow>
        <TextInput label="Primary Email" placeholder="Enter Primary Email" />
        <TextInput label="Address" placeholder="Address" />
      </FormRow>
    </div>
  );
};

export default AddNewBranch;
