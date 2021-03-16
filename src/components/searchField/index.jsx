import { memo } from "react";
import PropTypes from "prop-types";
import SearchIcon from "../../assets/img/search-icon.svg";
import ClearIcon from "../../assets/img/clear-icon.svg";
import "./_style.scss";

const SearchField = ({ onChange, onClear, placeholder, showClearIcon, value }) => (
  <div className="search-field" data-testid="search-field">
    <img src={SearchIcon} alt="search-icon" />
    <input
      aria-label="search-input"
      type="text"
      placeholder={placeholder}
      onChange={onChange}
      value={value}
    />
    {showClearIcon && !!value.length && (
      <button type="button" onClick={onClear} aria-label="clear-button">
        <img src={ClearIcon} alt="clear-icon" />
      </button>
    )}
  </div>
);

SearchField.propTypes = {
  onChange: PropTypes.func.isRequired,
  onClear: PropTypes.func,
  placeholder: PropTypes.string,
  showClearIcon: PropTypes.bool,
  value: PropTypes.string.isRequired,
};

SearchField.defaultProps = {
  showClearIcon: true,
};

export default memo(SearchField);
