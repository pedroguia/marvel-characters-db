import React from "react";
import PropTypes from "prop-types";
import "./_style.scss";

const Button = ({ className, dataTestId, label, onClick }) => (
  <button
    type="button"
    className={`custom-button ${className}`}
    onClick={onClick}
    data-testid={dataTestId}
  >
    {label}
  </button>
);

Button.propTypes = {
  className: PropTypes.string,
  dataTestId: PropTypes.string,
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Button;
