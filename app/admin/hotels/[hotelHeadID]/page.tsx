import BackIcon from "@/app/_assets/icons/BackIcon";
import PrimaryBtn from "@/app/_components/buttons/PrimaryBtn";
import DataFelid from "@/app/_components/present-data/DataFelid";
import DynamicTable from "@/app/_components/tables/DynamicTable";
import { hotelTableData, hotelTableHeaders } from "@/app/_data/static-data";
import Link from "next/link";

type HotelDetailsProps = {
  params: { hotelHeadID: string };
};

const HotelDetails = async ({ params }: HotelDetailsProps) => {
  const { hotelHeadID } = await params;

  if (!hotelHeadID) {
    return <p>Loading...</p>;
  }

  return (
    <div className="space-y-5 max-w-5xl">
      <div className=" bg-white p-8 rounded-2xl shadow-sm  space-y-5">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-5">
            <Link href="/admin/hotels">
              <BackIcon />
            </Link>
            <h1 className="mb-5">Head Quarters Details {hotelHeadID}</h1>
          </div>
          <Link href={`/admin/hotels/edit/head-quarter/${hotelHeadID}`}>
            <PrimaryBtn bgColor="primary" textColor="white">
              Edit
            </PrimaryBtn>
          </Link>
        </div>
        <div className="space-y-3">
          <h3>hotel information</h3>
          <div className="flex justify-between w-full">
            <DataFelid label="Contact number" value="Contact number" />
            <DataFelid label="Address" value="Address" />
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
      </div>
      <h3>Hotel Branches</h3>

      <DynamicTable
        type="hotels"
        showCheckbox={false}
        headers={hotelTableHeaders}
        data={hotelTableData}
      />
    </div>
  );
};

export default HotelDetails;
