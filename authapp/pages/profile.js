import Link from "next/link";
import { getSession } from "next-auth/react";
import { useFormik } from "formik";
import { register_vaildate } from "../lib/validate";
import Layout from "@/layout/layout";
import Head from "next/head";

// Functional component for the profile update page
export default () => {
  // Using useFormik hook to manage form state and validation
  const formik = useFormik({
    initialValues: {
      username: "",
      email: "",
      password: "",
      cpassword: "", // 'cpassword' stands for confirm password
    },
    validate: register_vaildate, // Validation function for formik
    onSubmit,
  });

  // Async function to handle form submission
  async function onSubmit(values) {
    // Configuring fetch options for updating user profile
    const options = {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(values),
    };
    // Making a fetch request to the server's update API endpoint
    await fetch("http://localhost:3000/api/auth/update", options)
      .then((res) => res.json())
      .then((data) => {
        // If update is successful, redirect to the home page
        if (data) router.push("http://localhost:3000");
      });
  }

  // JSX structure for the profile update page
  return (
    <Layout>
      <Head>
        <title>Profile</title>
      </Head>
      <section className="container mx-auto text-center">
        <div className="title">
          <h1 className="text-gray-800 text-4xl font-bold py-4">
            Profile Page
          </h1>
          <p className="w-3/4 mx-auto text-red-400">
            You can only update your username and change your password, please
            don't change your email address{" "}
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

          {/*login buttons*/}
          <div className="input-button">
            <button type="submit">Update</button>
          </div>
        </form>
        <div className="flex justify-center">
          <Link href={"/"} legacyBehavior>
            <a className="mt-5 px-10 py-1 rounded-sm bg-indigo-500 text-gray-50">
              Home Page
            </a>
          </Link>
        </div>
      </section>
    </Layout>
  );
};

// Server-side function to check user session before rendering the page
export async function getServerSideProps({ req }) {
  const session = await getSession({ req });

  // Redirecting to the login page if the user is not authenticated
  if (!session) {
    return {
      redirect: {
        destination: "/login",
        premanent: false,
      },
    };
  }
  // Returning the user session if authenticated
  return {
    props: { session },
  };
}
