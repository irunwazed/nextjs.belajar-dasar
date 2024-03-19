import { fireEvent, render, screen } from "@testing-library/react";
import { Placeholders } from "../../../../configs"; 
import TextInput from "./";

describe("Text Input must render properly", () => {
  it("render a Text Input", () => {
    render(<TextInput />);
    const btnLogin = screen.getByPlaceholderText(Placeholders.TEXT_INPUT);
    expect(btnLogin).toBeInTheDocument();
  });


  it("Text Input check is Letter", () => {
    render(<TextInput onLoginEnter={(value)=>value}   />);
    fireEvent.change(input, {target:{value: '下雨天道路泥泞'}})
    expect(input).toHaveDisplayValue('')
  });
});
