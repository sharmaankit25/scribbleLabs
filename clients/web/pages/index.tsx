import Head from 'next/head'
// import { userName } from "@core/shared";
import { incrementCounter, decrementCounter, INCREMENT_COUNTER } from "@core/shared/actions/authActions"
import Wrapper from '@core/shared/styles/Wrapper'
import MyButton from '@core/shared/styles/Button'
import { FormInput, FormSelect, FormTextarea } from '@core/shared/styles/FormInput'
import Button from '@material-ui/core/Button'
import { useSelector,useDispatch } from 'react-redux'
import { useState } from 'react'
import Layout from '../components/layouts/Layout'
import { InferGetStaticPropsType } from 'next'

// export const getServerSideProps = async () => {
//   const res = await fetch('http://localhost:3000/api/hello')
//   const { name }: HelloInterface = await res.json()

//   return {
//     props: {
//       world: 'world',
//       name
//     }, // will be passed to the page component as props
//   }
// }

export const getStaticProps = async () => {
  const res = await fetch('http://localhost:3000/api/hello')
  const { name }: HelloInterface = await res.json()

  const res2 = await fetch('http://localhost:5000/settings')
  const { primaryColor }: ThemeInterface = await res2.json()

  return {
    props: {
      world: 'world',
      name,
      primaryColor
    }, // will be passed to the page component as props
  }
}

interface HelloInterface {
  name: string
}

interface ThemeInterface {
  primaryColor: string
}

export default function Home(props: InferGetStaticPropsType<typeof getStaticProps>) {
  const { world, name, primaryColor } = props
  const counter = useSelector(state => state.counter.value)
  const dispatch = useDispatch()

  const [color, setColor] = useState(primaryColor || '#ffffff')

  return (
    <Layout>
      <Head>
        <title>{ name }</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Wrapper>
        <h5>
          Counter = { counter }
        </h5>
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
          Hello { world } { name }
        </Button>
      </Wrapper>
      </Layout>
  )
}
