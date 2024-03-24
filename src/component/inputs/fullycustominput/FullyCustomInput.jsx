/* eslint-disable react/prop-types */
import "./fullycustomInput.css";

const FullyCustomInput = ({ label, placeholder, htmlFor, type, style }) => {
  return (
    <div className="input-contain">
      <label htmlFor={htmlFor}>{label}</label>
      <input type={type} placeholder={placeholder} />
    </div>
  );
};

export default FullyCustomInput;
