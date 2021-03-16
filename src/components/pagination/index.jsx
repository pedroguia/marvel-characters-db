import { memo } from "react";
import PropTypes from "prop-types";
import ReactPaginate from "react-paginate";
import "./_style.scss";

const Pagination = ({ page, onChange, totalPages }) => (
  <div className="d-flex justify-content-center mt-2" data-testid="pagination">
    <ReactPaginate
      disableInitialCallback
      initialPage={page - 1}
      previousLabel="<"
      nextLabel=">"
      pageCount={totalPages}
      marginPagesDisplayed={1}
      pageRangeDisplayed={3}
      onPageChange={onChange}
      subContainerClassName="pages"
      breakClassName="page-item"
      breakLinkClassName="page-link"
      containerClassName="pagination"
      pageClassName="page-item"
      pageLinkClassName="page-link"
      previousClassName="page-item"
      previousLinkClassName="page-link"
      nextClassName="page-item"
      nextLinkClassName="page-link"
      activeClassName="active"
    />
  </div>
);

Pagination.propTypes = {
  page: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
  totalPages: PropTypes.number.isRequired,
};

export default memo(Pagination);
