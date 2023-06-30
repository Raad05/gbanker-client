import { Link } from "react-router-dom";
import DropdownDetails from "../DropdownDetails/DropdownDetails";
import TextDetails from "../TextDetails/TextDetails";

const MemberAddition = () => {
  const dropdownDetails = [
    {
      id: "01",
      label: "Group",
      options: [
        "0001",
        "0002",
        "0003",
        "0004",
        "0005",
        "0006",
        "0007",
        "0008",
        "0009",
      ],
    },
    {
      id: "02",
      label: "Centre",
      options: ["Centre 1", "Centre 2", "Centre 3", "Centre 4", "Centre 5"],
    },
    {
      id: "03",
      label: "State",
      options: ["Dhaka", "Rajshahi", "Barishal", "Comilla", "Sylhet"],
    },
    {
      id: "04",
      label: "Country",
      options: ["USA", "Bangladesh", "Canada", "Australia", "China"],
    },
  ];

  const textDetails = ["First name", "Last name", "Home Address"];

  return (
    <div className="Member-addition container m-auto">
      <div className="text-md my-5 bg-success p-2 text-white shadow-md">
        <p>
          <Link to="/dashboard">Dashboard</Link> /{" "}
          <Link to="/member-addition" className="link">
            Member Addition
          </Link>{" "}
          / <Link to="/member-approval">Member Approval</Link> /{" "}
          <Link to="/loan-proposal">Loan Proposal</Link> /{" "}
          <Link to="/loan-approval">Loan Approval</Link>
        </p>
      </div>
      <h3 className="text-2xl my-5 bg-success p-5 text-white font-bold shadow-md">
        Member Details
      </h3>
      <hr />
      <div className="grid grid-cols-3 gap-5 mt-5">
        {textDetails.map((detail, idx) => (
          <TextDetails key={idx} detail={detail}></TextDetails>
        ))}
        {dropdownDetails.map((detail, idx) => (
          <DropdownDetails key={idx} info={detail}></DropdownDetails>
        ))}
      </div>
      <h3 className="text-2xl my-5 bg-success p-5 text-white font-bold shadow-md">
        Document Upload
      </h3>
      <div className="flex flex-col">
        <h6 className="text-xs font-bold">Member Image(Max Size 100 kb)</h6>
        <input
          type="file"
          className="file-input rounded border border-gray-300 my-2 mb-5 file-input-sm file-input-ghost w-full max-w-xs"
        />
        <h6 className="text-xs font-bold">Passport Image(Max Size 100 kb)</h6>
        <input
          type="file"
          className="file-input rounded border border-gray-300 my-2 file-input-sm file-input-ghost w-full max-w-xs"
        />
      </div>
      <div className="my-5 flex justify-center">
        <button
          type="submit"
          className="btn bg-info text-white w-20 hover:bg-blue-600"
        >
          Save
        </button>
      </div>
    </div>
  );
};

export default MemberAddition;
