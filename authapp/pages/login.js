import Head from "next/head";
import Layout from "@/layout/layout";
import Link from "next/link";
import { useFormik } from "formik";
import login_vaildate from "../lib/validate";
import { signIn, signOut } from "next-auth/react";
import { useRouter } from "next/router";

// React functional component for the login page
export default function Login() {
  // Next.js router hook
  const router = useRouter();
  // Formik hook for handling form state and validation
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validate: login_vaildate, // Validation function imported from lib/validate
    onSubmit, // Callback function when the form is submitted
  });

  // Callback function to handle form submission
  async function onSubmit(values) {
    // Sign in using NextAuth credentials provider
    const status = await signIn("credentials", {
      redirect: false,
      email: values.email,
      password: values.password,
      callbackUrl: "/",
    });

    // If sign-in is successful, redirect to the specified URL
    if (status.ok) router.push(status.url);
  }

  // JSX rendering for the login page
  return (
    <Layout>
      <Head>
        <title>Login</title>
      </Head>

      <section className="w-3/4 mx-auto flex flex-col gap-10">
        <div className="title">
          <h1 className="text-gray-800 text-4xl font-bold py-4">
            Test-Project
          </h1>
          <p className="w-3/4 mx-auto text-gray-400">authentication system</p>
        </div>

        {/*form*/}
        <form className="flex flex-col gap-5" onSubmit={formik.handleSubmit}>
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
          {/*login buttons*/}
          <div className="input-button">
            <button type="submit">Login</button>
          </div>
        </form>
        {/* Bottom section with a link to the registration page */}
        <p className="text-center text-gray-400">
          Don't have an account?{" "}
          <Link href="/register" legacyBehavior>
            <a className="text-blue-700">Sign Up</a>
          </Link>
        </p>
      </section>
    </Layout>
  );
}
