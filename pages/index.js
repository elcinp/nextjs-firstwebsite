import Layout from '../components/Layout'

function HomePage() {
  return (
    <Layout>
      <head>
        <title>Anasayfa</title>
      </head>
      <h1>Welcome to Next.js!</h1>

      <style jsx>{`
        h1 {
          color:white;
          background-color: blue;
        }
        
      `}</style>
    </Layout>
  )
}

export default HomePage
