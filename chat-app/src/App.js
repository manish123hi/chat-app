"use client";
import React from "react";
import { useFormik } from "formik";

const SignupForm = () => {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      phoneNumber: "",
      fullName: "",
      gender: "",
    },
    onSubmit: (values) => {
      console.log(values);
    },
  });
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <form onSubmit={formik.handleSubmit}>
        <label htmlFor="firstName">Email</label>
        <input
          id="email"
          name="email"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.email}
        />
        <label htmlFor="lastName">Password</label>
        <input
          id="password"
          name="password"
          type="password"
          onChange={formik.handleChange}
          value={formik.values.password}
        />
        <label htmlFor="email">Phone Number</label>
        <input
          id="phoneNumber"
          name="phoneNumber"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.phoneNumber}
        />
        <label htmlFor="email">Full Name</label>
        <input
          id="fullName"
          name="fullName"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.fullName}
        />
        <label htmlFor="email">Gender</label>
        <input
          id="gender"
          name="gender"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.gender}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default SignupForm;
