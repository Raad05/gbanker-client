/* eslint-disable react/prop-types */
const AddedMemberDetails = ({ detail, serial }) => {
  const { code, trxId, centre, group, name, joiningDate, status, approved } =
    detail;
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
      <td>{approved}</td>
    </tr>
  );
};

export default AddedMemberDetails;
