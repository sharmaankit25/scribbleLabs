import Head from 'next/head'
import Layout from '../../components/layouts/Layout'

const Products = () => {
    return (
        <Layout>
            <Head>
                <title>Products Listing</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <h1>Products</h1>
        </Layout>
    )
}

export default Products
