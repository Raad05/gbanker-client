/* eslint-disable react/prop-types */
const AddedMemberDetails = ({ detail, serial, onStatusUpdate }) => {
  const { code, trxId, centre, group, name, joiningDate, status, approved } =
    detail;

  const updateApproval = () => {
    onStatusUpdate("Approved");
  };
  return (
    <tr>
      <th>{serial}</th>
      <td>{code}</td>
      <td>{trxId}</td>
      <td>{centre}</td>
      <td>{group}</td>
      <td>{name}</td>
      <td>{joiningDate}</td>
      <td>{status}</td>
      <td>
        {approved === "Yes" ? (
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
