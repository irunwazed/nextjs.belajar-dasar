"use client";
import { ChangeEvent, HtmlHTMLAttributes, useState } from "react";
import BtnLogin from "../../atoms/button-login";
import TextInput from "../../atoms/text-input";
import PasswordInput from "../../atoms/text-password";

const LoginForm = () => {
  const [form, setForm] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({
      ...form,
      [e.target.id]: e.target.value,
    });
  };

  const handleChangeUsername = (val: string) => {
    setForm({
      ...form,
      username: val,
    });
  };
  const handleChangePassword = (val: string) => {
    setForm({
      ...form,
      password: val,
    });
  };

  const handleSubmit = (e:any) => {
    e.preventDefault();
    console.log("form", form)
  }

  return (
    <>
      <div className="bg-indigo-500/50 p-6 rounded-lg shadow-lg text-center w-[500px]">
        <h3 className="font-semibold text-2xl my-3">Login</h3>
        <form action="" method="post" id="form-login" onSubmit={handleSubmit}>
          <div className="flex flex-col text-left mt-2">
            <label className="font-xl text-black" htmlFor="username">
              Username
            </label>
            <TextInput id="username" onLoginEnter={handleChangeUsername} />
          </div>
          <div className="flex flex-col text-left mt-2">
            <label htmlFor="password">Password</label>
            <PasswordInput id="password" onLoginEnter={handleChangePassword} />
          </div>
          <div className="">
            <BtnLogin id="btn-login" onClick={() => {}} />
          </div>
        </form>
      </div>
    </>
  );
};

export default LoginForm;
