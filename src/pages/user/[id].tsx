import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Layout from '../../component/layouts/Layout'
import styles from '../styles/Home.module.css'
import { useRouter } from 'next/router'

const DetailPage: NextPage = () => {
  const router = useRouter()
  const { id } = router.query
  return (
    <>
      <Head>
        <title>User Detail {id}</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout >
        User Detail {id}
      </Layout>
    </>
  )
}

export default DetailPage
