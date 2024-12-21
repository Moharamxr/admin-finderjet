import BackIcon from "@/app/_assets/icons/BackIcon";
import Link from "next/link";

type AirlineBrachDetailsProps = {
  params: { branchID: string };
};

const AirlineBrachDetails = async ({ params }: AirlineBrachDetailsProps) => {
  const { branchID } = params;

  if (!branchID) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <div className="flex items-center gap-5">
        <Link href="/admin/airlines">
          <BackIcon />
        </Link>
        <h1 className="mb-5">Airline Branch Details</h1>
      </div>
      <p>Airline ID: {branchID}</p>
    </div>
  );
};

export default AirlineBrachDetails;
