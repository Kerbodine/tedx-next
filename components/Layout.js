import Head from "next/head";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function Wrapper({ children }) {
  return (
    <div>
      <Head>
        <meta
          name="description"
          content="TEDxVictoriaShanghaiAcademy @June 11th 2022 - Sign up today!"
        ></meta>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <meta
          property="og:title"
          content="TEDxVictoriaShanghaiAcademy Website"
        />
        <meta
          property="og:description"
          content="TEDxVictoriaShanghaiAcademy @June 11th 2022 - Sign up today!"
        />
        <meta property="og:image" content="/preview.png"></meta>
      </Head>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
