import styles from '../styles/Home.module.css'
import LogoImage from '../static/pokeLogo.png'
import Image from 'next/image'
import Link from 'next/link'
export default function Header() {
  return (
    <div className={styles.header}>
      <div className={styles.logoContainer}>
        <Link href='/'>
          <Image
            src={LogoImage}
            alt='logo'
            width={100}
            height={100}
          />
        </Link>
        </div>
      </div>
  )
}