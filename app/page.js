import Link from 'next/link'
import { BsFillArrowUpCircleFill } from 'react-icons/bs'


const versionFetch = async () => {
  return fetch(
    'https://ddragon.leagueoflegends.com/api/versions.json'
  ).then((res) => res.json())
}

const fetchChamps = async () => {
  const version = await versionFetch()
  return fetch(
    `http://ddragon.leagueoflegends.com/cdn/${version[0]}/data/es_ES/champion.json`
  ).then((res) => res.json())
}

export default async function ChampionsPage () {
  const fetch = await fetchChamps()
  const champions = Object.values(fetch.data)


  return (
    <div className='flex flex-col'>
      <ul className='grid md:grid-cols-6 grid-cols-3 gap-10 m-5'>
        {champions.map((champion) => (
          <li key={champion.id} className='relative overflow-hidden rounded-tl-2xl rounded-br-2xl group hover:shadow-md hover:shadow-[#D6BF73] transition-all duration-500'>
            <Link href={`/champion/${champion.id}`}>
              <img
                src={`http://ddragon.leagueoflegends.com/cdn/img/champion/loading/${champion.id}_0.jpg`}
                alt={champion.id}
                className='object-cover w-full h-full object-top scale-110 group-hover:scale-125 group-hover:transition-all group-hover:duration-500'
              />
              <div
                className='absolute bottom-0 items-center text-white md:h-[10%] flex flex-row-reverse w-full bg-black bg-opacity-80 text-2xl justify-between px-2'
              >
                <h1 className='md:text-3xl md:tracking-wide text-sm group-hover:-translate-x-6 group-hover:text-[#D4AF37] transition-all duration-300'>
                  {champion.id.split(/(?=[A-Z])/).join(' ')}
                </h1>
              </div>
              <div className='flex gap-1 absolute top-0 bg-black p-2 rounded-br-2xl bg-opacity-70'>
                {champion.tags.map((tag) => (
                  <img key={tag} src={`/Tags/${tag}_icon.webp`} className='md:h-7 h-4' alt={tag} />
                ))}
              </div>
            </Link>
          </li>
        ))}
      </ul>
      <Link href={' '} className='fixed bottom-5 right-3'>
        <BsFillArrowUpCircleFill className='text-5xl text-yellow-500 hover:scale-110 transition-all duration-300' />
      </Link>
    </div>
  )
}
