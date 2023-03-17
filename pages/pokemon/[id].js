import React from 'react'
import styles from '../../styles/Details.module.css'
import Head  from 'next/head';
import Link from "next/link";
import Image from "next/image";


// return object of different PATHS
export async function getStaticPaths() {
  //create request to DB
  const res = await fetch("https://jherr-pokemon.s3.us-west-1.amazonaws.com/index.json")  

  const pokemon = await res.json()

  return {
    paths: pokemon.map(pokemon => {
      return {
        params: {id: pokemon.id.toString()}
      }
    }),
    fallback: false
  }
  // fallback, when the path is not the one? generate empty page?   
}

// server side props could also take params, in this case 
export async function getStaticProps({params}) {
  const res = await fetch(`https://jherr-pokemon.s3.us-west-1.amazonaws.com/pokemon/${params.id}.json`)
  
  return {
    props: {
      pokemon: await res.json()
    }
  }
}


export default function Details({pokemon}) {
  
  return (
    <div>
      <Head>
        <title>{pokemon.name}</title>
      </Head>
      <div className={styles.layout}>
        <Link href='/'>
          Back to home
        </Link>
        <div>
          <Image
            className={styles.picture}
            src={`https://jherr-pokemon.s3.us-west-1.amazonaws.com/${pokemon.image}`}
            alt={pokemon.name}
            width={200}
            height={200}
          />
          {/* <img
            className={styles.picture}
            src={`https://jherr-pokemon.s3.us-west-1.amazonaws.com/${pokemon.image}`}
            alt={ pokemon.name}
          /> */}
        </div>
        <div>
          <div className={styles.name}>{pokemon.name}</div>
          <div className={styles.type}>{pokemon.type}</div>
          <table>
              <thead className={styles.header}>
              <tr>
                <th>Name</th>
                <th>Value</th>
              </tr>
            </thead>
            <tbody>
              {pokemon.stats && pokemon.stats.map(({ name, value }) => (
                <tr key={name}>
                  <td className={styles.attribute}>{name}</td>
                  <td>{value}</td>
                </tr>
              ))}
            </tbody>
            </table>
        </div>
      </div>
    </div>
  )
  
          // <table>
          //<thead className={styles.header}>
          //     <tr>
          //       <th>Name</th>
          //       <th>Value</th>
          //     </tr>
          //   </thead>
          //   <tbody>
          //     {pokemon.stats.map(({ name, value }) => (
          //       <tr key={name}>
          //         <td className={styles.attribute}>{name}</td>
          //         <td>{value}</td>
          //       </tr>
          //     ))}
          //   </tbody>
          // </table>
        
}