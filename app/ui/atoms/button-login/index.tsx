import { Labels } from "../../../../configs"; 

const BtnLogin = () => {
    const input = {
        placeholder: Labels.SUMBIT
    }
    return (
        <button type="submit" >{input.placeholder}</button>
    )
}

export default BtnLogin