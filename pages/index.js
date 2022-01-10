import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Home | TEDxVSA</title>
      </Head>
      <video
        className={`w-screen h-[calc(100vh-5rem)] object-cover`}
        autoPlay="autoplay"
        muted
        loop
      >
        <source src="intro.mp4" type="video/mp4" />
      </video>
    </>
  );
}
