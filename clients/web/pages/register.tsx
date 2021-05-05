import { SyntheticEvent, useState } from "react"
import { useRouter } from 'next/router'
import Layout from '../components/layouts/Layout'

const Register = () => {
    const router = useRouter()

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const onSubmitHandler = async (evt: SyntheticEvent) => {
        evt.preventDefault()
        await fetch('http://localhost:5000/register', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify({ username, password })
        })

        router.push('/login')
    }

    return (
        <Layout>
        <h2>Register</h2>
        <form onSubmit={onSubmitHandler}>
            <input type="text" placeholder="Username" value={username} onChange={e => setUsername(e.target.value)} />
            <input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} />
            <button type="submit">Register</button>
        </form>
        </Layout>
    )
}

export default Register
