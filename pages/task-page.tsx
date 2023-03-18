import Head from 'next/head'
import Image from 'next/image'
import { Layout } from '../components/Layout'
import styles from '../styles/Home.module.css'

const TaskPage: React.FC = () => {
  return (
    <Layout title="Context">
      <p className="text-4xl">Welcome to Task</p>
    </Layout>
  )
}
export default TaskPage
