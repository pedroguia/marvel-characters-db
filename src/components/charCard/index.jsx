import { memo } from "react";
import PropTypes from "prop-types";
import { isDefined } from "../../shared/utils/functions";
import "./_style.scss";

const CharCard = ({ description, name, thumbnail, onClick }) => {
  const imgPath = `${thumbnail.path}/portrait_uncanny.${thumbnail.extension}`;
  const hasDescription = isDefined(description) && description !== "" && description !== " ";

  return (
    <article className="char-card" onClick={onClick} title={name} data-testid="char-card">
      <div
        className="thumbnail"
        style={{ backgroundImage: `url('${imgPath}')` }}
        alt={`${name} thumbnail`}
      >
        <div className="name" title={name}>
          {name}
        </div>
      </div>
      <div className="description line-clamp">
        <div className={!hasDescription ? "placeholder" : ""}>
          {hasDescription ? description : "Description not available"}
        </div>
      </div>
    </article>
  );
};

CharCard.propTypes = {
  description: PropTypes.string,
  name: PropTypes.string.isRequired,
  thumbnail: PropTypes.shape({
    path: PropTypes.string,
    extension: PropTypes.string,
  }),
};

export default memo(CharCard);
