import Logo from "../public/logo-dark.svg";

export default function Footer() {
  return (
    <div className="w-full h-56 bg-black">
      <div className="mx-auto max-w-4xl text-center px-8 pt-8 text-gray-500">
        <Logo className="w-72 md:w-84 mx-auto mb-4" />
        <p>This Independent TEDx event is operated under license from TED.</p>
        <p>© {new Date().getFullYear()} TEDxVSA, All rights reserved.</p>
      </div>
    </div>
  );
}
