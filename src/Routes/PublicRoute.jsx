import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main/Main";
import Login from "../Components/Dynamic/Login/Login";
import MemberAddition from "../Components/Dynamic/MemberAddition/MemberAdddition";
import MemberApproval from "../Components/Dynamic/MemberApproval/MemberApproval";
import Dashboard from "../Components/Dynamic/Dashboard/Dashboard";
import LoanProposal from "../Components/Dynamic/LoanProposal/LoanProposal";
import LoanApproval from "../Components/Dynamic/LoanApproval/LoanApproval";

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
        path: "/dashboard",
        element: <Dashboard></Dashboard>,
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
    ],
  },
]);
