import { Link } from "react-router-dom";

const LoanApproval = () => {
  return (
    <div className="Loan-approval m-auto">
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
            <th className="bg-success text-white">Office</th>
            <th className="bg-success text-white">Centre</th>
            <th className="bg-success text-white">Member Name</th>
            <th className="bg-success text-white">Member ID</th>
            <th className="bg-success text-white">Loan Amount</th>
            <th className="bg-success text-white">Loan ID</th>
            <th className="bg-success text-white">Package ID</th>
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
        </tbody>
      </table>
    </div>
  );
};

export default LoanApproval;
