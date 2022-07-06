import React from 'react'
import styles from '../styles/Home.module.css'

import Nav from './Nav'

export default function Layout({ children }) {
  return (
    <div>
        <h2>This is a header in the layout</h2>
        <Nav></Nav>
        <main>
            {children}
        </main>
    </div>
  )
}
