import { render, screen } from "@testing-library/react";
import SelectField from ".";

const props = {
  dataTestId: "select-field",
  label: 'this is a select',
  name: 'test',
  onChange: jest.fn(),
  options: [20, 40, 80],
  value: 0,
}

test("renders SelectField correctly", () => {
  render(<SelectField {...props} />);
  expect(screen.getByTestId(props.dataTestId)).toBeInTheDocument();
  expect(screen.getByLabelText(/label/i)).toBeInTheDocument();
  expect(screen.getByLabelText(/select/i)).toBeInTheDocument();
  expect(screen.queryAllByLabelText(/option/i).length).toBe(props.options.length);
});

test("does not render label if prop is not defined", () => {
  render(<SelectField {...props} label={undefined} />);
  expect(screen.queryByLabelText(/label/i)).not.toBeInTheDocument();
});

test("does not render any options if props array is empty", () => {
  render(<SelectField {...props} options={[]} />);
  expect(screen.queryAllByLabelText(/option/i).length).toBe(0);
});
