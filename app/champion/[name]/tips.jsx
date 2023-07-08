export default function InfoChamp ({ AllyTips, EmenyTips, Lore }) {
  return (
    <div className='flex flex-col md:w-1/2 gap-4'>
      <div className='bg-gradient-to-t from-c3 to-c4 p-3 rounded-tl-3xl'>
        <h1 className='text-c2 text-3xl font-semibold'>Lore</h1>

        <p className='md:text-base text-sm text-c1 z-10 h-auto '>{Lore}</p>
      </div>

      <ul className='bg-gradient-to-l from-c3 to-c4 text-c1  p-2 rounded-tl-2xl rounded-br-2xl'>
        <h1 className='text-c2 text-3xl mb-2'>Tips aliados</h1>

        {AllyTips.map((tip, index) => (
          <li key={index} className='mb-3'>
            <p className='md:text-base text-sm'>● {tip}</p>
          </li>
        ))}
      </ul>
      <ul className='bg-gradient-to-r from-c3 to-c4 text-c1 p-2 rounded-tr-2xl rounded-bl-2xl'>
        <h1 className='text-c2 text-3xl text-right pr-2 mb-2'>Tips aliados</h1>

        {EmenyTips.map((tip, index) => (
          <li key={index} className='mb-3'>
            <p className='md:text-base text-sm'>● {tip}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}
