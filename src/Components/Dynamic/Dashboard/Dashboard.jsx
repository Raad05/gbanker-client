import { Link } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="Dashboard container m-auto">
      <div className="text-md my-5 bg-success p-2 text-white shadow-md">
        <p>
          <Link to="/dashboard" className="link">
            Dashboard
          </Link>{" "}
          / <Link to="/member-addition">Member Addition</Link> /{" "}
          <Link to="/member-approval">Member Approval</Link> /{" "}
          <Link to="/loan-proposal">Loan Proposal</Link> /{" "}
          <Link to="/loan-approval">Loan Approval</Link>
        </p>
      </div>
      <h3 className="text-2xl my-5 bg-success p-5 text-white font-bold shadow-md">
        Dashboard
      </h3>
      <h1 className="text-9xl text-gray-300 text-center mt-60">Empty</h1>
    </div>
  );
};

export default Dashboard;
