import Link from 'next/link'
import styles from '../styles/champions.module.css'
import { BsFillArrowUpCircleFill } from 'react-icons/bs'

const fetchChamps = async () => {
  return fetch(
    'http://ddragon.leagueoflegends.com/cdn/14.4.1/data/es_ES/champion.json'
  ).then((res) => res.json())
}

export default async function ChampionsPage () {
  const fetch = await fetchChamps()
  const champions = Object.values(fetch.data)

  return (
    <div className='flex flex-col'>
      <ul className='grid md:grid-cols-6 grid-cols-3 gap-5 m-5'>
        {champions.map((champion) => (
          <li key={champion.id} className={styles.container}>
            <Link href={`/champion/${champion.id}`}>
              <img
                src={`http://ddragon.leagueoflegends.com/cdn/img/champion/loading/${champion.id}_0.jpg`}
                alt={champion.id}
                className={styles.champion}
              />
              <div
                className={`absolute bottom-0 items-center text-c1 md:h-[10%] flex flex-row-reverse w-full bg-c4 bg-opacity-80 text-2xl justify-between px-2 ${styles.text}`}
              >
                <h1 className='md:text-3xl md:tracking-wide text-sm'>
                  {champion.id.split(/(?=[A-Z])/).join(' ')}
                </h1>
              </div>
              <div className='flex gap-1 absolute top-0 bg-c3 p-2 rounded-br-2xl bg-opacity-70'>
                {champion.tags.map((tag) => (
                  <img key={tag} src={`/Tags/${tag}_icon.webp`} className='md:h-7 h-4' alt={tag} />
                ))}
              </div>
            </Link>
          </li>
        ))}
      </ul>
      <Link href={' '} className='fixed bottom-5 right-3'>
        <BsFillArrowUpCircleFill className='text-5xl text-c3 hover:scale-110 transition-all duration-300' />
      </Link>
    </div>
  )
}
