import Head from 'next/head'
import styles from '../styles/Home.module.css'
// import { userName } from "@core/shared";
import { incrementCounter, decrementCounter, INCREMENT_COUNTER } from "@core/shared/actions/authActions"
import Wrapper from '@core/shared/styles/Wrapper'
import MyButton from '@core/shared/styles/Button'
import { FormInput, FormSelect, FormTextarea } from '@core/shared/styles/FormInput'
import Button from '@material-ui/core/Button'
import { useSelector,useDispatch } from 'react-redux'
import { useState } from 'react'

export async function getStaticProps() {
  const res = await fetch('http://localhost:3000/api/hello').then(res => res.json())

  return {
    props: {
      world: 'world',
      name: res.name
    }, // will be passed to the page component as props
  }
}

export default function Home({ world, name }) {
  const counter = useSelector(state => state.counter.value)
  const dispatch = useDispatch()

  const [color, setColor] = useState('#ffffff')

  return (
    <div className={styles.container}>
      <Head>
        <title>{ name }</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Wrapper>
        <h1 className={styles.title}>
          Counter = { counter }
        </h1>
        <span>color : {color}</span>
        <input type="color" value={color} onInput={(e) => setColor(e.target.value)} />
        <br />
        <FormInput type="text" />
        <FormSelect>
          <option>Select Me</option>
        </FormSelect>
        <FormTextarea />
        <MyButton fontColor={color} size={counter} onClick={() => dispatch(decrementCounter())}>Decrement</MyButton>
        <MyButton fontColor={color} size={counter} onClick={() => dispatch(incrementCounter())} primary >Increment</MyButton>
        <Button variant="contained" color="primary">
          Hello { world }
        </Button>
        </Wrapper>
      </main>

      <footer className={styles.footer}>
        <a
          href="#"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '} { name }
        </a>
      </footer>
    </div>
  )
}
