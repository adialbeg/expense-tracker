import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import App from "../App";

describe("Expense Tracker App", () => {
  test("renders app title", () => {
    render(<App />);
    const titleElement = screen.getByText(/Expense Tracker/i);
    expect(titleElement).toBeInTheDocument();
  });

  test("renders input fields and add button", () => {
  render(<App />);

  const inputs = screen.getAllByRole("textbox");
  expect(inputs.length).toBeGreaterThanOrEqual(1);

  const numberInputs = screen.getAllByRole("spinbutton");
  expect(numberInputs.length).toBeGreaterThanOrEqual(1);

  const addButton = screen.getByRole("button", { name: /add/i });
  expect(addButton).toBeInTheDocument();
});

});
