import Head from 'next/head'
import styles from '../styles/Home.module.css'
// import { userName } from "@core/shared";
import { incrementCounter, decrementCounter } from "@core/shared/actions/authActions"
import Wrapper from '@core/shared/styles/Wrapper'
import Button from '@core/shared/styles/Button'
import { useSelector,useDispatch } from 'react-redux'

export default function Home() {

  const counter = useSelector(state => state.counter.value)
  const dispatch = useDispatch()

  return (
    <div className={styles.container}>
      <Head>
        <title>Scribble Labs</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Wrapper>
        <h1 className={styles.title}>
          Counter = { counter }
        </h1>
        <Button onClick={() => dispatch(decrementCounter())}>Decrement</Button>
        <Button primary onClick={() => dispatch(incrementCounter())}>Increment</Button>
        </Wrapper>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '} ScribbleLabs
        </a>
      </footer>
    </div>
  )
}
