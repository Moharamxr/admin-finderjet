import BackIcon from "@/app/_assets/icons/BackIcon";
import PrimaryBtn from "@/app/_components/buttons/PrimaryBtn";
import FormRow from "@/app/_components/form/FormRow";
import TextInput from "@/app/_components/inputs/TextInput";
import Link from "next/link";
import React from "react";
type AirportDetailsProps = {
  params: {
    airportID: string;
  };
};
const EditAirport = async ({ params }: AirportDetailsProps) => {
  const { airportID } = await params;
  return (
    <div className="flex flex-col gap-5 max-w-6xl">
      <div className="flex items-center gap-5">
        <Link href={`/admin/airports/${airportID}`}>
          <BackIcon />
        </Link>
        <h1 className="mb-5">Edit New Head quarter {airportID}</h1>
      </div>
      <h3>Airport Information</h3>
      <FormRow>
        <TextInput label="Hotel Name" placeholder="Enter hotel name" />
        <TextInput label="Number Contact" placeholder="Number Contact" />
      </FormRow>
      <FormRow>
        <TextInput label="Primary Email" placeholder="Enter Primary Email" />
        <TextInput label="Address" placeholder="Address" />
      </FormRow>
      <div className="flex flex-row-reverse gap-5">
        <PrimaryBtn bgColor="discard" textColor="primary" extraStyle="">
          Discard
        </PrimaryBtn>
        <PrimaryBtn bgColor="primary" textColor="white" extraStyle="">
          Save
        </PrimaryBtn>
      </div>
    </div>
  );
};

export default EditAirport;
