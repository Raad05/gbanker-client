// eslint-disable-next-line react/prop-types
const TextDetails = ({ detail }) => {
  return (
    <div className="form-control">
      <label className="label">
        <span className="label-text font-bold ml-1">
          {detail}
          <span className="text-red-500">*</span>
        </span>
      </label>
      <input
        type="text"
        placeholder="Type here"
        className="input border border-gray-300 rounded-sm"
      />
    </div>
  );
};

export default TextDetails;
