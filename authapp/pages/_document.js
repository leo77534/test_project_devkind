/**
 * This custom document file is used to modify the overall structure
 * of the HTML document rendered by Next.js. It extends the default
 * NextDocument component and includes customizations for the <Html>,
 * <Head>, <body>, <Main>, and <NextScript> components.
 *
 * The <Html> component sets the language attribute to 'en'.
 * The <Head> component can be used to add custom metadata.
 * The <body> component includes the <Main> component, which
 * renders the main content of the page, and the <NextScript>
 * component, which includes the necessary scripts for Next.js
 * functionality.
 *
 * @see https://nextjs.org/docs/advanced-features/custom-document
 */
import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
