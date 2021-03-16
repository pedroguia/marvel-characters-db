import { useState, useEffect, useCallback } from "react";
import { useParams } from "react-router-dom";
import { useHistory } from "react-router-dom";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Badge from "react-bootstrap/Badge";
import Loading from "../../components/loading";
import ResumeBadge from "../../components/resumeBadge";
import Button from "../../components/button";
import LinkExternalIcon from "../../assets/img/link-external.svg";
import marvelRequests from "../../shared/http-requests/marvel-requests";
import { isDefined } from "../../shared/utils/functions";
import "./_style.scss";

const resumeBadgeList = ["comics", "events", "series", "stories"];

const Detail = () => {
  const [char, setChar] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [coverPath, setCoverPath] = useState(null);
  const [hasDescription, setHasDescription] = useState(null);

  let { id } = useParams();
  const history = useHistory();

  useEffect(() => {
    getCharsById(id);
  }, []);

  const getCharsById = async id => {
    const response = await marvelRequests.getCharacterById(id);
    const { isSuccess, result } = response;

    if (isSuccess) {
      const char = result.results[0];
      setChar(char);
      setCoverPath(`${char.thumbnail.path}/portrait_incredible.${char.thumbnail.extension}`);
      setHasDescription(
        isDefined(char.description) && char.description !== "" && char.description !== " ",
      );
      setIsLoading(false);
    }
  };

  const handleClickGoBack = useCallback(() => {
    history.goBack();
  }, []);

  const handleClickResume = useCallback(page => {
    history.push(`/characters/${id}/${page}`);
  }, []);

  return (
    <section className="detail">
      {isLoading && <Loading />}
      {!isLoading && (
        <>
          <Button onClick={handleClickGoBack} label="Go back" dataTestId="back-button" />
          <article className="detail-card">
            <div className="portrait" style={{ backgroundImage: `url('${coverPath}')` }}></div>
            <div className="info">
              <h1 className="font-weight-bold">{char.name}</h1>
              <div className={`description ${!hasDescription ? "placeholder" : ""}`}>
                {hasDescription ? char.description : "Description not available"}
              </div>
              <div className="badge-links">
                {char.urls.map((item, i) => (
                  <a key={i} href={item.url} target="_blank" rel="noreferrer">
                    <Badge variant="secondary ">
                      {item.type}
                      <img src={LinkExternalIcon} alt="link-external-icon" />
                    </Badge>
                  </a>
                ))}
              </div>
              <Row className="mt-auto">
                {resumeBadgeList.map(item => (
                  <Col xs={12} sm={6}>
                    <ResumeBadge
                      onClick={() => handleClickResume(item)}
                      text={item}
                      count={JSON.stringify(char[item].available)}
                    />
                  </Col>
                ))}
              </Row>
            </div>
          </article>
        </>
      )}
    </section>
  );
};

export default Detail;
