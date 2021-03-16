import { memo } from "react";
import PropTypes from "prop-types";
import "./_style.scss";

const ResumeBadge = ({ count, dataTestId, onClick, text }) => (
  <div className="resume-badge" onClick={onClick} data-testid={dataTestId}>
    <span className="text">{text}</span>
    <span className="count">{count}</span>
  </div>
);

ResumeBadge.propTypes = {
  count: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  dataTestId: PropTypes.string,
  onClick: PropTypes.func,
  text: PropTypes.string.isRequired,
};

export default memo(ResumeBadge);
