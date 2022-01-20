import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import Login from "../pages/login";

describe("Login snapshot:", () => {
  it("Should render correctly", () => {
    const { container } = render(<Login />);
    expect(container).toMatchSnapshot();
  });
});
describe("Login Components:", () => {
  it("Have Title Login", () => {
    render(<Login />);
    expect(screen.getByText("GitHub viewer")).toBeInTheDocument();
  });
  it("Have Button Login", () => {
    render(<Login />);
    expect(screen.getByRole("button")).toBeInTheDocument();
  });
  it("Function click redirect", () => {
    render(<Login />);
    fireEvent.click(screen.getByRole("button"));
    setTimeout(() => {
      expect(window.location.href).toEqual("http://localhost:5000/auth/github");
    }, 2000);
  });
});
