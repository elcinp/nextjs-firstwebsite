import Layout from '../components/Layout'
import Head from 'next/head'
import Link from 'next/link'
import unfetch from 'isomorphic-unfetch'
import slug from 'slug'

function HomePage({ characters }) {
  return (
    <Layout>

      <Head>
        <title>Anasayfa</title>
      </Head>

      <h1 className='title'>THE RICK AND MORTY</h1>

      <ul>
        {characters.results.map((character) => (
          <li key={character.id}>
            <Link
              href="/character/[slug]"
              as={`/character/${slug(character.name)}-${character.id}`}
            >
              <a>{character.name}</a>
            </Link>
          </li>
        ))}
      </ul>

      <style jsx>{``}</style>
    </Layout>
  )
}

export async function getStaticProps() {
  // data fetch
  const data = await unfetch('https://rickandmortyapi.com/api/character/')
  const characters = await data.json()
  // console.log(characters)
  return {
    props: {
      characters
    } // will be passed to the page component as props
  }
}

export default HomePage
