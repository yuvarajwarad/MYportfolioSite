import React from "react";
import { render, screen } from "@testing-library/react"; // Import render and screen from @testing-library/react
import Header from "./Header";

jest.mock("./Header.css");
jest.mock("react-router-dom");
jest.mock("./monkey.png");
jest.mock("../App.css");

describe("<Header>", () => {
  it("should render component", () => {
    render(<Header />); // Render the Header component

    // Use screen.getByText to find the "Work Experience" text and assert its presence
    const linkElement = screen.getByText(/Work Exper/i);
    expect(linkElement).toBeInTheDocument();
  });
});
