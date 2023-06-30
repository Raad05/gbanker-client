/* eslint-disable react/prop-types */
const DropdownDetails = ({ info }) => {
  const { label, options } = info;
  return (
    <div className="Dropdown-details form-control">
      <label className="label">
        <span className="label-text font-bold ml-1">
          {label}
          <span className="text-red-500">*</span>
        </span>
      </label>
      <select className="select border border-gray-300 rounded-sm">
        <option disabled selected>
          Please select
        </option>
        {options.map((option) => (
          <option key={option}>{option}</option>
        ))}
      </select>
    </div>
  );
};

export default DropdownDetails;
