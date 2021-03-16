import { render, screen } from "@testing-library/react";
import SearchField from ".";

const props = {
  onChange: jest.fn(),
  onClear: jest.fn(),
  placeholder: 'Write something here...',
  value: "",
}

test("renders SearchField correctly", () => {
  render(<SearchField {...props} />);
  expect(screen.getByTestId(/search-field/i)).toBeInTheDocument();
  expect(screen.getByAltText(/search-icon/i)).toBeInTheDocument();
  expect(screen.getByLabelText(/search-input/i)).toBeInTheDocument();
  expect(screen.getByPlaceholderText(/Write something here.../i)).toBeInTheDocument();
});

test("does not render placeholder if prop is undefined", () => {
  render(<SearchField {...props} placeholder={undefined} />);
  expect(screen.queryByPlaceholderText(/Write something here.../i)).not.toBeInTheDocument();
});

test("renders clear button if has has value", () => {
  render(<SearchField {...props} value="spider-man" />);
  expect(screen.getByLabelText(/clear-button/i)).toBeInTheDocument();
});

test("does not render clear button if prop is false", () => {
  render(<SearchField {...props} showClearIcon={false} />);
  expect(screen.queryByLabelText(/clear-button/i)).not.toBeInTheDocument();
});

