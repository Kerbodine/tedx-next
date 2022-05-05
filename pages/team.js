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

      <div className="px-8 py-16 mx-auto max-w-4xl pb-16">
        <h2 className="text-2xl font-bold mb-4 text-ted-red text-center">
          Meet The Team
        </h2>
        <div className="w-full flex justify-center">
          <div className="w-full max-w-2xl aspect-[5/3] rounded-2xl bg-gray-100 mb-4 ring-4 ring-ted-red/25 shadow-lg relative overflow-hidden">
            <Image src="/team.png" layout="fill" alt="Team Picture" />
          </div>
        </div>
        <h2 className="text-xl font-semibold mb-2 text-center">Teachers</h2>
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
        <Divider />
        <h2 className="text-xl font-semibold mb-2 text-center">Students</h2>
        <div className="mx-auto flex gap-4 flex-wrap justify-center">
          {students.map((member, index) => (
            <Member
              key={index}
              name={member.name}
              description={member.description}
              img={member.img}
            />
          ))}
        </div>
        <Divider />
        <h2 className="text-xl font-semibold mb-2 text-center">Guests</h2>
        <div className="mx-auto flex gap-4 flex-wrap justify-center">
          {guests.map((member, index) => (
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
