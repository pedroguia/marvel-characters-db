import { memo } from "react";
import PropTypes from "prop-types";
import "./_style.scss";

const SelectField = ({ dataTestId, label, name, onChange, options, value }) => (
  <div className="select-field" data-testid={dataTestId}>
    {label && (
      <label htmlFor={name} aria-label="label">
        {label}
      </label>
    )}
    <select name={name} id={name} onChange={onChange} value={value} aria-label="select">
      {!!options.length &&
        options.map((option, i) => {
          return (
            <option key={i} value={option} aria-label="option">
              {option}
            </option>
          );
        })}
    </select>
  </div>
);

SelectField.propTypes = {
  dataTestId: PropTypes.string,
  label: PropTypes.string,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  options: PropTypes.array.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
};

SelectField.defaultProps = {
  dataTestId: "select-field",
};

export default memo(SelectField);
