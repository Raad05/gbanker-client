import { Link } from "react-router-dom";
import LoanDetails from "../LoanDetails/LoanDetails";
import TextLoanDetails from "../TextLoanDetails/TextLoanDetails";

const LoanProposal = () => {
  const loanDetails = [
    {
      id: "01",
      label: "Office",
      options: [
        "Office-1",
        "Office-2",
        "Office-3",
        "Office-4",
        "Office-5",
        "Office-6",
        "Office-7",
        "Office-8",
        "Office-9",
      ],
    },
    {
      id: "02",
      label: "Centre",
      options: ["Centre 1", "Centre 2", "Centre 3", "Centre 4", "Centre 5"],
    },
    {
      id: "03",
      label: "Investor",
      options: [
        "Investor 1",
        "Investor 2",
        "Investor 3",
        "Investor 4",
        "Investor 5",
      ],
    },
    {
      id: "04",
      label: "Product",
      options: [
        "Product-1",
        "Product-2",
        "Product-3",
        "Product-4",
        "Product-5",
      ],
    },
    {
      id: "05",
      label: "Transaction type",
      options: ["Trx-1", "Trx-2", "Trx-3", "Trx-4", "Trx-5"],
    },
  ];
  const textLoanDetails = ["Account Name", "BSB", "Account Number"];

  return (
    <div className="Loan-proposal container m-auto">
      <div className="text-md my-5 bg-success p-2 text-white shadow-md">
        <p>
          <Link to="/branch-manager-panel">Dashboard</Link> /{" "}
          <Link to="/member-addition">Member Addition</Link> /
          <Link to="/loan-proposal" className="link">
            Loan Proposal
          </Link>
        </p>
      </div>
      <h3 className="text-2xl my-5 bg-success p-5 text-white font-bold shadow-md">
        Loan Proposal
      </h3>
      <div className="grid grid-cols-3 gap-5 mt-5">
        {loanDetails.map((detail, idx) => (
          <LoanDetails key={idx} detail={detail}></LoanDetails>
        ))}
        <TextLoanDetails detail="Loan Purpose"></TextLoanDetails>
      </div>
      <h3 className="text-2xl my-5 bg-success p-5 text-white font-bold shadow-md">
        Bank Account Info
      </h3>
      <div className="grid grid-cols-3 gap-5 mt-5">
        {textLoanDetails.map((detail, idx) => (
          <TextLoanDetails key={idx} detail={detail}></TextLoanDetails>
        ))}
      </div>
      <div className="my-10 flex justify-center">
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

export default LoanProposal;
