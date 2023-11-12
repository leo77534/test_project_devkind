import Head from "next/head";
import Layout from "@/layout/layout";
import Link from "next/link";
import { useFormik } from "formik";
import { register_vaildate } from "../lib/validate";
import { useRouter } from "next/router";
import { useState } from "react";

// The main component for user registration
export default function Register() {
  // Initialising Next.js router and state for age confirmation
  const router = useRouter();
  const [isAgeConfirmed, setIsAgeConfirmed] = useState(false);
  // Using Formik for form state management and validation
  const formik = useFormik({
    initialValues: {
      username: "",
      email: "",
      password: "",
      cpassword: "", // Confirm password
    },
    validate: register_vaildate, // Validation function from lib/validate
    onSubmit, // Callback function when form is submitted
  });

  // Function to handle form submission
  async function onSubmit(values) {
    // Checking if user has confirmed age
    if (isAgeConfirmed) {
      // Configuring options for the fetch request
      const options = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      };
      // Sending registration data to the server
      await fetch("http://localhost:3000/api/auth/signup", options)
        .then((res) => res.json())
        .then((data) => {
          // Redirecting to the home page if registration is successful
          if (data) router.push("http://localhost:3000");
        });
    } else {
      // Displaying an alert if age confirmation is not checked
      alert("Please confirm that you are at least 18 years old.");
    }
  }

  // Function to handle checkbox change for age confirmation
  const handleAgeConfirmationChange = () => {
    setIsAgeConfirmed(!isAgeConfirmed);
  };

  // Rendering the registration form
  return (
    <Layout>
      <Head>
        <title>Register</title>
      </Head>
      <section className="w-3/4 mx-auto flex flex-col gap-10">
        <div className="title">
          <h1 className="text-gray-800 text-4xl font-bold py-4">Register</h1>
          <p className="w-3/4 mx-auto text-gray-400">
            Please fill in you information
          </p>
        </div>

        {/*form*/}
        <form className="flex flex-col gap-5" onSubmit={formik.handleSubmit}>
          <div className="input-group">
            <input
              type="text"
              name="Username"
              placeholder="Username"
              {...formik.getFieldProps("username")}
            />
          </div>
          {formik.errors.username && formik.touched.username ? (
            <span className="text-rose-500">{formik.errors.username}</span>
          ) : (
            <></>
          )}
          <div className="input-group">
            <input
              type="email"
              name="email"
              placeholder="email"
              {...formik.getFieldProps("email")}
            />
          </div>
          {formik.errors.email && formik.touched.email ? (
            <span className="text-rose-500">{formik.errors.email}</span>
          ) : (
            <></>
          )}
          <div className="input-group">
            <input
              type="password"
              name="password"
              placeholder="password"
              {...formik.getFieldProps("password")}
            />
          </div>
          {formik.errors.password && formik.touched.password ? (
            <span className="text-rose-500">{formik.errors.password}</span>
          ) : (
            <></>
          )}
          <div className="input-group">
            <input
              type="password"
              name="cpassword"
              placeholder="Comfirm Password"
              {...formik.getFieldProps("cpassword")}
            />
          </div>
          {formik.errors.cpassword && formik.touched.cpassword ? (
            <span className="text-rose-500">{formik.errors.cpassword}</span>
          ) : (
            <></>
          )}
          <div className="input-group">
            <label>
              <input
                type="checkbox"
                name="ageConfirmation"
                checked={isAgeConfirmed}
                onChange={handleAgeConfirmationChange}
              />
              I confirm that I am at least 18 years old
            </label>
          </div>

          {/*login buttons*/}
          <div className="input-button">
            <button type="submit" disabled={!isAgeConfirmed}>
              Sign Up
            </button>
          </div>
        </form>
        {/*bottom*/}
        <p className="text-center text-gray-400">
          Have an account?{" "}
          <Link href="/login" legacyBehavior>
            <a className="text-blue-700">Sign In</a>
          </Link>
        </p>
      </section>
    </Layout>
  );
}
