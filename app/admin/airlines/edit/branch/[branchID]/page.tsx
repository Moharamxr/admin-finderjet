import BackIcon from "@/app/_assets/icons/BackIcon";
import FormRow from "@/app/_components/form/FormRow";
import TextInput from "@/app/_components/inputs/TextInput";
import Link from "next/link";
import React from "react";


type AirlineDetailsProps = {
  params: { branchID: string };
};
const EditNewBranch = async ({ params }: AirlineDetailsProps) => {
  const { branchID } = await params;
  return (
    <div className="flex flex-col gap-5">
      <div className="flex items-center gap-5">
        <Link href="/admin/airlines">
        <BackIcon />
        </Link>
        <h1 className="mb-5">Edit New Airline Branch {branchID}</h1>
      </div>
      <h3>Airline Information</h3>
      <FormRow>
        <TextInput label="Airline Name" placeholder="Enter Airline name" />
        <TextInput label="Number Contact" placeholder="Number Contact" />
      </FormRow>
      <FormRow>
        <TextInput label="Primary Email" placeholder="Enter Primary Email" />
        <TextInput label="Address" placeholder="Address" />
      </FormRow>
    </div>
  );
};

export default EditNewBranch;
