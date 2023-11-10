import Head from "next/head";
import styles from "@/styles/Home.module.css";
import Link from "next/link";
import { getSession, useSession, signOut } from "next-auth/react";
import Layout from "@/layout/layout";

function handleSignOut() {
  signOut();
}

export default function Home() {
  const { data: session } = useSession();

  return (
    <div className={styles.container}>
      <Head>
        <title>Home Page</title>
      </Head>
      {session ? User({ session, handleSignOut }) : Guest()}
    </div>
  );
}

// Guset
function Guest() {
  return (
    <main className="container mx-auto text-center py-20">
      <h3 className="text-4xl font-bold">Guest Homepage</h3>
      <div className="flex justify-center">
        <Link href={"/login"} legacyBehavior>
          <a className="mt-5 px-10 py-1 rounded-sm bg-indigo-500 text-gray-50">
            Sign In
          </a>
        </Link>
      </div>
    </main>
  );
}

// Authorise user
function User({ session, handleSignOut }) {
  return (
    <Layout>
      <main className="container mx-auto text-center py-20">
        <h3 className="text-4xl font-bold">User Homepage</h3>

        <div className="detail">
          <h5>{session.user.email}</h5>
        </div>

        <div className="flex justify-center">
          <button
            onClick={handleSignOut}
            className="mt-5 px-10 py-1 rounded-sm bg-indigo-500 text-gray-50">
            Sign Out
          </button>
        </div>

        <div className="flex justify-center">
          <Link href={"/profile"} legacyBehavior>
            <a className="mt-5 px-10 py-1 rounded-sm bg-indigo-500 text-gray-50">
              Profile Page
            </a>
          </Link>
        </div>
      </main>
    </Layout>
  );
}

export async function getServerSideProps({ req }) {
  const session = await getSession({ req });

  if (!session) {
    return {
      redirect: {
        destination: "/login",
        permanent: false,
      },
    };
  }

  return {
    props: { session },
  };
}
