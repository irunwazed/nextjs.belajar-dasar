import { render, screen } from "@testing-library/react";
import { Labels } from "../../../../configs"; 
import BtnLogin from "./";

describe("Button must render properly", () => {
  it("render a button", () => {
    render(<BtnLogin />);
    const btnLogin = screen.getByText(Labels.SUMBIT);
    expect(btnLogin).toBeInTheDocument();
  });
});
