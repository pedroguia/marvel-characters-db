import { render, screen } from "@testing-library/react";
import NoMatch from ".";

test("renders SearchField correctly", () => {
  render(<NoMatch />);
  expect(screen.getByTestId(/no-match/i)).toBeInTheDocument();
  expect(screen.getByAltText(/no match img/i)).toBeInTheDocument();
  expect(screen.getByText(/Sorry, this page is under construction!/i)).toBeInTheDocument();
  expect(screen.getByText(/Click here to return to last page/i)).toBeInTheDocument();
});
