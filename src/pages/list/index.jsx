import { useState, useEffect, useCallback } from "react";
import { useHistory } from "react-router-dom";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import CharCard from "../../components/charCard";
import EmptyState from "../../components/emptyState";
import Loading from "../../components/loading";
import Pagination from "../../components/pagination";
import SearchField from "../../components/searchField";
import SelectField from "../../components/selectField";
import useDebounce from "../../hooks/useDebounce";
import useIsFirstRender from "../../hooks/useIsFirstRender";
import marvelRequests from "../../shared/http-requests/marvel-requests";
import { isDefined, addUrlParam, getUrlParam, removeUrlParam } from "../../shared/utils/functions";
import { perPageOptions, sortOptions } from "../../shared/utils/constants";
import "./_style.scss";

const List = () => {
  const [charsList, setCharsList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [filters, setFilters] = useState({
    name: getUrlParam("name") || "",
    page: getUrlParam("page") || 1,
    itemsPerPage: getUrlParam("per-page") || 20,
    orderBy: getUrlParam("order-by") || "asc",
  });
  const [totalPages, setTotalPages] = useState(0);

  const isFirstRender = useIsFirstRender();
  const debouncedFilters = useDebounce(filters, 500);
  const history = useHistory();

  useEffect(() => {
    getCharsList(filters);
  }, []);

  useEffect(() => {
    if (isFirstRender || !isDefined(debouncedFilters)) return;

    getCharsList(filters);
    setIsLoading(true);
  }, [debouncedFilters]);

  const getCharsList = async filters => {
    const response = await marvelRequests.getCharacters(filters);
    const { isSuccess, result } = response;

    if (isSuccess) {
      const totalPages = Math.round(result.total / filters.itemsPerPage);

      setCharsList(result.results);
      setTotalPages(totalPages === 0 ? 1 : totalPages);
      setIsLoading(false);
    }
  };

  const handleChangeSearch = useCallback(e => {
    const { value } = e.target;
    setFilters({ ...filters, name: value, page: 1 });
    if (value === "") removeUrlParam("name");
    else addUrlParam("name", value);
    removeUrlParam("page");
  }, []);

  const handleClearSearch = useCallback(() => {
    setFilters({ ...filters, name: "", page: 1 });
    removeUrlParam("name");
    removeUrlParam("page");
  }, []);

  const handleChangePage = useCallback(({ selected }) => {
    const newPage = selected + 1;

    setFilters({ ...filters, page: newPage });
    if (selected === 0) removeUrlParam("page");
    else addUrlParam("page", newPage);
  }, []);

  const handleChangePerPage = useCallback(e => {
    const value = Number(e.target.value);
    setFilters({ ...filters, itemsPerPage: value });
    if (value === 20) removeUrlParam("per-page");
    else addUrlParam("per-page", value);
  }, []);

  const handleChangeOrderBy = useCallback(e => {
    const { value } = e.target;
    setFilters({ ...filters, orderBy: value });
    addUrlParam("order-by", value);
  }, []);

  const handleClickCharCard = useCallback(id => {
    history.push(`/characters/${id}`);
  }, []);

  return (
    <div className="container my-3">
      <h1 className="font-weight-bold mb-2">Marvel characters database</h1>
      <div className="toolbar">
        <SearchField
          onChange={handleChangeSearch}
          onClear={handleClearSearch}
          placeholder="Search for a character..."
          value={filters.name}
        />
        <div className="right">
          <SelectField
            name="orderBy"
            value={filters.orderBy}
            label="Sorting order"
            options={sortOptions}
            onChange={handleChangeOrderBy}
            dataTestId="sort-select"
          />
          <SelectField
            name="itemsPerPage"
            value={filters.itemsPerPage}
            label="Items per page"
            options={perPageOptions}
            onChange={handleChangePerPage}
            dataTestId="per-page-select"
          />
        </div>
      </div>
      {isLoading && <Loading />}
      {!isLoading && (
        <>
          <Row>
            {!!charsList.length && (
              <>
                {charsList?.map(char => {
                  return (
                    <Col key={char.id} xs={12} sm={6} md={4} lg={4} xl={3}>
                      <CharCard
                        id={char.id}
                        name={char.name}
                        description={char.description}
                        thumbnail={char.thumbnail}
                        onClick={() => handleClickCharCard(char.id)}
                      />
                    </Col>
                  );
                })}
                <Col sm={12}>
                  <Pagination
                    page={filters.page}
                    onChange={handleChangePage}
                    totalPages={totalPages}
                  />
                </Col>
              </>
            )}
          </Row>
          {!charsList.length && <EmptyState />}
        </>
      )}
    </div>
  );
};

export default List;
