import Head from "next/head";
import { useState } from "react";
import { BiChevronDown, BiChevronRight } from "react-icons/bi";

export default function Home() {
  const [showDropdown1, setShowDropdown1] = useState(false);
  const [showDropdown2, setShowDropdown2] = useState(false);

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
        <div className="my-8">
          <h2 className="text-3xl font-bold mb-4 text-ted-red">About us:</h2>
          <p className="text-lg leading-[1.5] text-white/75">
            Hello! We are the organizers of TEDxVictoriaShanghaiAcademy. We are
            very glad to present the TEDx event that we have spent upwards of
            eight months planning. We hope that everybody will appreciate the
            efforts that our speakers, team of organizers, and technicians have
            made to make this day possible. We also hope you will gain many
            insights pertaining to the theme of this event - &quot;What it means
            to be human in 2022.&quot; Thank you very much for being a part of
            TEDxVictoriaShanghaiAcademy!
          </p>
        </div>
        <hr className="border-2 border-white/25" />
        <div className="my-8">
          <div className="flex items-center gap-3">
            <button
              className="-ml-2 w-8 h-8 bg-gray-800 hover:bg-ted-red hover:text-white transition-colors rounded-md flex items-center justify-center text-ted-red text-4xl"
              onClick={() => {
                setShowDropdown1(!showDropdown1);
              }}
            >
              <BiChevronDown
                className={`${
                  showDropdown1 ? "rotate-0" : "-rotate-90"
                } transition-transform duration-300`}
              />
            </button>
            <h2 className="text-3xl font-bold text-ted-red">What is TEDx?</h2>
          </div>
          <div className={`${showDropdown1 ? "flex" : "hidden"} mt-1`}>
            <div className="ml-1.5 mr-7 border-2 border-gray-700 bg-gray-500 my-2"></div>
            <p className="text-lg leading-[1.5] text-white/75">
              In the spirit of ideas worth spreading, TED has created a program
              called TEDx. TEDx is a program of local, self-organized events
              that bring people together to share a TED-like experience. Our
              event is called TEDxVictoriaShanghaiAcademy, where x =
              independently organized TED event. At our
              TEDxVictoriaShanghaiAcademy event, TED Talks video and live
              speakers will combine to spark deep discussion and connection in a
              small group. The TED Conference provides general guidance for the
              TEDx program, but individual TEDx events, including ours, are
              self-organized.
            </p>
          </div>
        </div>
        <div className="my-8">
          <div className="flex items-center gap-3">
            <button
              className="-ml-2 w-8 h-8 bg-gray-800 hover:bg-ted-red hover:text-white transition-colors rounded-md flex items-center justify-center text-ted-red text-4xl"
              onClick={() => {
                setShowDropdown2(!showDropdown2);
              }}
            >
              <BiChevronDown
                className={`${
                  showDropdown2 ? "rotate-0" : "-rotate-90"
                } transition-transform duration-300`}
              />
            </button>
            <h2 className="text-3xl font-bold text-ted-red">About TED:</h2>
          </div>
          <div className={`${showDropdown2 ? "flex" : "hidden"} mt-1`}>
            <div className="ml-1.5 mr-7 border-2 border-gray-700 bg-gray-500 my-2"></div>
            <p className="text-lg leading-[1.5] text-white/75">
              TED is a nonprofit organization devoted to Ideas Worth Spreading.
              Started as a four-day conference in California 30 years ago, TED
              has grown to support its mission with multiple initiatives. The
              two annual TED Conferences invite the world&apos;s leading
              thinkers and doers to speak for 18 minutes or less. Many of these
              talks are then made available, free, at TED.com. TED speakers have
              included Bill Gates, Jane Goodall, Elizabeth Gilbert, Sir Richard
              Branson, Nandan Nilekani, Philippe Starck, Ngozi Okonjo-Iweala,
              Sal Khan and Daniel Kahneman. The annual TED Conference takes
              place each spring in Vancouver, British Columbia. TED&apos;s media
              initiatives include TED.com, where new TED Talks are posted daily;
              TED Translators, which provides subtitles and interactive
              transcripts as well as translations from volunteers worldwide; the
              educational initiative TED-Ed. TED has established The Audacious
              Project that takes a collaborative approach to funding ideas with
              the potential to create change at thrilling scale; TEDx, which
              supports individuals or groups in hosting local, self- organized
              TED-style events around the world, and the TED Fellows program,
              helping world-changing innovators from around the globe to amplify
              the impact of their remarkable projects and activities. Follow TED
              on Twitter at{" "}
              <span className="underline decoration-4 decoration-ted-red/40 hover:decoration-ted-red transition-colors underline-offset-2">
                <a
                  href="http://twitter.com/TEDTalks"
                  target="_blank"
                  rel="noreferrer"
                >
                  http://twitter.com/TEDTalks
                </a>
              </span>
              , or on Facebook at{" "}
              <span className="underline decoration-4 decoration-ted-red/40 hover:decoration-ted-red transition-colors underline-offset-2">
                <a
                  href="http://www.facebook.com/TED"
                  target="_blank"
                  rel="noreferrer"
                >
                  http://www.facebook.com/TED
                </a>
              </span>
              .
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
