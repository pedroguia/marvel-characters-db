import { useHistory } from "react-router-dom";
import Img from "../../assets/img/not-found.png";
import "./_style.scss";

const NoMatch = () => {
  const history = useHistory();

  const handleClickGoBack = () => {
    history.goBack();
  };

  return (
    <div className="no-match" data-testid="no-match">
      <img className="img" src={Img} alt="no match img" />
      <div className="text">
        <p>Sorry, this page is under construction!</p>
        <p onClick={handleClickGoBack} role="button">
          Click here to return to last page
        </p>
      </div>
    </div>
  );
};

export default NoMatch;
