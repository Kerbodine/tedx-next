import { FiArrowUpRight } from "react-icons/fi";
import { Dialog, Transition } from "@headlessui/react";
import { useState, Fragment } from "react";
import Image from "next/image";
import { BiX } from "react-icons/bi";

export default function Speaker({ name, description, talk, img, bio }) {
  let [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 z-10 overflow-y-auto"
          onClose={closeModal}
        >
          <div className="min-h-screen px-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0 bg-black/50" />
            </Transition.Child>
            {/* This element is to trick the browser into centering the modal contents. */}
            <span
              className="inline-block h-screen align-middle"
              aria-hidden="true"
            >
              &#8203;
            </span>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <div className="inline-block w-full max-w-xl p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
                <Dialog.Title
                  as="h3"
                  className="text-xl font-medium leading-6 text-gray-900"
                >
                  {name}
                </Dialog.Title>
                <div className="mt-1">
                  <p className="text text-gray-500 leading-5">
                    {bio.map((text) => (
                      <>
                        <br />
                        <p>{text}</p>
                      </>
                    ))}
                  </p>
                </div>
                <button
                  onClick={closeModal}
                  className="absolute top-4 right-4 p-2 text-2xl rounded-full hover:bg-gray-100 text-gray-600"
                >
                  <BiX />
                </button>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
      <div
        className="w-full h-24 hover:bg-gray-100 rounded-xl flex px-4 py-4 gap-4 group cursor-pointer relative"
        onClick={openModal}
      >
        <div className="w-16 h-16 border-ted-red border-4 rounded-full">
          <Image
            src={img}
            alt={name}
            width={64}
            height={64}
            className="rounded-full"
          />
        </div>
        <div>
          <h3 className="text-lg uppercase font-bold tracking-tight text-ted-red -mb-2">
            {name}
          </h3>
          <p className="text-sm text-gray-500">{description}</p>
          <p className="text-lg font-bold">{talk}</p>
        </div>
        <FiArrowUpRight className="absolute top-2 hidden right-2 text-2xl text-gray-500 group-hover:block" />
      </div>
    </>
  );
}
