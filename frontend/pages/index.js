import Head from 'next/head'
import NavBar from '../components/NavBar'
import styles from '../styles/Home.module.css'
import FadeInSection from '../components/FadeIn'
import { Media } from 'reactstrap';
import Image from 'next/image'

export default function Home() {
    return (
        <div>
            <Head>
                <title>AMS</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className={styles.container}>
                <FadeInSection key={1}>
                    <Image src="/../public/media/search.png" width="100%" height="100%" />
                </FadeInSection>
            </div>
            <div className={styles.container}>
                <FadeInSection key={2}>
                    <Image src="/../public/media/search.png" width="100%" height="100%" />
                </FadeInSection>
            </div>
            <div className={styles.container}>
                <FadeInSection key={3}>
                    <Image src="/../public/media/search.png" width="100%" height="100%" />
                </FadeInSection>
            </div>
        </div>
    )
}
