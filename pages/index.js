import Layout from '../components/Layout'
import Head from 'next/head'
import unfetch from 'isomorphic-unfetch'

function HomePage({ characters }) {
  return (
    <Layout>
      <Head>
        <title>Anasayfa</title>
      </Head>
      <h1>Welcome to Next.js!</h1>
      <ul>

      {characters.results.map(character => (
        <li key={character.id}>{character.name}</li>
      ))}
      </ul>

      <style jsx>{`
        h1 {
          color: white;
          background-color: blue;
        }
      `}</style>
    </Layout>
  )
}

export async function getStaticProps() {
  // data fetch
  const data = await unfetch('https://rickandmortyapi.com/api/character/')
  const characters = await data.json()
  console.log(characters)
  return {
    props: {
      characters
    } // will be passed to the page component as props
  }
}

export default HomePage
