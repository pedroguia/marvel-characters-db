import { render, screen } from "@testing-library/react";
import ResumeBadge from ".";

const props = {
  onClick: jest.fn(),
  text: "Events",
  count: 23,
}

test("renders SearchField correctly", () => {
  render(<ResumeBadge {...props} />);
  expect(screen.getByText(/Events/i)).toBeInTheDocument();
  expect(screen.getByText(/23/i)).toBeInTheDocument();
});
