import { useRouter } from 'next/router';
import Layout from '../../components/layouts/Layout'
import Head from 'next/head'

const ProductCategory = () => {
    const router = useRouter()
    return (
        <Layout>
            <Head>
                <title>{ router.query.category }</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <h1>Category { router.query.category }</h1>
            <button onClick={() => router.push('/')}>Homepage</button>
        </Layout>
    )
}

export default ProductCategory
