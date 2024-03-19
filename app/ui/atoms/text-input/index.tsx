import { Placeholders } from "@/configs"; 

const TextInput = () => {
    const input = {
        placeholder: Placeholders.TEXT_INPUT
    }
    return (
        <input type="text" placeholder={input.placeholder}/>
    )
}

export default TextInput