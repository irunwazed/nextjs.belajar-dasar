import { render, screen } from "@testing-library/react";
import TextInput from "../app/ui/atoms/text-input";
import { Placeholders, Labels } from "../configs";
import PasswordInput from "../app/ui/atoms/text-password";
import BtnLogin from "../app/ui/atoms/button-login";

describe("UI input must render properly", () => {
  it("render text input", () => {
    render(<TextInput />);
    const inputText = screen.getByPlaceholderText(Placeholders.TEXT_INPUT);
    expect(inputText).toBeInTheDocument();
  });
  it("render text input", () => {
    render(<PasswordInput />);
    const passwordInput = screen.getByPlaceholderText(Placeholders.TEXT_PASSWORD);
    expect(passwordInput).toBeInTheDocument();
  });
  it("render a button", () => {
    render(<BtnLogin />);
    const btnLogin = screen.getByText(Labels.SUMBIT);
    expect(btnLogin).toBeInTheDocument();
  });
});
