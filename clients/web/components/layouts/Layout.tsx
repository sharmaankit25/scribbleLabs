import React from 'react'
import Menu from '../Menu'
import Footer from './Footer'
import { Container } from '@material-ui/core'
import styles from '../../styles/Home.module.css'

const Layout: React.FC = ({ children }) => {
    return (
    <Container>
        <Menu />
        <main className={styles.main}>
        { children }
        </main>
        <Footer/>
    </Container>
    )
}

export default Layout
