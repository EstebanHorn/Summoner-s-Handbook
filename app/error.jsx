'use client'

export default function Error () {
  return (
    <div className='lex flex-col justify-center items-center m-auto h-[100vh]'>
      <h1 className='text-red-600 font-mono text-6xl mb-10'>
        Error al Cargar la pagina
      </h1>
      <img src='https://www.leagueoflegends.com/static/no-ability-icon-feb372ba66a6fcea09cdacb239b4f171.png' alt='error' />
    </div>
  )
}
