import styles from '../styles/Home.module.css'
import Link from 'next/link'
import Image from 'next/image'

export default function Card({ pokemon }) {
  return (
    <div>
      <div className={styles.card} key={pokemon.id}>
        <Link href={`/pokemon/${pokemon.id}`} className={styles.cardContent}>
          <Image
            src={`https://jherr-pokemon.s3.us-west-1.amazonaws.com/${pokemon.image}`}
            alt={pokemon.name}
            width={200}
            height={200}
          />
          <button className={styles.offset}>{pokemon.name}</button>
        </Link>
           </div>
    </div>
  )
}


// old image html tag

 {/* <img
  src={`https://jherr-pokemon.s3.us-west-1.amazonaws.com/${pokemon.image}`}
  alt={pokemon.name}
/> */}