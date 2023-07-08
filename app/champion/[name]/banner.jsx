export default function BannerChamp ({ Title, Name, Tags }) {
  return (
    <div
      className='flex relative rounded-tl-3xl rounded-br-3xl md:w-5/6 w-full md:h-[65vh] h-[35vh] flex-col md:gap-8 justify-end items-center mb-10'
      style={{
        backgroundImage: `url(https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${Name}_0.jpg)`,
        backgroundSize: 'cover',
        backgroundPosition: '50% 10%'
      }}
    >
      <h2
        className='md:text-[20px] text-sm md:font-bold text-center w-max text-c1'
        style={{ textShadow: '1px 1px 1px black' }}
      >
        {Title}
      </h2>
      <h1
        className='md:text-[80px] text-4xl font-bold text-center text-c2'
        style={{ textShadow: '-2px 2px 3px black' }}
      >
        {Name.split(/(?=[A-Z])/).join(' ')}
      </h1>

      <ul className='flex gap-4 bg-black bg-opacity-40 p-2 rounded-t-2xl'>
        {Tags.map((tag, index) => (
          <li key={index}>
            <img src={`/Tags/${tag}_icon.webp`} className='md:h-16 h-10' alt={tag} />
          </li>
        ))}
      </ul>
    </div>
  )
}
