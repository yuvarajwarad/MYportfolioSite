import { render, screen } from "@testing-library/react";
import App from "./App";
import Home from "./MyComponent/Home";

test("renders learn react link", () => {
  render(<Home />);
  const linkElement = screen.getByText(/Work Experience/i);
  const newel = screen.getByText(/Yuvraj/i);
  expect(linkElement).toBeInTheDocument();
  expect(newel).toBeInTheDocument();
});
test("Testing My application Test case 2", () => {
  render(<Home />);
  const linkElement = screen.getByText(/Work Experience/i);
  expect(linkElement).toBeInTheDocument();
});
