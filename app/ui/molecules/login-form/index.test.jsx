import { render } from "@testing-library/react";
import { Labels, Placeholders } from "../../../../configs"; 
import LoginForm from "./";

const testObject = {
  isTextInput: (screen) => screen.getPlaceholderText(Placeholders.TEXT_INPUT),
  isPasswordInput: (screen) => screen.getPlaceholderText(Placeholders.TEXT_PASSWORD),
  isButton: (screen) => screen.getByText(Labels.SUMBIT)
}

describe("LoginForm must render properly", () => {
  it("render a LoginForm", () => {
    render(<LoginForm />);
    const component = Object.keys(testObject)
    // var tes = screen.getPlaceholderText(Placeholders.TEXT_INPUT)
    // expect(tes)

    if(Array.isArray(component) && component.length > 0){
      component.forEach((e)=> {
        expect(component[e])
      })
    }
  });
});
