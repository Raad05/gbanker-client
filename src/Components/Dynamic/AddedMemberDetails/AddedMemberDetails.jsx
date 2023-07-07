/* eslint-disable react/prop-types */
const AddedMemberDetails = ({ detail, serial, onStatusUpdate }) => {
  const { code, trxId, centre, group, name, joiningDate, status, approved } =
    detail;

  const updateApproval = (e) => {
    const form = e.target;
    const updated = form.value;
    onStatusUpdate(updated);
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
          <select onChange={updateApproval} className="p-2" name="Approval">
            <option value={approved}>{approved}</option>
            <option value="Yes">Yes</option>
          </select>
        )}
      </td>
    </tr>
  );
};

export default AddedMemberDetails;
