import type { AppProps } from "next/app";
import Head from "next/head";
import Navbar from "../components/Navbar";
import RotateDevice from "../components/RotateDevice";
import "../styles/globals.css";

const MyApp = ({ Component, pageProps }: AppProps) => (
  <>
    <Head>
      <title>Joel Jose</title>
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon-16x16.png"
      />
      <link rel="manifest" href="/site.webmanifest" />
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="description" content="Joel Jose's Portfolio Website." />
      <meta property="og:title" content="Joel Jose" />
      <meta property="og:type" content="website" />
      <meta property="og:image" content="/banner.png" />
      <meta property="og:url" content="https://www.joeljose.dev" />
      <meta
        property="og:description"
        content="Joel Jose's Portfolio Website."
      />
    </Head>
    <RotateDevice />
    <Navbar />
    <Component {...pageProps} />
  </>
);

export default MyApp;
