import { render, screen } from "@testing-library/react";
import About from "./page";

describe("Testing", () => {

  it("render a heading", () => {
    render(<About />);
    const heading = screen.getByRole('heading', { level: 1 })
    expect(heading).toBeInTheDocument()
  });
  
});

