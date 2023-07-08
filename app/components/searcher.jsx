'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'
import { AiOutlineSearch } from 'react-icons/ai'

export default function Searcher ({ champs }) {
  const [Input, setInput] = useState('')
  const [filteredArray, setFilteredArray] = useState([])

  useEffect(() => {
    const filtered = champs.filter((item) =>
      item.id.toLowerCase().startsWith(Input.toLowerCase())
    )
    setFilteredArray(filtered)
  }, [Input, champs])

  return (
    <div className='absolute md:right-5 right-2 z-20 w-1/2 md:w-auto'>
      <label className='relative flex justify-center items-center flex-col md:w-[30vh]'>
        <div className='flex justify-center items-center w-full'>
          <input
            name='Campeon'
            className='bg-c3 rounded-xl text-sm text-c1 p-1 w-full placeholder:text-gray-200 outline-none border-2 border-c3 focus:border-2 focus:border-c2 focus:bg-c3 transition-all duration-500'
            onChange={(e) => setInput(e?.target?.value)}
            placeholder='Search'
          />
          <AiOutlineSearch className='absolute right-4 text-c1' />
        </div>

        {Input.length > 0 && (
          <ul className='bg-c4 w-full rounded-xl py-2 mt-1 bg-opacity-80 overflow-hidden'>
            {filteredArray.map((champion) => (
              <li className='' key={champion.id}>
                <Link
                  href={`/champion/${champion.id}`}
                  className='flex justify-between px-4 py-1 hover:bg-c3 hover:bg-opacity-80 hover:scale-105 transition-all duration-200'
                >
                  <h1 className='text-c1 text-base'>
                    {champion.id.split(/(?=[A-Z])/).join(' ')}
                  </h1>
                  <img
                    className='w-8'
                    src={`http://ddragon.leagueoflegends.com/cdn/13.13.1/img/champion/${champion.id}.png`}
                    alt={champion.id}
                  />
                </Link>
              </li>
            ))}
          </ul>
        )}
      </label>
    </div>
  )
}
