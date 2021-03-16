import { memo } from "react";
import Img from "../../assets/img/empty-state.png";
import "./_style.scss";

const EmptyState = () => (
  <div className="empty-state" data-testid="empty-state">
    <img className="img" src={Img} alt="empty state img" />
    <div className="text">
      <p>There are no search results</p>
      <p>Please try searching with another term</p>
    </div>
  </div>
);

export default memo(EmptyState);
