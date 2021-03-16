import { render, screen } from "@testing-library/react";
import ChardCard from ".";

const props = {
  description: 'This is the description',
  id: 1,
  name: 'Spider-man',
  thumbnail: {}
}

test("renders SearchField correctly", () => {
  render(<ChardCard {...props} />);
  expect(screen.getByTestId(/char-card/i)).toBeInTheDocument();
  expect(screen.getByText(props.name)).toBeInTheDocument();
  expect(screen.getByText(props.description)).toBeInTheDocument();
});

test("renders default description if none is passed", () => {
  render(<ChardCard {...props} description={undefined} />);
  expect(screen.getByText(/Description not available/i)).toBeInTheDocument();
});
