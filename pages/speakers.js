import Speaker from "../components/Speaker";
import SpeakerIcon from "../public/speaker.svg";
import { speakers } from "../config.js";
import Head from "next/head";

export default function Speakers() {
  return (
    <>
      <Head>
        <title>Speakers | TEDxVictoriaShanghaiAcademy</title>
      </Head>
      <div className="px-8 pt-8 mx-auto max-w-4xl">
        <h2 className="text-2xl font-bold mt-8 mb-2 text-ted-red ml-4">
          All speakers:
        </h2>
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-4 mb-16">
          {speakers.map((speaker, index) => (
            <Speaker
              key={index}
              name={speaker.name}
              // description={speaker.description}
              talk={speaker.talk}
              img={speaker.img}
              bio={speaker.bio}
            />
          ))}
        </div>
      </div>
    </>
  );
}
