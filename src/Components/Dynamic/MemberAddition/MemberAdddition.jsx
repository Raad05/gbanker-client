import { useState } from "react";
import { Link } from "react-router-dom";
import baseaxios from '../../../Axios/baseaxios';
import nodeaxios from '../../../Axios/nodeaxios';

const MemberAddition = () => {
  const dropdownDetails = [
    {
      id: "01",
      label: "Branch",
      options: [
        "Motijheel",
        "Halishohor",
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
      options: ["Dhaka", "Chittagong", "Rajshahi", "Barishal", "Comilla", "Sylhet"],
    },
    {
      id: "04",
      label: "Country",
      options: ["USA", "Bangladesh", "Canada", "Australia", "China"],
    },
  ];

  const [data, setData] = useState({});

  const handleInput = (e) => {
    const form = e.target;
    const field = form.name;
    const value = form.value;
    const newData = { ...data };
    newData[field] = value;
    newData["approved"] = 0;

    setData(newData);
  };

  const save = (e) => {
    e.preventDefault();
    const dataBlob = {
      idempotencyKey: Date.now().toString(),
      input: {
        _areaName: data.area,
        _branchName: data.branch,
        _centerName: data.center,
        _memberId: data.memberId,
        _name: data.firstName + " " + data.lastName
      },
      key: "0xeb24f49a29341e12f650e8043237815efb67bc27"
    };
    try {
      baseaxios.post("/namespaces/default/apis/MFISystem_2/invoke/addMember",
        dataBlob
      ).then((response) => {
        if (response.status == 202) {
          try {

            nodeaxios.post("/member/createMember", data);
            alert("Successfully created member");
          } catch (err) {
            console.log(err);
            alert("Failed to create member");
          }

        }

      })
    } catch (err) {
      alert("Failed to create member");
    }

    console.log(data);
  };

  return (
    <form onSubmit={save} className="Member-addition container m-auto">
      <div className="text-md my-5 bg-success p-2 text-white shadow-md">
        <p>
          <Link to="/branch-manager-panel">Dashboard</Link> /{" "}
          <Link to="/member-addition" className="link">
            Member Addition
          </Link>{" "}
          /<Link to="/loan-proposal">Loan Proposal</Link>
        </p>
      </div>
      <h3 className="text-2xl my-5 bg-success p-5 text-white font-bold shadow-md">
        Member Details
      </h3>
      <hr />
      <div className="grid grid-cols-3 gap-5 mt-5">
        <div className="form-control">
          <label className="label">
            <span className="label-text font-bold ml-1">
              First Name
              <span className="text-red-500">*</span>
            </span>
          </label>
          <input
            onChange={handleInput}
            name="firstName"
            type="text"
            placeholder="Type here"
            className="input border border-gray-300 rounded-sm"
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text font-bold ml-1">
              Last Name
              <span className="text-red-500">*</span>
            </span>
          </label>
          <input
            onChange={handleInput}
            name="lastName"
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
        <div className="form-control">
          <label className="label">
            <span className="label-text font-bold ml-1">
              Home Address
              <span className="text-red-500">*</span>
            </span>
          </label>
          <input
            onChange={handleInput}
            name="homeAddress"
            type="text"
            placeholder="Type here"
            className="input border border-gray-300 rounded-sm"
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text font-bold ml-1">
              Branch
              <span className="text-red-500">*</span>
            </span>
          </label>
          <select
            onChange={handleInput}
            name="branch"
            className="select border border-gray-300 rounded-sm"
          >
            <option disabled selected>
              Please select
            </option>
            {dropdownDetails[0].options.map((option, idx) => (
              <option value={option} key={idx}>
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
            {dropdownDetails[1].options.map((option, idx) => (
              <option value={option} key={idx}>
                {option}
              </option>
            ))}
          </select>
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text font-bold ml-1">
              Area
              <span className="text-red-500">*</span>
            </span>
          </label>
          <select
            onChange={handleInput}
            name="area"
            className="select border border-gray-300 rounded-sm"
          >
            <option disabled selected>
              Please select
            </option>
            {dropdownDetails[2].options.map((option, idx) => (
              <option value={option} key={idx}>
                {option}
              </option>
            ))}
          </select>
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text font-bold ml-1">
              Country
              <span className="text-red-500">*</span>
            </span>
          </label>
          <select
            onChange={handleInput}
            name="country"
            className="select border border-gray-300 rounded-sm"
          >
            <option disabled selected>
              Please select
            </option>
            {dropdownDetails[3].options.map((option, idx) => (
              <option value={option} key={idx}>
                {option}
              </option>
            ))}
          </select>
        </div>
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
    </form>
  );
};

export default MemberAddition;
