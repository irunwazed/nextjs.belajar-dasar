import { Placeholders } from "@/configs"; 

const TextPassword = () => {
    const input = {
        placeholder: Placeholders.TEXT_PASSWORD
    }
    return (
        <input type="text" placeholder={input.placeholder}/>
    )
}

export default TextPassword