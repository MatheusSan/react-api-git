import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import RepoItem from "./index";

describe("RepoItem:", () => {
  it("Component started correctly", () => {
    render(
      <RepoItem
        title="Repository example"
        description="This repository is a example"
        language="JAVASCRIPT"
      />
    );
    expect(screen.getByText("Repository example")).toHaveStyle({
      fontSize: 18,
      fontWeight: "bold",
      width: "100%",
      textAlign: "center",
    });
    expect(screen.getByText("This repository is a example")).toHaveStyle({
      fontSize: 14,
      width: "100%",
      textAlign: "justify",
    });
    expect(screen.getByText("JAVASCRIPT")).toHaveStyle({
      fontSize: 10,
      width: "100%",
      textAlign: "end",
    });
  });
});
