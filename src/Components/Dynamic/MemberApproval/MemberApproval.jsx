import { Link } from "react-router-dom";
import AddedMemberDetails from "../AddedMemberDetails/AddedMemberDetails";
import { useState, useEffect } from "react";
import baseaxios from '../../../Axios/baseaxios';
import nodeaxios from '../../../Axios/nodeaxios';

const MemberApproval = () => {
  // const addedMemberDetails = [
  //   {
  //     code: "ABC123",
  //     trxId: "00001",
  //     centre: "A",
  //     group: "Group 1",
  //     name: "John Doe",
  //     joiningDate: "2022-05-10",
  //     status: "Active",
  //     approved: "Yes",
  //   },
  //   {
  //     code: "DEF456",
  //     trxId: "00002",
  //     centre: "B",
  //     group: "Group 2",
  //     name: "Jane Smith",
  //     joiningDate: "2021-09-15",
  //     status: "Active",
  //     approved: "Yes",
  //   },
  //   {
  //     code: "GHI789",
  //     trxId: "00003",
  //     centre: "C",
  //     group: "Group 1",
  //     name: "Alice Johnson",
  //     joiningDate: "2023-01-03",
  //     status: "Inactive",
  //     approved: "No",
  //   },
  //   {
  //     code: "JKL012",
  //     trxId: "00004",
  //     centre: "A",
  //     group: "Group 3",
  //     name: "Bob Anderson",
  //     joiningDate: "2022-07-22",
  //     status: "Active",
  //     approved: "Yes",
  //   },
  //   {
  //     code: "MNO345",
  //     trxId: "00005",
  //     centre: "B",
  //     group: "Group 2",
  //     name: "Sarah Davis",
  //     joiningDate: "2023-04-18",
  //     status: "Active",
  //     approved: "Yes",
  //   },
  //   {
  //     code: "PQR678",
  //     trxId: "00006",
  //     centre: "C",
  //     group: "Group 3",
  //     name: "Michael Wilson",
  //     joiningDate: "2022-11-30",
  //     status: "Inactive",
  //     approved: "No",
  //   },
  //   {
  //     code: "STU901",
  //     trxId: "00007",
  //     centre: "A",
  //     group: "Group 1",
  //     name: "Emily Thompson",
  //     joiningDate: "2023-02-07",
  //     status: "Active",
  //     approved: "Yes",
  //   },
  //   {
  //     code: "VWX234",
  //     trxId: "00008",
  //     centre: "B",
  //     group: "Group 2",
  //     name: "David Lee",
  //     joiningDate: "2022-08-25",
  //     status: "Active",
  //     approved: "Yes",
  //   },
  //   {
  //     code: "YZA567",
  //     trxId: "00009",
  //     centre: "C",
  //     group: "Group 3",
  //     name: "Olivia Moore",
  //     joiningDate: "2023-05-13",
  //     status: "Active",
  //     approved: "Yes",
  //   },
  //   {
  //     code: "BCD890",
  //     trxId: "00010",
  //     centre: "A",
  //     group: "Group 1",
  //     name: "Daniel Johnson",
  //     joiningDate: "2022-10-11",
  //     status: "Active",
  //     approved: "Yes",
  //   },
  // ];

  const [addedMemberDetails, setAddedMemberDetails] = useState([]);
  const [approved, setApproved] = useState(false);
  let serial = 1;

  const [updatedStatus, setUpdatedStatus] = useState(null);

  const onStatusUpdate = (status) => {
    setUpdatedStatus(status);
  };


  const getMembers = async () => {
    try {
      nodeaxios.post("/member/getMembers").then((response) => {
        console.log(response.data.members);

        setAddedMemberDetails(response.data.members);
      });
    } catch (err) {
      alert(err.message);
    }


  }

  const fetchApproveDetails = (memberId) => {
    const dataBlob = {
      idempotencyKey: Date.now().toString(),
      input: {
        _memberId: memberId,
      },
      key: sessionStorage.getItem("address")
    };
    try {
      baseaxios.post("/namespaces/default/apis/MFISystem_2/query/isMemberApproved", dataBlob).then((response) => {
        if (response.data.output === "true") {
          console.log(response.data.output);
          setApproved(response.data.output);
        }
      })

    } catch (err) {
      return memberApproved;
    }

  }
  useEffect(() => {
    getMembers();
  }, []);

  return (
    <div className="Member-approval container m-auto overflow-x-auto">
      <div className="text-md my-5 bg-success p-2 text-white shadow-md">
        <p>
          <Link to="/area-manager-panel">Dashboard</Link> /{" "}
          <Link to="/member-approval" className="link">
            Member Approval
          </Link>{" "}
          /<Link to="/loan-approval">Loan Approval</Link>
        </p>
      </div>
      <h3 className="text-2xl my-5 bg-success p-5 text-white font-bold shadow-md">
        Member Approval
      </h3>
      <table className="table table-zebra">
        <thead>
          <tr>
            <th className="bg-success text-white">SL</th>
            <th className="bg-success text-white">First Name</th>
            <th className="bg-success text-white">Last Name</th>
            <th className="bg-success text-white">Member ID</th>
            <th className="bg-success text-white">Home Address</th>
            <th className="bg-success text-white">Branch</th>
            <th className="bg-success text-white">Center</th>
            <th className="bg-success text-white">Area</th>
            <th className="bg-success text-white">Country</th>
            <th className="bg-success text-white">Approved</th>
          </tr>
        </thead>
        <tbody>
          {addedMemberDetails.map((detail, idx) => (

            <AddedMemberDetails
              key={idx}
              detail={detail}
              onStatusUpdate={onStatusUpdate}
              approvedStatus={approved}
              serial={serial++}
            ></AddedMemberDetails>


          ))}
        </tbody>
      </table>

    </div>
  );
};

export default MemberApproval;
