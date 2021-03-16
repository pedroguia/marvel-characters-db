import { render, screen } from "@testing-library/react";
import Footer from ".";

test("renders SearchField correctly", () => {
  render(<Footer />);
  expect(screen.getByTestId(/footer/i)).toBeInTheDocument();
  expect(screen.getByText(/Developed by Pedro Guia/i)).toBeInTheDocument();
  expect(screen.getByLabelText(/github link/i)).toBeInTheDocument();
  expect(screen.getByLabelText(/github link/i)).toBeInTheDocument();
  expect(screen.getByAltText(/github icon/i)).toBeInTheDocument();
  expect(screen.getByAltText(/linkedin icon/i)).toBeInTheDocument();
});
