import { render, screen } from "@testing-library/react";
import { Placeholders } from "../../../../configs"; 
import TextInput from "./";

describe("Text Input must render properly", () => {
  it("render a Text Input", () => {
    render(<TextInput />);
    const btnLogin = screen.getByPlaceholderText(Placeholders.TEXT_INPUT);
    expect(btnLogin).toBeInTheDocument();
  });
});
