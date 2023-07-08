"use client";

import { useState } from "react";

export default function Skins({ skins, champName }) {
  const [ImgCurrent, setImgCurrent] = useState({ num: 0, title: "default" });

  const getSkinStyles = (num) => {
    if (num === ImgCurrent.num) {
      return {
        transform: "scale(1.1)",
        transitionProperty: "all",
        transitionDuration: "0.7s",
        boxShadow: "1px 6px 6px 3px rgba(0,0,0,1)",
        cursor: "default",
      };
    } else {
      return {};
    }
  };

  return (
    <div className="flex md:flex-row flex-col-reverse gap-8 md:h-[80vh] h-auto justify-between p-3 md:py-5 md:px-8 md:mx-10 mt-5 rounded-tr-3xl rounded-bl-3xl bg-gradient-to-r from-c4 to-c3">
      <div className="flex md:flex-col flex-row md:w-1/12 flex-wrap items-center justify-center md:gap-4 gap-3">
        {skins.map((skin) => (
          <img
            src={`https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${champName}_${skin.num}.jpg`}
            alt={champName + " " + skin.num}
            className="w-[100px] md:w-auto cursor-pointer md:hover:scale-105 shadow-md transition-all duration-300 shadow-black hover:shadow-lg hover:shadow-black rounded-tl-md border-2 border-c2"
            onClick={() => setImgCurrent({ num: skin.num, title: skin.name })}
            style={getSkinStyles(skin.num)}
          />
        ))}
      </div>
      <div className="md:w-[70%]  relative rounded-tr-3xl rounded-bl-3xl overflow-hidden border-2 border-c2">
        <img
          src={`https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${champName}_${ImgCurrent.num}.jpg`}
          alt={champName + " " + ImgCurrent.num}
          className="object-cover h-full w-full"
        />

        <h1 className="absolute top-0 md:p-4 p-2 md:text-2xl text-lg bg-c4 bg-opacity-70 md:rounded-br-3xl rounded-br-2xl text-c1">
          {ImgCurrent.title}
        </h1>
      </div>
    </div>
  );
}
