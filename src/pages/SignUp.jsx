import React from "react";
import { MdEmail } from "react-icons/md";
import {
  FaLock,
  FaUser,
  FaFacebook,
  FaTwitter,
  FaGoogle,
} from "react-icons/fa";
import { Link } from "react-router";
import { EMAIL_REGEX, PASSWORD_REGEX } from "../components/regex";
import { useForm } from "react-hook-form";

function SignUp() {
  const { register, handleSubmit, formState } = useForm();
  const { errors } = formState;

  const { name, ref, onChange, onBlur } = register("email");
  function submitForm(data) {
    console.log(data);
  }

  return (
    <form onSubmit={handleSubmit(submitForm)}>
      <div
        className="min-h-screen flex items-center justify-center
    bg-gradient-to-r from-gray-900 to-gray-500"
      >
        <div className=" font-mono bg-amber-50 border rounded-xl border-amber-50 p-10 ">
          <h1 className="text-3xl font-bold ml-15 mb-15 ">Signup</h1>
          <h1 className="">Email Address</h1>
          <div className="flex items-center gap-1.5 border-b p-1">
            <MdEmail className="text-xs text-gray-500" />
            <input
              type="email"
              placeholder="Type your Email"
              id="email"
              {...register("email", {
                required: "Email address is required",
                pattern: {
                  value: EMAIL_REGEX,
                  message: "Invalid email address",
                },
              })}
            />
          </div>
          <p className="text-red-700 text-xs mt-1 ml-2">
            {errors.email?.message}
          </p>
          <h1 className="">Username</h1>
          <div className="flex items-center gap-1.5 border-b p-1">
            <FaUser className="text-xs text-gray-500" />
            <input type="text" placeholder="Type your Username" id="name" />
          </div>
          <h1>Password</h1>
          <div className="flex items-center gap-1.5 border-b p-1">
            <FaLock className="text-xs text-gray-500" />

            <input
              type="password"
              placeholder="Type your password"
              id="password"
              {...register("password", {
                required: "Password is required ",
                pattern: {
                  value: PASSWORD_REGEX,
                  message:
                    "Password must contain min 8 character including alphabet(upper & lower),number,special character",
                },
              })}
            />
          </div>
          <p className="text-red-700 text-xs mt-1 ml-2">
            {errors.password?.message}
          </p>
         
          <button
            type="submit"
            className="w-full text-amber-50 bg-gradient-to-r from-gray-500 to-gray-900 p-0.5 items-center mt-1 border rounded-3xl "
          >
            Signup
          </button>

          <h2 className="text-sm ml-10 mt-1.5">Or Sign Up Using</h2>
          <div className="flex ml-19 gap-2 mt-1.5 ">
            <Link to="https://www.facebook.com">
              <FaFacebook className=" hover:text-blue-800" />
            </Link>
            <Link to="https://www.x.com">
              <FaTwitter className="hover:text-blue-500" />
            </Link>
            <Link to="https://www.google.com">
              <FaGoogle className="hover:text-red-500" />
            </Link>
          </div>
        </div>
      </div>
    </form>
  );
}

export default SignUp;
