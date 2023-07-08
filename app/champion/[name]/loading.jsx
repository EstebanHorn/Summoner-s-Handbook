import logo from '../../../assets/logo.png'
import Image from 'next/image'
import styles from './loading.module.css'

export default function loading () {
  return (
    <section className='flex relative justify-center items-center h-screen m-auto'>
      <div className={styles.loadingSpinner} />
      <Image src={logo} className='absolute md:w-auto' />
    </section>
  )
}
