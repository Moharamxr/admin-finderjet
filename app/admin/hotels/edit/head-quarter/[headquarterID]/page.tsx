import BackIcon from "@/app/_assets/icons/BackIcon";
import PrimaryBtn from "@/app/_components/buttons/PrimaryBtn";
import TextInput from "@/app/_components/inputs/TextInput";
import Link from "next/link";
import React from "react";
const FormRow = ({ children }: { children: React.ReactNode }) => (
  <div className="flex md:flex-row flex-col justify-between items-center gap-10">
    {children}
  </div>
);
type HotelDetailsProps = {
  params: { headquarterID: string };
};
const EditNewHeadQuarter = async ({ params }: HotelDetailsProps) => {
  const { headquarterID } = await params;
  return (
    <div className="flex flex-col gap-5 max-w-6xl">
      <div className="flex items-center gap-5">
        <Link href={`/admin/hotels/${headquarterID}`}>
          <BackIcon />
        </Link>
        <h1 className="mb-5">Edit New Head quarter {headquarterID}</h1>
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

export default EditNewHeadQuarter;