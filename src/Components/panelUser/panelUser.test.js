import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import colors from "../../assets/colors";
import PanelUser from "./index";

describe("PanelUser:", () => {
  it("Component started correctly", () => {
    render(
      <PanelUser
        name="User"
        avatar="https://avatars.githubusercontent.com/u/45019852?v=4"
        bio="biography"
        url=""
      />
    );
    expect(screen.getByText("User")).toHaveStyle({
      display: "flex",
      fontSize: 16,
      width: "100%",
      textAlign: "center",
      justifyContent: "center",
      color: colors.white,
    });
    expect(screen.getByText("biography")).toHaveStyle({
      fontSize: 10,
      width: "100%",
      textAlign: "justify",
    });
  });
});
