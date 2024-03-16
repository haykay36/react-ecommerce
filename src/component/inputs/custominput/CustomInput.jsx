/* eslint-disable react/prop-types */
import './inputs.css';

const CustomInput = ({ label, placeholder, htmlFor, type }) => {
  return (
    <div className="input-cont">
      <label htmlFor={htmlFor}>{label}</label>
      <input type={type} placeholder={placeholder} />
    </div>
  );
};

export default CustomInput;
