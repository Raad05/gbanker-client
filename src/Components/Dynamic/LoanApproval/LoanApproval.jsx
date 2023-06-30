import { Link } from "react-router-dom";

const LoanApproval = () => {
  return (
    <div className="Loan-approval m-auto">
      <div className="text-md my-5 bg-success p-2 text-white shadow-md">
        <p>
          <Link to="/dashboard">Dashboard</Link> /{" "}
          <Link to="/member-addition" className="link">
            Member Addition
          </Link>{" "}
          / <Link to="/member-approval">Member Approval</Link> /{" "}
          <Link to="/loan-proposal">Loan Proposal</Link> /{" "}
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
            <th className="bg-success text-white">Office Code</th>
            <th className="bg-success text-white">Centre Code</th>
            <th className="bg-success text-white">Member Info</th>
            <th className="bg-success text-white">Product Code</th>
            <th className="bg-success text-white">Puepose Name</th>
            <th className="bg-success text-white">Principle Loan</th>
            <th className="bg-success text-white">Interest Rate</th>
            <th className="bg-success text-white">Interest Charge</th>
            <th className="bg-success text-white">Dis.Amt.Wi.IC</th>
            <th className="bg-success text-white">Loan Inst.</th>
            <th className="bg-success text-white">Interest Inst.</th>
            <th className="bg-success text-white">Installment Total</th>
            <th className="bg-success text-white">BSB</th>
            <th className="bg-success text-white">Account No.</th>
            <th className="bg-success text-white">Ins.StartDate</th>
            <th className="bg-success text-white">Disburse Date</th>
            <th className="bg-success text-white">Status</th>
          </tr>
        </thead>
        <tbody>
          <td className="bg-gray-200">0031</td>
          <td className="bg-gray-200">0001</td>
          <td className="bg-gray-200">003100300016 - Dan Khan</td>
          <td className="bg-gray-200">01.01, General Loan Weekly</td>
          <td className="bg-gray-200">Beauty items</td>
          <td className="bg-gray-200">1000.00</td>
          <td className="bg-gray-200">12.00</td>
          <td className="bg-gray-200">0.00</td>
          <td className="bg-gray-200">1000.0</td>
          <td className="bg-gray-200">40</td>
          <td className="bg-gray-200">1.50</td>
          <td className="bg-gray-200">41.50</td>
          <td className="bg-gray-200"></td>
          <td className="bg-gray-200"></td>
          <td className="bg-gray-200">13-Oct-2022</td>
          <td className="bg-gray-200"></td>
          <td className="bg-gray-200">Not Disbursed</td>
        </tbody>
      </table>
    </div>
  );
};

export default LoanApproval;
