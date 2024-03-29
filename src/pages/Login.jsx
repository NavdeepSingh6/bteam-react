import React, { useState } from "react";
import Img from "../assets/Img.png";
import Logo from "../assets/Logo.png";
import Pic from "../assets/Pic.svg";
import instance from "../api/instance";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [showPassword, setShowPassword] = useState(false);

  const toggleShowPassword = () => {
    setShowPassword((prev) => !prev);
  };

  const handleLogin = async () => {
    const response = await instance.get("/users");
    console.log(response);
  };

  return (
    <div className="h-screen w-full">
      <div className="w-full h-screen flex">
        <img
          src={Pic}
          alt="pic"
          className="absolute top-6 left-6 w-12 hidden md:block object-cover"
        />
        <div className="w-[60%] h-screen hidden md:flex">
          <img src={Img} className="w-full object-cover" />
        </div>
        <div className="flex-1 md:w-[40%] w-full flex-col  flex items-center justify-center">
          <div className="max-w-xl">
            <img src={Logo} className="object-cover" />
            <form className="py-12 lg:w-80">
              <label className="text-sm text-gray-400">Email</label>
              <div className="relative">
                <div className="absolute inset-y-0  flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16.409"
                    className="ml-1"
                    height="13.127"
                    viewBox="0 0 16.409 13.127"
                  >
                    <path
                      id="ic_email"
                      d="M17.768,6H4.641A1.639,1.639,0,0,0,3.008,7.641L3,17.487a1.646,1.646,0,0,0,1.641,1.641H17.768a1.646,1.646,0,0,0,1.641-1.641V7.641A1.646,1.646,0,0,0,17.768,6Zm0,3.282-6.564,4.1-6.564-4.1V7.641l6.564,4.1,6.564-4.1Z"
                      transform="translate(-3 -6)"
                      fill="#707070"
                    />
                  </svg>
                </div>
                <div className="items-center border-b-2 border-amber-500 ">
                  <input
                    name="email"
                    type="text"
                    className="py-1 text-sm lg:ml-7 border-none ml-6  text-black focus:outline-none"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
              </div>
              <div className="py-7">
                <label className="text-sm text-gray-400">Password</label>
                <div className="relative">
                  <div className="absolute inset-y-0  flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="12.31"
                      height="16.414"
                      className="ml-1"
                      viewBox="0 0 12.31 16.414"
                    >
                      <path
                        id="ic_password"
                        d="M75.969,6.155H74.943V4.787a4.787,4.787,0,0,0-9.575,0V6.155H64.342A.342.342,0,0,0,64,6.5v8.549a1.369,1.369,0,0,0,1.368,1.368h9.575a1.369,1.369,0,0,0,1.368-1.368V6.5A.342.342,0,0,0,75.969,6.155ZM71.179,13.3a.342.342,0,0,1-.34.38H69.471a.342.342,0,0,1-.34-.38l.216-1.94a1.353,1.353,0,0,1-.56-1.1,1.368,1.368,0,1,1,2.736,0,1.353,1.353,0,0,1-.56,1.1Zm1.712-7.143H67.42V4.787a2.736,2.736,0,0,1,5.471,0Z"
                        transform="translate(-64)"
                        fill="#707070"
                      />
                    </svg>
                  </div>
                  <div className="items-center border-b-2 border-amber-500">
                    <input
                      name="email"
                      type={showPassword ? "text" : "password"}
                      className=" py-1 text-sm lg:ml-7  border-none  ml-6 text-black focus:outline-none"
                      placeholder="Enter your password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                    <div className="float-end" onClick={toggleShowPassword}>
                      {showPassword ? (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="18.284"
                          height="12.466"
                          viewBox="0 0 18.284 12.466"
                        >
                          <path
                            id="ic_eye"
                            d="M10.642,6.75A9.829,9.829,0,0,0,1.5,12.983a9.821,9.821,0,0,0,18.284,0A9.829,9.829,0,0,0,10.642,6.75Zm0,10.389A4.155,4.155,0,1,1,14.8,12.983,4.157,4.157,0,0,1,10.642,17.139Zm0-6.649a2.493,2.493,0,1,0,2.493,2.493A2.49,2.49,0,0,0,10.642,10.49Z"
                            transform="translate(-1.5 -6.75)"
                            opacity="0.2"
                          />
                        </svg>
                      ) : (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          className="w-6 h-6"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M3.98 8.223A10.477 10.477 0 0 0 1.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.451 10.451 0 0 1 12 4.5c4.756 0 8.773 3.162 10.065 7.498a10.522 10.522 0 0 1-4.293 5.774M6.228 6.228 3 3m3.228 3.228 3.65 3.65m7.894 7.894L21 21m-3.228-3.228-3.65-3.65m0 0a3 3 0 1 0-4.243-4.243m4.242 4.242L9.88 9.88"
                          />
                        </svg>
                      )}
                    </div>
                  </div>
                </div>
                <div className="float-end py-2">
                  <p className="text-gray-400 text-sm">Forgot Password?</p>
                </div>
              </div>
            </form>
            <div className="flex justify-center">
              <button
                type="button"
                className="text-white  bg-gradient-to-br lg:px-16 px-16 from-amber-400 to-amber-500  focus:ring-2 font-bold font-Poppins rounded-lg text-sm py-2.5 text-center"
                onClick={handleLogin}
              >
                Login
              </button>
            </div>
            <div className="mt-10">
              <p className="text-gray-500 text-xs text-center">
                Powered by BTeams
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
