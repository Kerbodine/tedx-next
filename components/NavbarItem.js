import { useRouter } from "next/router";

export default function NavbarItem({ title, path }) {
  const router = useRouter();

  return (
    <div className="font-medium h-10 relative flex items-center group">
      <p
        className={`text-gray-700 z-10 px-1 py-1 rounded-md uppercase font-semibold`}
      >
        {title}
      </p>
      <div
        className={`absolute bottom-0 w-full h-1 ${
          router.pathname === path ? "bg-ted-red" : "group-hover:bg-gray-300"
        }`}
      ></div>
    </div>
  );
}
