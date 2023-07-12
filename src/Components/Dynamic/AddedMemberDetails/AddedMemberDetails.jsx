/* eslint-disable react/prop-types */
import baseaxios from '../../../Axios/baseaxios';
import nodeaxios from '../../../Axios/nodeaxios';
import { useEffect, useState } from 'react';
const AddedMemberDetails = ({ detail, serial, onStatusUpdate }) => {


  const { approved, area, branch, center, country, firstName, lastName, homeAddress, memberId } = detail;
  const updateApproval = () => {
    const dataBlob = {
      idempotencyKey: Date.now().toString(),
      input: {
        _memberId: memberId,
      },
      key: sessionStorage.getItem("address")
    };
    try {
      baseaxios.post("/namespaces/default/apis/MFISystem_2/invoke/approveMember",
        dataBlob
      ).then((response) => {
        if (response.status == 202) {
          try {

            nodeaxios.post("/member/approveMember", {
              memberId: memberId
            }).then((response) => {
              alert("Approved!");
            }
            );

          } catch (err) {
            console.log(err);
            alert("Failed to approve member");
          }

        }
      })
    } catch (err) {
      alert("Failed to approve member");
    }
  };

  return (
    <tr>
      <th>{serial}</th>
      <td>{firstName}</td>
      <td>{lastName}</td>
      <td>{memberId}</td>
      <td>{homeAddress}</td>
      <td>{branch}</td>
      <td>{center}</td>
      <td>{area}</td>
      <td>{country}</td>
      <td>
        {approved === true ? (
          <p className="p-2">{approved}</p>
        ) : (
          <button
            onClick={updateApproval}
            className="bg-blue-400 p-2 rounded text-white"
          >
            Approve
          </button>
        )}
      </td>
    </tr>
  );
};

export default AddedMemberDetails;
