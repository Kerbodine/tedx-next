import { FiArrowUpRight } from "react-icons/fi";
import Image from "next/image";

export default function Speaker({ name, description, talk, img }) {
  return (
    <div className="w-full h-24 hover:ring-gray-200 hover:ring-2 rounded-xl flex px-4 py-4 gap-4 group relative cursor-pointer">
      {/* <Image
        className="w-16 h-16 border-ted-red border-4 rounded-full"
        src={img}
        alt={name}
      /> */}
      <div>
        <h3 className="text-lg uppercase font-bold tracking-tight text-ted-red -mb-2">
          {name}
        </h3>
        <p className="text-sm text-gray-500">{description}</p>
        <p className="text-lg font-bold">{talk}</p>
      </div>
      <FiArrowUpRight className="absolute top-2 hidden right-2 text-2xl text-gray-500 group-hover:block" />
    </div>
  );
}
