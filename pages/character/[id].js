import Layout from '../components/Layout'
import Head from 'next/head'
import unfetch from 'isomorphic-unfetch'

function CharacterDetail({character}) {
  return (
    <Layout>
      <Head>
        <title>Anasayfa</title>
      </Head>
      <div>{character.name}</div>
      <figure>
        <img src={character.image} alt={character.name} />
      </figure>
    </Layout>
  )
}
export async function getStaticPaths() {
  const data = await unfetch('https://rickandmortyapi.com/api/character/' + id)
  const characters = await data.json()

  return {
    paths: characters.results.map((character) => {
      return { params: { id: '${character.id }'} }
    }),
    fallback: false // false or 'blocking'
  }
}

export async function getStaticProps({params}) {
  // data fetch
    const data = await unfetch('https://rickandmortyapi.com/api/character/' + params.id)
    const character = await data.json()
  //   console.log(characters)
  return {
    props: {
      character
    } // will be passed to the page component as props
  }
}

export default CharacterDetail
