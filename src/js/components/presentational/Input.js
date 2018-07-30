import React from "react";
import PropTypes from "prop-types";
const Input = ({ value, handleChange }) => (
  <div>
    <textarea rows="20" cols="60"
      className="form-control"
      onChange={handleChange}
      defaultValue={value}
    ></textarea>
  </div>
);
Input.propTypes = {
  value: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired
};
export default Input;