import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import InputSearch from "./index";

describe("Functions input:", () => {
  it("onClick is called", () => {
    const funcLogin = jest.fn();
    render(<InputSearch onClick={funcLogin} placeHolder="SignIn" />);
    fireEvent.click(screen.getByRole("button"));
    expect(funcLogin).toHaveBeenCalledTimes(1);
  });
  it("onChange is called", () => {
    const funcChange = jest.fn();
    render(<InputSearch onChange={funcChange} placeHolder="SignIn" />);
    fireEvent.change(screen.getByPlaceholderText("SignIn"), {
      target: { value: "matheussan" },
    });
    expect(funcChange).toHaveBeenCalledTimes(1);
  });
  it("onKeyUp is called", () => {
    const funcKey = jest.fn();
    render(<InputSearch onKeyUp={funcKey} placeHolder="SignIn" />);
    fireEvent.keyUp(screen.getByPlaceholderText("SignIn"), {
      key: "A",
      code: "KeyA",
    });
    fireEvent.keyUp(screen.getByPlaceholderText("SignIn"), {
      key: "enter",
      code: "enter",
      charCode: 13,
    });
    expect(funcKey).toHaveBeenCalledTimes(2);
  });
});
