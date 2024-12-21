import BackIcon from "@/app/_assets/icons/BackIcon";
import PrimaryBtn from "@/app/_components/buttons/PrimaryBtn";
import DataFelid from "@/app/_components/present-data/DataFelid";
import Link from "next/link";
import React from "react";
type AirportDetailsProps = {
  params: {
    airportID: string;
  };
};

const AirportDetails = async ({ params }: AirportDetailsProps) => {
  const { airportID } = await params;
  return (
    <div className=" bg-white p-8 rounded-2xl shadow-sm  space-y-5">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-5">
          <Link href="/admin/hotels">
            <BackIcon />
          </Link>
          <h1 className="mb-5">Airport Headquarters Details {airportID}</h1>
        </div>
        <Link href={`/admin/airports/edit/${airportID}`}>
          <PrimaryBtn bgColor="primary" textColor="white">
            Edit
          </PrimaryBtn>
        </Link>
      </div>
      <div className="space-y-3">
        <h3>Airport information</h3>
        <div className="grid grid-cols-2 gap-4 w-full pb-5">
          <DataFelid label="Airport Name" value="Airport Name" />
          <DataFelid label="Airport code" value="Airport code" />

          <DataFelid label="Contact number" value="Contact number" />
          <DataFelid label="Address" value="Address" />
          <DataFelid label="Primary Email " value="Primary Email " />
        </div>
      </div>
      <div className="space-y-3">
        <h3>Lost and Found Office Details</h3>
        <div className="flex justify-between w-full">
          <DataFelid
            label="Location Office Found & Lost "
            value="Location Office Found & Lost "
          />
          <DataFelid label="Operating Hours " value="Operating Hours " />
          <DataFelid label="Contact number" value="Contact number" />
        </div>
      </div>
      <div className="space-y-3">
        <h3>Officials' data</h3>
        <div className="flex justify-between w-full">
          <DataFelid label="Manager name" value="Manager name " />
          <DataFelid label="Manager Email " value="Manager Email" />
          <DataFelid label="manager phone number " value="098726533" />
        </div>
      </div>
    </div>
  );
};

export default AirportDetails;
