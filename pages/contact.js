import Head from "next/head";
import FormInput from "../components/FormInput";
import ContactIcon from "../public/contact.svg";

export default function Contact() {
  return (
    <>
      <Head>
        <title>Contact | TEDxVictoriaShanghaiAcademy</title>
      </Head>
      <div className="px-8 py-16 mx-auto max-w-4xl flex flex-col-reverse md:flex-row gap-8 pb-16">
        <form className="flex flex-col gap-2">
          <div className="mb-2">
            <h2 className="text-2xl font-bold text-ted-red">Contact Us:</h2>
            <p className="text-sm text-gray-500">
              Your message will be sent our event managers
            </p>
          </div>
          <div className="flex gap-4">
            <div className="w-full">
              <FormInput
                label="First name: *"
                id="first-name"
                type="text"
                required="true"
              />
            </div>
            <div className="w-full">
              <FormInput
                label="Last name:"
                id="last-name"
                type="text"
                required=""
              />
            </div>
          </div>
          <div>
            <FormInput
              label="Email address: *"
              id="email"
              type="email"
              required="true"
            />
          </div>
          <div>
            <FormInput
              label="Subject: *"
              id="subject"
              type="subject"
              required="true"
            />
          </div>
          <div>
            <label
              htmlFor="message"
              className="block text-sm font-bold text-gray-500"
            >
              Message: *
            </label>
            <textarea
              id="message"
              required
              className="w-full h-28 resize-none bg-gray-100 rounded-md outline-none p-2 focus:ring-2 focus:ring-ted-red"
            />
          </div>
          <p className="text-sm text-gray-500 -mt-2">*required</p>
          <button
            type="submit"
            className="px-4 py-2 bg-gray-200 text-black hover:text-white hover:bg-ted-red rounded-md"
          >
            Submit
          </button>
        </form>
        <div className="flex items-center justify-center">
          <ContactIcon className="w-full" />
        </div>
      </div>
    </>
  );
}
