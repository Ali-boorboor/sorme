import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="shortcut icon" href="/images/png/favicon.png" type="image/x-icon" />
        <title>Sorme</title>
      </Head>
      <body className="selection:bg-primary-color selection:text-white">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
