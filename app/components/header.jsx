import Link from "next/link";
import Searcher from "./searcher";
const fetchChamps = async () => {
  return fetch(
    "http://ddragon.leagueoflegends.com/cdn/13.13.1/data/es_ES/champion.json"
  )
    .then((res) => res.json())
    .catch(function (error) {
      console.log(
        "Hubo un problema con la carga de compeones:" + error.message
      );
    });
};
export default async function Header() {
  const links = [
    {
      label: "Summoner's Handbook",
      route: "/",
    },
  ];
  const fetch = await fetchChamps();
  const champions = Object.values(fetch.data);

  return (
    <div className=" w-full h-11 pb-2 bg-gradient-to-r from-c3 to-c4">
      <nav className="flex md:justify-center md:px-5 py-1">
        <ul className="w-1/2 flex flex-wrap md:w-full">
          {links.map(({ label, route }) => (
            <li
              key={route}
              className="md:text-3xl flex gap-2 items-center text-base px-3 leading-4 tracking-wide md:font-extrabold transition-all duration-500 text-c1 hover:scale-[101%] hover:underline  "
            >
              <img src="/Logo/icon.png" className="h-8" />
              <Link href={route}>{label}</Link>
            </li>
          ))}
        </ul>
        <Searcher champs={champions} />
      </nav>
    </div>
  );
}
