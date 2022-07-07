import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

import PrimaryCard from '../components/PrimaryCard'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'




export default function Home( { articles } ) {
  console.log(articles)
  return (
    <div className={styles.container}>
      <Head>
        <title>NXT</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div>

        <h1>Welcome</h1>


        <Container>

        <Row>
          {articles.map ((article)=>{
            return (
                    <Col xs={12} sm>
                      <div>
                        <PrimaryCard 
                        cardImageLocation={'/honda_side_profjpg.jpg'} 
                        cardHeader={article.title}
                        cardMeta={article.id}
                        cardDescription={article.body}
                        />

                      </div>
                    </Col>
                    )
          })}

        </Row>
        </Container>
        
      </div>


    </div>
  )
}

export const getStaticProps = async () => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=6`)
  const articles = await res.json()
  
  return {
    props: {
      articles
    }
  } 
}
