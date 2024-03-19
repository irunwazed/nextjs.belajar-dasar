import { render, screen } from "@testing-library/react";
import { Placeholders } from "../../../../configs"; 
import PasswordText from "./";

describe("Password Input must render properly", () => {
  it("render a Password Input", () => {
    render(<PasswordText />);
    const btnLogin = screen.getByPlaceholderText(Placeholders.TEXT_PASSWORD);
    expect(btnLogin).toBeInTheDocument();
  });
});
