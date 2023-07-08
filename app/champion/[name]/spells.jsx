"use client";

import { useState } from "react";
import styles from "./spells.module.css";

export default function Spells({
  passive,
  spellQ,
  spellW,
  spellE,
  spellR,
  descriptionPassive,
  descriptionQ,
  descriptionW,
  descriptionE,
  descriptionR,
  ImgPassive,
  ImgQ,
  ImgW,
  ImgE,
  ImgR,
  keyChamp,
}) {
  const [selectedName, setSelectedName] = useState(passive);
  const [selectedDescription, setSelectedDescription] =
    useState(descriptionPassive);
  const [selectedSpell, setSelectedSpell] = useState("P");

  const handleSelected = (description, name) => {
    setSelectedName(name);
    setSelectedDescription(description);
  };

  const getSpellStyles = (spellName) => {
    if (spellName === selectedName) {
      return {
        transform: "scale(106%)",
        transitionProperty: "all",
        transitionDuration: "0.7s",
        boxShadow: "-6px 9px 13px 3px rgba(0,0,0,0.5)",
        cursor: "default",
      };
    } else {
      return {};
    }
  };

  const setKeyChamp = () => {
    if (keyChamp.length === 1) {
      return "000" + keyChamp;
    } else if (keyChamp.length === 2) {
      // Agregar dos ceros al principio si tiene 2 letras
      return "00" + keyChamp;
    } else {
      // Agregar un cero al principio si tiene 3 letras
      return "0" + keyChamp;
    }
  };

  return (
    <div className="h-min md:w-1/2 bg-gradient-to-r from-c4 to-c3 p-5 rounded-tr-3xl rounded-bl-3xl">
      <div className="flex md:gap-10 gap-5">
        <div>
          <img
            src={`http://ddragon.leagueoflegends.com/cdn/13.13.1/img/passive/${ImgPassive}`}
            className="rounded-xl cursor-pointer border-2 border-c2"
            onClick={() => {
              handleSelected(descriptionPassive, passive);
              setSelectedSpell("P");
            }}
            style={getSpellStyles(passive)}
          />
        </div>
        <div
          onClick={() => {
            handleSelected(descriptionQ, spellQ);
            setSelectedSpell("Q");
          }}
          style={getSpellStyles(spellQ)}
          className={styles.spell}
        >
          <img
            src={`http://ddragon.leagueoflegends.com/cdn/13.13.1/img/spell/${ImgQ}.png`}
            className="rounded-xl cursor-pointer border-2 border-c2"
          />
          <h1
            className="absolute md:text-6xl text-4xl font-bold select-none translate-x-1/2 translate-y-1/3 bottom-0 right-0 text-c1 font-mono"
            style={{ textShadow: "4px 2px 4px black" }}
          >
            Q
          </h1>
        </div>
        <div
          className={styles.spell}
          onClick={() => {
            handleSelected(descriptionW, spellW);
            setSelectedSpell("W");
          }}
          style={getSpellStyles(spellW)}
        >
          <img
            src={`http://ddragon.leagueoflegends.com/cdn/13.13.1/img/spell/${ImgW}.png`}
            className="rounded-xl cursor-pointer border-2 border-c2"
          />
          <h1
            className="absolute md:text-6xl text-4xl font-bold select-none translate-x-1/2 translate-y-1/3 bottom-0 right-0 text-c1 font-mono"
            style={{ textShadow: "4px 2px 4px black" }}
          >W</h1>
        </div>
        <div
          className={styles.spell}
          onClick={() => {
            handleSelected(descriptionE, spellE);
            setSelectedSpell("E");
          }}
          style={getSpellStyles(spellE)}
        >
          <img
            src={`http://ddragon.leagueoflegends.com/cdn/13.13.1/img/spell/${ImgE}.png`}
            className="rounded-xl cursor-pointer border-2 border-c2"
          />
          <h1
            className="absolute md:text-6xl text-4xl font-bold select-none translate-x-1/2 translate-y-1/3 bottom-0 right-0 text-c1 font-mono"
            style={{ textShadow: "4px 2px 4px black" }}
          >E</h1>
        </div>
        <div
          className={styles.spell}
          onClick={() => {
            handleSelected(descriptionR, spellR);
            setSelectedSpell("R");
          }}
          style={getSpellStyles(spellR)}
        >
          <img
            src={`http://ddragon.leagueoflegends.com/cdn/13.13.1/img/spell/${ImgR}.png`}
            className="rounded-xl border-2 border-c2"
          />
          <h1
            className="absolute md:text-6xl text-4xl font-bold select-none translate-x-1/2 translate-y-1/3 bottom-0 right-0 text-c1 font-mono"
            style={{ textShadow: "4px 2px 4px black" }}
          >R</h1>
        </div>
      </div>
      <div className="md:py-10 py-7 px-4">
        <h3 className="md:text-3xl text-2xl font-bold mb-2 text-c1">{selectedName}</h3>
        <p
          className="md:text-base text-sm text-c1"
          dangerouslySetInnerHTML={{ __html: selectedDescription }}
        ></p>
      </div>
      <video
        src={`https://d28xe8vt774jo5.cloudfront.net/champion-abilities/${setKeyChamp()}/ability_${setKeyChamp()}_${selectedSpell}1.webm`}
        poster={`https://d28xe8vt774jo5.cloudfront.net/champion-abilities/${setKeyChamp()}/ability_${setKeyChamp()}_${selectedSpell}1.jpg`}
        autoPlay
        loop
        muted
        className="rounded-tr-3xl rounded-bl-3xl w-[70vh] m-auto mb-5 border-2 border-c2"
        style={{ boxShadow: "-6px 9px 13px 3px rgba(0,0,0,0.5)" }}
      />
    </div>
  );
}
