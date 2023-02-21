import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Double Dude Chute</title>
        <meta name="description" content="The Double Dude Chute Main Page" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.svg" />
      </Head>
      <main className={styles.main}>
        <div className={styles.center}>
          <h1
            style={{
              fontSize: '7em',
            }}
          >
            👬🪂
          </h1>
        </div>
      </main>
    </>
  )
}
