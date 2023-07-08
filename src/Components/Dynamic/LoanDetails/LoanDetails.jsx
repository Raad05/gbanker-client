/* eslint-disable react/prop-types */
const LoanDetails = ({ detail }) => {
  const { label, options } = detail;

  return (
    <div className="form-control">
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

export default LoanDetails;
