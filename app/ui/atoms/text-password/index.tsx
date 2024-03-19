import { Placeholders } from "../../../../configs"; 

const PasswordInput = () => {
    const input = {
        placeholder: Placeholders.TEXT_PASSWORD
    }
    return (
        <input type="text" placeholder={input.placeholder}/>
    )
}

export default PasswordInput