import { SyntheticEvent } from 'react'
import { useRouter } from 'next/router'
import { useFormik } from 'formik'
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

const Login = () => {
    const router = useRouter()

    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
        onSubmit: async () => {
            await fetch('http://localhost:5000/login', {
                method: 'POST',
                headers: { 'content-type': 'application/json' },
                credentials: 'include',
                body: JSON.stringify({ username, password })
            })

            router.push('/')
        }
    })

    return (
    <div>
        <h2>Login</h2>
        <form onSubmit={formik.handleSubmit}>
            <TextField
            fullWidth
            id="email"
            name="email"
            label="Email"
            value={formik.values.email}
            onChange={formik.handleChange}
            error={formik.touched.email && Boolean(formik.errors.email)}
            helperText={formik.touched.email && formik.errors.email}
            />
            <TextField
            fullWidth
            id="password"
            name="password"
            label="Password"
            type="password"
            value={formik.values.password}
            onChange={formik.handleChange}
            error={formik.touched.password && Boolean(formik.errors.password)}
            helperText={formik.touched.password && formik.errors.password}
            />
            <Button color="primary" variant="contained" fullWidth type="submit">
            Submit
            </Button>
        </form>
    </div>
    )
}

export default Login
