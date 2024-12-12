import React from "react";
import { Link } from "react-router-dom";
import Image from "./Image";

const Popular = () => {
  return (
    <div className="mt-8 flex flex-col lg:flex-row gap-8">
      <div className="w-full lg:w-1/2 flex flex-col gap-4">
        <Image
          src="depressed.jpg"
          alt="default"
          className="rounded-3xl object-cover"
        />
        <div className="flex items-center gap-4">
          <h1 className="font-semibold lg:text-lg">01.</h1>
          <Link to="/" className="text-blue-800 lg:text-lg">
            Catégorie
          </Link>
          <span className="text-gray-500">12/12/2024</span>
        </div>

        <Link to="/" className="text-xl lg:text-3xl font-semibold lg:font-bold">
          La cause principale de dépression chez les 30-35 ans est ReactJS
        </Link>
      </div>
      <div className="w-full lg:w-1/2 flex flex-col gap-4">
        <div className="lg:h-1/3 flex justify-between gap-4 items-center">
          <Image
            src="confused.jpg"
            alt="default"
            className="rounded-3xl object-cover w-1/3 aspect-video"
          />
          <div className="w-2/3">
            <div className="flex items-center gap-4 text-sm lg:text-base mb-4">
              <h1 className="font-semibold">02.</h1>
              <Link to="/" className="text-blue-800">
                Catégorie
              </Link>
              <span className="text-gray-500">12/12/2024</span>
            </div>
            <Link
              to="/"
              className="text-base sm:text-lg md:text-2xl lg:text-xl xl:text-2xl font-semibold"
            >
              C'est officiel: je sais pas ce que je fais, mais je le fais quand
              même
            </Link>
          </div>
        </div>
        <div className="lg:h-1/3 flex justify-between gap-4 items-center">
          <Image
            src="default-image.jpg"
            alt="default"
            className="rounded-3xl object-cover w-1/3 aspect-video"
          />
          <div className="w-2/3">
            <div className="flex items-center gap-4 text-sm lg:text-base mb-4">
              <h1 className="font-semibold">02.</h1>
              <Link to="/" className="text-blue-800">
                Catégorie
              </Link>
              <span className="text-gray-500">12/12/2024</span>
            </div>
            <Link
              to="/"
              className="text-base sm:text-lg md:text-2xl lg:text-xl xl:text-2xl font-semibold"
            >
              OLALA! Enfin un projet que je vais réellement finir ?!
            </Link>
          </div>
        </div>
        <div className="lg:h-1/3 flex justify-between gap-4 items-center">
          <Image
            src="chat-test.jpg"
            alt="default"
            className="rounded-3xl object-cover w-1/3 aspect-video"
          />
          <div className="w-2/3">
            <div className="flex items-center gap-4 text-sm lg:text-base mb-4">
              <h1 className="font-semibold">02.</h1>
              <Link to="/" className="text-blue-800">
                Catégorie
              </Link>
              <span className="text-gray-500">12/12/2024</span>
            </div>
            <Link
              to="/"
              className="text-base sm:text-lg md:text-2xl lg:text-xl xl:text-2xl font-semibold"
            >
              Les chats sont-ils vraiment des êtres supérieurs ? (La réponse est oui)
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Popular;
