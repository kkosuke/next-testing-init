import Head from 'next/head'
import Image from 'next/image'
import { Layout } from '../components/Layout'
import styles from '../styles/Home.module.css'

const CommentPage: React.FC = () => {
  return (
    <Layout title="Comment">
      <p className="text-4xl">Welcome to Comment</p>
    </Layout>
  )
}
export default CommentPage
