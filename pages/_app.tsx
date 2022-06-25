import type { AppProps } from "next/app";
import Navbar from "../components/Navbar";
import RotateDevice from "../components/RotateDevice";
import "../styles/globals.css";

const MyApp = ({ Component, pageProps }: AppProps) => (
  <>
    <RotateDevice />
    <Navbar />
    <Component {...pageProps} />
  </>
);

export default MyApp;
