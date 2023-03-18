import Head from 'next/head'
import Image from 'next/image'
import Layout from '../components/Layout'
import styles from '../styles/Home.module.css'

const Home: React.FC = () => {
  return (
    <Layout title="Home">
      <p className="text-4xl">Welcome to Next.js</p>
    </Layout>
  )
}
export default Home
