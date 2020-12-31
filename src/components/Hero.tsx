import React from "react";
import Image from "next/image";

export default function Hero({ src }) {
  return (
    <div className="m-4 w-8/12 flex flex-col md:flex-row justify-between">
      <div className="max-w-xs flex flex-col justify-evenly text-white">
        {/* Title */}
        <h1 className="m-1 text-3xl font-bold">Your Custom Star Map</h1>

        {/* Subtitle */}
        <p className="text-md font-light md:text-lg">
          Create a 18"x24" star map that shows the stars exactly as they were on
          a specific date and location with a personalized message!
        </p>

        {/* Button */}
        <button className="my-4 md:my-0 w-60 p-2 shadow-lg bg-gradient-to-b from-yellow-200 to-yellow-500 rounded-md text-md hover:from-yellow-400 hover:to-yellow-600">
          Create Your Star Map
        </button>
      </div>

      {/* Star Chart Image */}
      <div className="cursor-pointer min-w-min min-h-min shadow-2xl transition duration-700 transform hover:-translate-y-0.5 hover:scale-105">
        <Image src={src} width="279" height="373" />
      </div>
    </div>
  );
}
