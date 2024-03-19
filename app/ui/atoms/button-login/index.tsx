import { Labels } from "../../../../configs"; 

const BtnLogin = ({onClick, id}:any) => {
    const input = {
        placeholder: Labels.SUMBIT
    }
    return (
        <button id={id} onClick={onClick} type="submit" >{input.placeholder}</button>
    )
}

export default BtnLogin