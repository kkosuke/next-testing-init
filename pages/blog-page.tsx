import Head from 'next/head'
import Image from 'next/image'
import { Layout } from '../components/Layout'
import styles from '../styles/Home.module.css'

const BlogPage: React.FC = () => {
  return (
    <Layout title="Blog">
      <p className="text-4xl">Welcome to Blog</p>
    </Layout>
  )
}
export default BlogPage
