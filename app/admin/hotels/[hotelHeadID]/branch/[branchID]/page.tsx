import BackIcon from "@/app/_assets/icons/BackIcon";
import Link from "next/link";

type HotelBrachDetailsProps = {
    params: { branchID: string };
  };
  
  const HotelBrachDetails = async ({ params }: HotelBrachDetailsProps) => {
    const { branchID } = params;
  
    if (!branchID) {
      return <p>Loading...</p>;
    }
  
    return (
      <div>
        <div className="flex items-center gap-5">
        <Link href="/admin/hotels">
        <BackIcon />
        </Link>
        <h1 className="mb-5">Hotel Branch Details</h1>
      </div>
        <p>Hotel ID: {branchID}</p>
      </div>
    );
  };
  
  export default HotelBrachDetails;
  