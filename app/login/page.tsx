import LoginForm from "../ui/molecules/login-form"

const Login = () => {
    return(
        <>
           <div className="flex justify-center items-center h-screen bg-gradient-to-r from-indigo-100 to-indigo-50">
           <LoginForm />
           </div>
        </>
    )
}

export default Login;