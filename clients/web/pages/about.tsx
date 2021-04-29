import Head from 'next/head'
import Layout from '../components/layouts/Layout'

const About = () => {
    return (
        <Layout>
            <Head>
                <title>About Page</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <h1>About</h1>
        </Layout>
    )
}

export default About
