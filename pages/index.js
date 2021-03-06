import Head from 'next/head'
import Link from "next/link"


const Pokemons = ({ data }) => {
  
  return (
    <section>
      <Head>
        <title>PokéServerless</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <article>
        <h1 style={{ fontFamily: '"Comic Sans MS", cursive, sans-serif', fontSize: "32px" }}>🤨 What is this horrible page? </h1>

        <p style={{ fontSize: "20px" }}>First, thanks for the compliment! This a PoC (Proof of Concept) of a <Link href="https://nextjs.org/"><a style={{fontWeight: "bold", fontFamily: '"Comic Sans MS", cursive, sans-serif', color: "tomato", textDecoration: "none"}}>NextJS</a></Link> application using SSR (Server Side Rendering) with the open <Link href="https://pokeapi.co/"><a style={{fontWeight: "bold", fontFamily: '"Comic Sans MS", cursive, sans-serif', color: "tomato", textDecoration: "none"}}>PokéAPI</a></Link>. Also is deployed on AWS using Lambda@Edge and CloudFront with the <Link href="https://serverless-nextjs.com/docs/cdkconstruct/"><a style={{fontWeight: "bold", fontFamily: '"Comic Sans MS", cursive, sans-serif', color: "tomato", textDecoration: "none"}} >Serverless Nextjs CDK Construct</a></Link>. It just take one <b>Ditto</b> to recreate all other Pokémons on the! <b style={{fontWeight: "bold", fontFamily: '"Comic Sans MS", cursive, sans-serif'}}>Gotta Fetch'Em All!</b> <Link href="https://github.com/ibrahimcesar/nextjs-isg-cdk-aws"><a  style={{fontWeight: "bold", fontFamily: '"Comic Sans MS", cursive, sans-serif', color: "tomato", textDecoration: "none"}}>GOTO: Source code</a></Link>!</p>
      </article>

      <h2>Pokémons</h2>
        <ul style={{listStyle: "none"}}>
        {data.results.map((pokemon, _index) => (
          <li key={pokemon.name} style={{textTransform: "capitalize"}}>{_index + 1} <Link href={pokemon.name}><a style={{fontWeight: "bold", fontFamily: '"Comic Sans MS", cursive, sans-serif', color: "tomato", textDecoration: "none"}}>{pokemon.name}</a></Link></li>
        ))}
        </ul>
      <h3>Total of {data.count} Pokémons...</h3>
    </section>
  )
}

export async function getStaticProps() {
  const res = await fetch('https://pokeapi.co/api/v2/pokemon?limit=1118')
  const data = await res.json()

  return {
    props: {
      data,
    }
  }
}

export default Pokemons
