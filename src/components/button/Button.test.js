import { render, screen } from "@testing-library/react";
import Button from ".";

const props = {
  dataTestId: 'test id',
  label: 'This is a button',
  onClick: jest.fn,
}

test("renders SearchField correctly", () => {
  render(<Button {...props} />);
  expect(screen.getByTestId(/test id/i)).toBeInTheDocument();
  expect(screen.getByText(/This is a button/i)).toBeInTheDocument();
});
