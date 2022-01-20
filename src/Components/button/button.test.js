import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import Button from "./index";

describe("Function onClick:", () => {
  it("onClick is called", () => {
    const funcLogin = jest.fn();
    render(<Button onClick={funcLogin} text="SignIn" />);
    fireEvent.click(screen.getByText("SignIn"));
    expect(funcLogin).toHaveBeenCalledTimes(1);
  });
});
