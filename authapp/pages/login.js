import Head from "next/head";
import Layout from "@/layout/layout";
import Link from "next/link";
import { useFormik } from "formik";

export default function Login() {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit,
  });

  async function onSubmit(values) {
    console.log(values);
  }

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
          <div className="input-group">
            <input
              type="password"
              name="password"
              placeholder="password"
              {...formik.getFieldProps("password")}
            />
          </div>
          {/*login buttons*/}
          <div className="input-button">
            <button type="submit">Login</button>
          </div>
        </form>
        {/*bottom*/}
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
