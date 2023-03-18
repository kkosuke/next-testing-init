import Head from 'next/head'
import Image from 'next/image'
import Layout from '../components/Layout'
import styles from '../styles/Home.module.css'

const ContextPage: React.FC = () => {
  return (
    <Layout title="Context">
      <p className="text-4xl">context page</p>
    </Layout>
  )
}
export default ContextPage
