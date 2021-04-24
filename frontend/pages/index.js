import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
    
    return (
        <div style={{ backgroundImage: `url(${background})` }}>
            <Head>
                <title>AMS</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div>
                Hello theres
            </div>
        </div>
    )
}
