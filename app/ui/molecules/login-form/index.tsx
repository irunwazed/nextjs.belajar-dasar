import BtnLogin from "../../atoms/button-login"
import TextInput from "../../atoms/text-input"
import PasswordInput from "../../atoms/text-password"

const LoginForm = () => {
    return(
        <>
            <div>
                <h3>Login</h3>
                <div>
                    <label htmlFor="username"></label>
                    <TextInput />
                </div>
                <div>
                    <label htmlFor="password"></label>
                    <PasswordInput />
                </div>
                <BtnLogin />
            </div>
        </>
    )
}

export default LoginForm;