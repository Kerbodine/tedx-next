import Member from "../components/Member";
import { teachers, students, guests } from "../config.js";
import Divider from "../components/Divider";
import Head from "next/head";
import Image from "next/image";

export default function Team() {
  return (
    <>
      <Head>
        <title>Team | TEDxVictoriaShanghaiAcademy</title>
      </Head>
      <div className="px-6 py-16 mx-auto max-w-4xl pb-16">
        <h2 className="font-extrabold text-6xl sm:text-8xl text-center mb-2 sm:mb-4 text-ted-red/30">
          THE TEAM
        </h2>
        <div className="w-full flex justify-center">
          <div className="w-full max-w-2xl aspect-[5/3] rounded-2xl bg-gray-100 mb-4 ring-[6px] shadow-2xl ring-ted-red/30 relative overflow-hidden">
            <Image src="/team.png" layout="fill" alt="Team Picture" />
          </div>
        </div>
        <h2 className="mt-8 font-bold text-3xl sm:text-6xl text-center mb-4 text-black/20">
          TEACHERS
        </h2>
        <div className="mx-auto flex gap-4 flex-wrap justify-center">
          {teachers.map((member, index) => (
            <Member
              key={index}
              name={member.name}
              description={member.description}
              img={member.img}
            />
          ))}
        </div>
      </div>
    </>
  );
}
