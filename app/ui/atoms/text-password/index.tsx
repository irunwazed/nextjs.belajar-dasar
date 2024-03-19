import { Placeholders } from "../../../../configs"; 

const PasswordInput = ({ onLoginEnter, onChange, id }: any) => {
    const input = {
        placeholder: Placeholders.TEXT_PASSWORD
    }
    return (
        <input id={id} type="text" placeholder={input.placeholder}/>
    )
}

export default PasswordInput