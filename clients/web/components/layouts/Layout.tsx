import React from 'react'
import Menu from '../Menu'
import Footer from './Footer'
import styles from '../../styles/Home.module.css'

const Layout: React.FC = ({ children }) => {
    return (
    <div className={styles.container}>
        <Menu />
        <main className={styles.main}>
        { children }
        </main>
        <Footer/>
    </div>
    )
}

export default Layout
