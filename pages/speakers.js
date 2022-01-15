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
        <div className="w-full bg-gray-900 rounded-xl text-white p-8 flex gap-4">
          <div>
            <h2 className="text-2xl font-medium leading-6 mb-2">
              Become a TEDx speaker
            </h2>
            <p className="w-full text-gray-400">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas
              possimus fugit accusantium molestiae illum molestias quae,
              tempore, officiis, cumque repellat quia necessitatibus aliquam.
            </p>
            <button className="mt-4 px-4 py-2 rounded-md bg-white text-black hover:bg-ted-red hover:text-white">
              Sign up today →
            </button>
          </div>
          <SpeakerIcon className="flex-none hidden md:block w-64 rounded-xl" />
        </div>
        <h2 className="text-2xl font-bold mt-8 mb-2 text-ted-red ml-4">
          All speakers:
        </h2>
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-4 mb-16">
          {speakers.map((speaker, index) => (
            <Speaker
              key={index}
              name={speaker.name}
              description={speaker.description}
              talk={speaker.talk}
              img={speaker.img}
            />
          ))}
        </div>
      </div>
    </>
  );
}
