import React from 'react'
import css from './header.module.css'

const header = () => {
  return (
    <div className={css.wrapper}>
        <p className={css.header}>Current exchange rate between Euro and USD:</p>
    </div>
  )
}

export default header