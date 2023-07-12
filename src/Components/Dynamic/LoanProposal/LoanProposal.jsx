import { useState } from "react";
import { Link } from "react-router-dom";
import baseaxios from "../../../Axios/baseaxios";
import nodeaxios from "../../../Axios/nodeaxios";
const LoanProposal = () => {
  const loanDetails = [
    {
      id: "01",
      label: "Area",
      options: [
        "Dhaka",
        "Chittagong",
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

  const [data, setData] = useState({});

  const handleInput = (e) => {
    const form = e.target;
    const field = form.name;
    const value = form.value;
    const newData = { ...data };
    newData[field] = value;

    setData(newData);
  };

  const onSave = (e) => {
    e.preventDefault();
    console.log(data);
    const dataBlob = {
      idempotencyKey: Date.now().toString(),
      input: {
        _loanAmount: data.loanAmount,
        _loanId: data.loanId,
        _memberId: data.memberId,
        _packageId: data.packageId
      },
      key: sessionStorage.getItem("address")
    };
    try {
      baseaxios.post("/namespaces/default/apis/LoanApprovalSystem_2.0/invoke/addLoan",
        dataBlob
      ).then((response) => {
        if (response.status == 202) {
          try {
            const nodeData = {
              loanAmount: data.loanAmount,
              loanId: data.loanId,
              memberId: data.memberId,
              packageId: data.packageId
            }

            nodeaxios.post("/loan/createLoan", nodeData);
            alert("Successfully created a new loan");
          } catch (err) {
            console.log(err);
            alert("Failed to create loan");
          }

        }


      })
    } catch (err) {
      alert("Failed to create loan");
    }

    console.log(data);
  };

  return (
    <form onSubmit={onSave} className="Loan-proposal container m-auto">
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
        <div className="form-control">
          <label className="label">
            <span className="label-text font-bold ml-1">
              Office
              <span className="text-red-500">*</span>
            </span>
          </label>
          <select
            onChange={handleInput}
            name="office"
            className="select border border-gray-300 rounded-sm"
          >
            <option disabled selected>
              Please select
            </option>
            {loanDetails[0].options.map((option) => (
              <option value={option} key={option}>
                {option}
              </option>
            ))}
          </select>
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text font-bold ml-1">
              Center
              <span className="text-red-500">*</span>
            </span>
          </label>
          <select
            onChange={handleInput}
            name="center"
            className="select border border-gray-300 rounded-sm"
          >
            <option disabled selected>
              Please select
            </option>
            {loanDetails[1].options.map((option) => (
              <option value={option} key={option}>
                {option}
              </option>
            ))}
          </select>
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text font-bold ml-1">
              Investor
              <span className="text-red-500">*</span>
            </span>
          </label>
          <select
            onChange={handleInput}
            name="investor"
            className="select border border-gray-300 rounded-sm"
          >
            <option disabled selected>
              Please select
            </option>
            {loanDetails[2].options.map((option) => (
              <option value={option} key={option}>
                {option}
              </option>
            ))}
          </select>
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text font-bold ml-1">
              Loan Amount
              <span className="text-red-500">*</span>
            </span>
          </label>
          <input
            onChange={handleInput}
            name="loanAmount"
            type="text"
            placeholder="Type here"
            className="input border border-gray-300 rounded-sm"
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text font-bold ml-1">
              Loan ID
              <span className="text-red-500">*</span>
            </span>
          </label>
          <input
            onChange={handleInput}
            name="loanId"
            type="text"
            placeholder="Type here"
            className="input border border-gray-300 rounded-sm"
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text font-bold ml-1">
              Package ID
              <span className="text-red-500">*</span>
            </span>
          </label>
          <input
            onChange={handleInput}
            name="packageId"
            type="text"
            placeholder="Type here"
            className="input border border-gray-300 rounded-sm"
          />
        </div>
      </div>
      <h3 className="text-2xl my-5 bg-success p-5 text-white font-bold shadow-md">
        Bank Account Info
      </h3>
      <div className="grid grid-cols-3 gap-5 mt-5">
        <div className="form-control">
          <label className="label">
            <span className="label-text font-bold ml-1">
              Member Name
              <span className="text-red-500">*</span>
            </span>
          </label>
          <input
            onChange={handleInput}
            name="memberName"
            type="text"
            placeholder="Type here"
            className="input border border-gray-300 rounded-sm"
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text font-bold ml-1">
              Member ID
              <span className="text-red-500">*</span>
            </span>
          </label>
          <input
            onChange={handleInput}
            name="memberId"
            type="text"
            placeholder="Type here"
            className="input border border-gray-300 rounded-sm"
          />
        </div>
      </div>
      <div className="my-10 flex justify-center">
        <button
          type="submit"
          className="btn bg-info text-white w-20 hover:bg-blue-600"
        >
          Save
        </button>
      </div>
    </form>
  );
};

export default LoanProposal;
