import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main/Main";
import Login from "../Components/Dynamic/Login/Login";
import MemberAddition from "../Components/Dynamic/MemberAddition/MemberAdddition";
import MemberApproval from "../Components/Dynamic/MemberApproval/MemberApproval";
import LoanProposal from "../Components/Dynamic/LoanProposal/LoanProposal";
import LoanApproval from "../Components/Dynamic/LoanApproval/LoanApproval";
import AdminDashboard from "../Components/Dynamic/Dashboard/AreaManagerDashboard";
import AreaManagerDashboard from "../Components/Dynamic/Dashboard/AreaManagerDashboard";
import BranchManagerDashboard from "../Components/Dynamic/Dashboard/BranchManagerDashboard";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Login></Login>,
      },
      {
        path: "/admin-dashboard",
        element: <AdminDashboard></AdminDashboard>,
      },
      {
        path: "/member-addition",
        element: <MemberAddition></MemberAddition>,
      },
      {
        path: "/member-approval",
        element: <MemberApproval></MemberApproval>,
      },
      {
        path: "/loan-proposal",
        element: <LoanProposal></LoanProposal>,
      },
      {
        path: "/loan-approval",
        element: <LoanApproval></LoanApproval>,
      },
      {
        path: "/area-manager-panel",
        element: <AreaManagerDashboard></AreaManagerDashboard>,
      },
      {
        path: "/branch-manager-panel",
        element: <BranchManagerDashboard></BranchManagerDashboard>,
      },
    ],
  },
]);
