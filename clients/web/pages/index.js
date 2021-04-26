import Head from 'next/head'
import styles from '../styles/Home.module.css'
// import { userName } from "@core/shared";
import { incrementCounter, decrementCounter } from "@core/shared/actions/authActions"
import Wrapper from '@core/shared/styles/Wrapper'
import MyButton from '@core/shared/styles/Button'
import Button from '@material-ui/core/Button'
import { useSelector,useDispatch } from 'react-redux'

// export async function getStaticProps(context) {

//   return {
//     props: {}, // will be passed to the page component as props
//   }
// }

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
        <MyButton onClick={() => dispatch(decrementCounter())}>Decrement</MyButton>
        <MyButton primary onClick={() => dispatch(incrementCounter())}>Increment</MyButton>
        <Button variant="contained" color="primary">
          Hello World
        </Button>
        </Wrapper>
      </main>

      <footer className={styles.footer}>
        <a
          href="#"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '} ScribbleLabs
        </a>
      </footer>
    </div>
  )
}
