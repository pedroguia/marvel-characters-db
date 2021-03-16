import { render, screen } from "@testing-library/react";
import EmptyState from ".";

test("renders SearchField correctly", () => {
  render(<EmptyState />);
  expect(screen.getByTestId(/empty-state/i)).toBeInTheDocument();
  expect(screen.getByAltText(/empty state img/i)).toBeInTheDocument();
  expect(screen.getByText(/There are no search results/i)).toBeInTheDocument();
  expect(screen.getByText(/Please try searching with another term/i)).toBeInTheDocument();
});
