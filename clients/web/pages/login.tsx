import { SyntheticEvent } from 'react'
import { useRouter } from 'next/router'
import { useFormik } from 'formik'
import { Button, TextField, Typography } from '@material-ui/core'
import { Send as SendIcon } from '@material-ui/icons'
import Layout from '../components/layouts/Layout'

const Login = () => {
	const router = useRouter()

	const formik = useFormik({
		initialValues: {
			username: '',
			password: '',
		},
		onSubmit: async (values) => {
			/**
			 *
				"username": "admin",
				"password": "Admin@3982_!"
			 */
			await fetch('http://localhost:5000/auth/signin', {
				method: 'POST',
				headers: { 'content-type': 'application/json' },
				credentials: 'include',
				body: JSON.stringify(values),
			})

			router.push('/')
		},
	})

	return (
		<Layout>
			<Typography
				variant="h6"
				color="textSecondary"
				component="h2"
				gutterBottom
			>
				Login
			</Typography>
			<form onSubmit={formik.handleSubmit}>
				<TextField
					fullWidth
					id="username"
					name="username"
					label="Username"
					value={formik.values.username}
					onChange={formik.handleChange}
					error={Boolean(formik.touched.username) && Boolean(formik.errors.username)}
					helperText={formik.touched.username && formik.errors.username}
				/>
				<TextField
					fullWidth
					id="password"
					name="password"
					label="Password"
					type="password"
					value={formik.values.password}
					onChange={formik.handleChange}
					error={Boolean(formik.touched.password) && Boolean(formik.errors.password)}
					helperText={formik.touched.password && formik.errors.password}
				/>

				<Button color="primary" endIcon={<SendIcon />} variant="contained" type="submit">
					Login
				</Button>
			</form>
		</Layout>
	)
}

export default Login
