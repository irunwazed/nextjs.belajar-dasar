import BtnLogin from "../ui/atoms/button-login"
import TextInput from "../ui/atoms/text-input"
import PasswordInput from "../ui/atoms/text-password"

const Login = () => {
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

export default Login;