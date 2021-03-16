import { render, screen } from "@testing-library/react";
import Pagination from ".";

const props = {
  onChange: jest.fn(),
  page: 2,
  totalPages: 23,
}

test("renders SearchField correctly", () => {
  render(<Pagination {...props} />);
  expect(screen.getByTestId(/pagination/i)).toBeInTheDocument();
});
