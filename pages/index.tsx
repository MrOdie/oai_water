import type {NextPage} from 'next'
import Head from "next/head";
import Layout from "../assets/components/Layout";

const Home: NextPage = () => {
    return (
        <>
            <Head>
                <title>O'Donnell & Associates Inc.</title>
            </Head>
            <Layout page={Home}>

                Party on Wayne
            </Layout>
        </>
    )
}

export default Home
