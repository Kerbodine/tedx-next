import Head from "next/head";
import React from "react";

export default function About() {
  return (
    <>
      <Head>
        <title>About | TEDxVictoriaShanghaiAcademy</title>
      </Head>

      <div className="px-8 py-16 mx-auto max-w-4xl">
        <heading className="w-full relative h-10 flex items-center mb-2">
          <div className="absolute h-6 w-[6px] rounded-full bg-ted-red"></div>
          <h2 className="text-2xl ml-4 font-bold text-ted-red">
            A note from the event organizers:
          </h2>
        </heading>
        <p className="leading-6 text-gray-600">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis
          architecto repudiandae rerum. Minima obcaecati nisi quam facilis
          adipisci voluptas, veniam non eum odit porro eveniet vero nesciunt?
          Placeat, sapiente consequatur.
        </p>
        <heading className="w-full relative h-10 flex items-center mb-2 mt-8">
          <div className="absolute h-6 w-[6px] rounded-full bg-ted-red"></div>
          <h2 className="text-2xl ml-4 font-bold text-ted-red">About TEDx:</h2>
        </heading>
        <p className="leading-6 text-gray-600">
          In the spirit of ideas worth spreading, TEDx is a program of local,
          self-organized events that bring people together to share a TED-like
          experience. At a TEDx event, TED Talks video and live speakers combine
          to spark deep discussion and connection. These local, self-organized
          events are branded TEDx, where x = independently organized TED event.
          The TED Conference provides general guidance for the TEDx program, but
          individual TEDx events are self-organized. (Subject to certain rules
          and regulations.)
        </p>
        <heading className="w-full relative h-10 flex items-center mb-2 mt-8">
          <div className="absolute h-6 w-[6px] rounded-full bg-ted-red"></div>
          <h2 className="text-2xl ml-4 font-bold text-ted-red">About TED:</h2>
        </heading>
        <p className="leading-6 text-gray-600">
          TED is a nonprofit organization devoted to Ideas Worth Spreading.
          Started as a four-day conference in California 30 years ago, TED has
          grown to support its mission with multiple initiatives. The two annual
          TED Conferences invite the world&apos;s leading thinkers and doers to
          speak for 18 minutes or less. Many of these talks are then made
          available, free, at TED.com. TED speakers have included Bill Gates,
          Jane Goodall, Elizabeth Gilbert, Sir Richard Branson, Nandan Nilekani,
          Philippe Starck, Ngozi Okonjo-Iweala, Sal Khan and Daniel Kahneman.
          The annual TED Conference takes place each spring in Vancouver,
          British Columbia. TED&apos;s media initiatives include TED.com, where
          new TED Talks are posted daily; TED Translators, which provides
          subtitles and interactive transcripts as well as translations from
          volunteers worldwide; the educational initiative TED-Ed. TED has
          established The Audacious Project that takes a collaborative approach
          to funding ideas with the potential to create change at thrilling
          scale; TEDx, which supports individuals or groups in hosting local,
          self- organized TED-style events around the world, and the TED Fellows
          program, helping world-changing innovators from around the globe to
          amplify the impact of their remarkable projects and activities. Follow
          TED on Twitter at{" "}
          <span className="underline decoration-ted-red/25 hover:decoration-ted-red decoration-2">
            <a
              href="http://twitter.com/TEDTalks"
              target="_blank"
              rel="noreferrer"
            >
              http://twitter.com/TEDTalks
            </a>
          </span>
          , or on Facebook at{" "}
          <span className="underline decoration-ted-red/25 hover:decoration-ted-red decoration-2">
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
    </>
  );
}
