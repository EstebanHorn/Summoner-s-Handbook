export default function InfoChamp ({ AllyTips, EmenyTips, Lore }) {
  return (
    <div className='flex flex-col md:w-1/2 gap-6'>
      <div className='bg-white bg-opacity-10 p-3 rounded-tl-3xl shadow-md shadow-[#D6BF73]'>
        <h1 className='text-[#D6BF73] text-3xl font-semibold'>Lore</h1>

        <p className='md:text-base text-sm text-c1 z-10 h-auto '>{Lore}</p>
      </div>

      <ul className='bg-white bg-opacity-10 text-white p-2 rounded-tl-2xl rounded-br-2xl shadow-md shadow-[#D6BF73]'>
        <h1 className='text-[#D6BF73] text-3xl mb-2'>Tips aliados</h1>

        {AllyTips.map((tip, index) => (
          <li key={index} className='mb-3'>
            <p className='md:text-base text-sm'>● {tip}</p>
          </li>
        ))}
      </ul>
      <ul className='bg-white bg-opacity-10 text-white  p-2 rounded-tr-2xl rounded-bl-2xl shadow-md shadow-[#D6BF73]'>
        <h1 className='text-[#D6BF73] text-3xl pr-2 mb-2'>Tips Enemigos</h1>

        {EmenyTips.map((tip, index) => (
          <li key={index} className='mb-3'>
            <p className='md:text-base text-sm'>● {tip}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}
