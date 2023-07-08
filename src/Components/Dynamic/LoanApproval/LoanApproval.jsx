import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

import nodeaxios from "../../../Axios/nodeaxios";
import LoanData from "../LoanData/LoanData";

const LoanApproval = () => {
  const [loans, setLoans] = useState([]);


  useEffect(() => {
    nodeaxios.post("/loan/getLoans").then((response) => {
      setLoans(response.data.loans)
    })
  }, []);
  return (
    <div className="Loan-approval m-auto container">
      <div className="text-md my-5 bg-success p-2 text-white shadow-md">
        <p>
          <Link to="/area-manager-panel">Dashboard</Link> /{" "}
          <Link to="/member-approval">Member Approval</Link> /{" "}
          <Link to="/loan-approval" className="link">
            Loan Approval
          </Link>
        </p>
      </div>
      <h3 className="text-2xl my-5 bg-success p-5 text-white font-bold shadow-md">
        Loan Disbursement List
      </h3>
      <table className="table table-zebra">
        {/* head */}
        <thead>
          <tr>
            <th className="bg-success text-white">Loan Amount</th>
            <th className="bg-success text-white">Loan ID</th>
            <th className="bg-success text-white">Member ID</th>
            <th className="bg-success text-white">Package ID</th>
            <th className="bg-success text-white">Approved</th>
          </tr>
        </thead>
        <tbody>
          {
            loans.map((loan, idx) =>
              <LoanData key={idx} loan={loan}></LoanData>
            )
          }
        </tbody>
      </table>
    </div>
  );
};

export default LoanApproval;
