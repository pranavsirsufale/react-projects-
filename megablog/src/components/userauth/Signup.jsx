import React, { useState } from "react";
import authService from "../../appwrite/auth";
import { Button, Input, Login, Logo } from "../index";
import { login as loginStore } from "../../store/slice/authSlice";
import { useDispatch } from "react-redux";
import {  useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [error, setError] = useState("");

  const { register, handleSubmit } = useForm();

  const signUp = async (data) => {
    setError("");
    try {
      const registerdUser = await authService.createAccount(data);
      if (registerdUser) {
        const userData = await authService.getCurrentUser(data);

        if (userData) {
          dispatch(loginStore(userData));
          navigate("/");
        }
      }
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="flex items-center justify-center">
      <div
        className={`mx-auto w-full max-w-lg bg-gray-100 rounded-xl p-10 border border-black/10`}
      >
        <div className="mb-2 flex justify-center">
          <span className="inline-block w-full max-w-[100px]">
            <Logo width="100%" />
          </span>
        </div>

        <h2 className="text-center text-2xl font-bold">
          Sign up to your account
        </h2>

        <p className="mt-2 text-center text-base text-black/60">
          Already have an account ?
          <Link
            to="/login"
            className="font-medium text-primary transition-all duration-200 hover:underline"
          >
            Sign in
          </Link>
        </p>

        {error && <p className="text-red-600 mt-8">{error}</p>}

        <form onSubmit={handleSubmit(signUp)}>
          <div onSubmit="space-y-5">
            <Input
              label="Full Name: "
              placeholder="Enter Your Name"
              {...register("name", {
                required: true,
              })}
            />

            <Input
              label="Email"
              placeholder="Enter your email"
              {...register("email", {
                required: true,
                matchPattern: (value) =>
                  /^([\w\.\-_]+)?\w+@[\w-_]+(\.\w+){1,}/.test(value) ||
                  "email added must be there ",
              })}
            />

            <Input
              label="Password : "
              placeholder="Enter your password"
              {...register("password", {
                required: true,
              })}
            />

            <Button type="submit" className="w-full my-5">
              {" "}
              Sign Up{" "}
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
