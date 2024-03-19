import { Labels } from "@/configs"; 

const BtnLogin = () => {
    const input = {
        placeholder: Labels.SUMBIT
    }
    return (
        <input type="submit" placeholder={input.placeholder}/>
    )
}

export default BtnLogin