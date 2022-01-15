import Head from "next/head";

export default function Home() {
  return (
    <div className="bg-black">
      <Head>
        <title>Home | TEDxVictoriaShanghaiAcademy</title>
      </Head>
      <video
        className={`w-screen h-[calc(100vh-5rem)] object-cover`}
        autoPlay="autoplay"
        muted
        loop
      >
        <source src="intro.mp4" type="video/mp4" />
      </video>
      <div className="px-8 py-16 mx-auto max-w-4xl">
        <h2 className="text-2xl font-bold mb-4 text-ted-red">What is TEDx?</h2>
        <p className="leading-6 text-gray-300">
          In the spirit of ideas worth spreading, TED has created a program
          called TEDx. TEDx is a program of local, self-organized events that
          bring people together to share a TED-like experience. Our event is
          called TEDxVictoriaShanghaiAcademy, where x = independently organized
          TED event. At our TEDxVictoriaShanghaiAcademy event, TED Talks video
          and live speakers will combine to spark deep discussion and connection
          in a small group. The TED Conference provides general guidance for the
          TEDx program, but individual TEDx events, including ours, are
          self-organized.
        </p>
      </div>
    </div>
  );
}
