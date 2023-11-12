// This React component serves as the entry point for your Next.js application.
// It includes the necessary global styles from "@/styles/globals.css" and utilizes
// the SessionProvider from next-auth/react to manage user authentication sessions.
import "@/styles/globals.css";
import { SessionProvider } from "next-auth/react";

// The main App component receives Component and pageProps as props, where Component
// represents the current page component and pageProps holds the initial props for that component.
export default function App({ Component, pageProps }) {
  return (
    // Wrapping the entire application with SessionProvider to enable authentication session management.
    <SessionProvider session={pageProps.session}>
      <Component {...pageProps} />
    </SessionProvider>
  );
}
