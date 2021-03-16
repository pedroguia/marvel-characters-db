import { render, screen } from "@testing-library/react";
import Loading from ".";

test("renders SearchField correctly", () => {
  render(<Loading />);
  expect(screen.getByTestId(/loading/i)).toBeInTheDocument();
});
