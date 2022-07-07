import React from 'react'
import styles from '../styles/Home.module.css'

import NavBarComponent from './NavBarComponent'

export default function Layout({ children }) {
  return (
    <div>
        <h2>This is a header in the layout</h2>
        <NavBarComponent></NavBarComponent>
        <main>
            {children}
        </main>
    </div>
  )
}
