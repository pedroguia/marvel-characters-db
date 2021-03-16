import { memo } from "react";
import Loader from "react-loader-spinner";
import variables from "../../assets/scss/_variables.scss";
import "./_style.scss";

const Loading = () => (
  <div className="loading-container" data-testid="loading">
    <Loader type="ThreeDots" color={variables.inputColor} height={75} width={75} />
  </div>
);

export default memo(Loading);
