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
    <div className='md:right-5 right-2 z-20 w-1/2 md:w-auto flex flex-col my-auto'>
      <div className='flex justify-center items-center w-full'>
        <input
          name='Campeon'
          className='bg-black bg-opacity-70 rounded-xl text-sm text-white px-3 p-1 w-full placeholder:text-gray-200 outline-none border-2 border-white focus:border-2 focus:border-gray-300 focus:bg-black focus:bg-opacity-80 transition-all duration-300'
          onChange={(e) => setInput(e?.target?.value)}
          placeholder='Search'
        />
        <AiOutlineSearch className='relative right-6 text-white' />
      </div>

      {Input.length > 0 && (
        <ul className='bg-black w-full rounded-xl py-2 mt-1 bg-opacity-60 overflow-x-hidden '>
          {filteredArray.map((champion) => (
            <li className='' key={champion.id}>
              <Link
                href={`/champion/${champion.id}`}
                className='flex items-center justify-between px-4 py-1 hover:bg-[#D4AF37] hover:bg-opacity-80 hover:scale-105 transition-all duration-200'
              >
                <h1 className='text-white text-base'>
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
    </div>
  )
}
