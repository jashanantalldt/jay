"use client";
import { postRequest } from "@/app/Instances";
import { successMessage, errorMessage } from "@/app/utils/common.util";
import { Cross1Icon, EyeOpenIcon, EyeClosedIcon } from "@radix-ui/react-icons";
import { useFormik } from "formik";
import React, { useEffect, useState } from "react";
import * as Yup from "yup";

const SignIn = ({ onClose }) => {
  const [isSignUp, setIsSignUp] = useState(false);

  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    password: Yup.string()
      .required("Password is required")
      .min(6, "Password must be at least 6 characters long"),
    name: isSignUp
      ? Yup.string().required("Name is required for sign up")
      : Yup.string(),
  });

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      name: "",
      isPasswordVisible: false,
    },
    validationSchema: validationSchema,
    onSubmit: async (values, { setSubmitting, resetForm }) => {
      try {
        let responseData;
        if (values.name) {
          responseData = await postRequest("auth/v1/signup", {
            email: values.email,
            password: values.password,
            userName: values.name,
          });
          successMessage("Account created successfully!");
          setIsSignUp(false);
        } else {
          responseData = await postRequest("auth/v1/login", {
            email: values.email,
            password: values.password,
          });
          localStorage.setItem("isLogin", true);
          localStorage.setItem("user", JSON.stringify(responseData));
          successMessage("Signed in successfully!");
          onClose();
        }
      } catch (error) {
        errorMessage(error?.response?.data?.data);
      } finally {
        resetForm();
        setSubmitting(false);
      }
    },
  });

  const toggleSignUp = () => {
    setIsSignUp(!isSignUp);
    formik.resetForm();
  };

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  const togglePasswordVisibility = () => {
    formik.setFieldValue("isPasswordVisible", !formik.values.isPasswordVisible);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white relative w-full max-w-md mx-auto rounded-lg shadow-lg p-8">
        <h2 className="text-2xl font-bold mb-6 text-center">
          Sign {isSignUp ? "Up" : "In"}
        </h2>
        <Cross1Icon
          onClick={onClose}
          className="absolute top-4 right-4 hover:text-red-500"
        />
        <form className="space-y-4" onSubmit={formik.handleSubmit}>
          {isSignUp && (
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700"
              >
                Name <span className="text-red-500">*</span>
              </label>
              <input
                id="name"
                name="name"
                type="text"
                autoComplete="name"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.name}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline;"
                placeholder="Your Name"
              />
              {formik.touched.name && formik.errors.name ? (
                <div className="text-red-500 text-sm">{formik.errors.name}</div>
              ) : null}
            </div>
          )}
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email Address <span className="text-red-500">*</span>
            </label>
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline;"
              placeholder="Your Email"
            />
            {formik.touched.email && formik.errors.email ? (
              <div className="text-red-500 text-sm">{formik.errors.email}</div>
            ) : null}
          </div>
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Password <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <input
                id="password"
                name="password"
                type={formik.values.isPasswordVisible ? "text" : "password"}
                autoComplete="current-password"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.password}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline;"
                placeholder="Your Password"
              />
              <div
                className="absolute top-2 right-0 flex items-center pr-3 cursor-pointer"
                onClick={togglePasswordVisibility}
              >
                {formik.values.isPasswordVisible ? (
                  <EyeClosedIcon className="h-6 w-6 text-gray-500" />
                ) : (
                  <EyeOpenIcon className="h-6 w-6 text-gray-500" />
                )}
              </div>
            </div>
            {formik.touched.password && formik.errors.password ? (
              <div className="text-red-500 text-sm">
                {formik.errors.password}
              </div>
            ) : null}
          </div>
          <div className="flex items-center justify-between">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              disabled={formik.isSubmitting}
            >
              {isSignUp ? "Create Account" : "Sign In"}
            </button>
            <span
              className="text-sm text-gray-600 cursor-pointer hover:underline"
              onClick={toggleSignUp}
            >
              {isSignUp
                ? "Already have an account? Sign In"
                : "Don't have an account? Sign Up"}
            </span>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
