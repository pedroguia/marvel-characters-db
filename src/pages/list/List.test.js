import { render, screen, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import List from ".";

test("renders List page main elements", async () => {
  render(<List />);
  expect(screen.getByText(/Marvel characters database/i)).toBeInTheDocument();
  expect(screen.getByTestId(/search-field/i)).toBeInTheDocument();
  expect(screen.getByTestId(/sort-select/i)).toBeInTheDocument();
  expect(screen.getByTestId(/per-page-select/i)).toBeInTheDocument();
  expect(screen.getByTestId(/loading/i)).toBeInTheDocument();
});

test("changes and clear search field value correctly", () => {
  render(<List />);

  const input = screen.getByLabelText(/search-input/i);
  fireEvent.change(input, { target: { value: "spider-man" } });
  expect(input.value).toBe("spider-man");

  const button = screen.getByLabelText(/clear-button/i);
  userEvent.click(button);
  expect(input).toHaveValue("");
});
