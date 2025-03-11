import React from 'react'
import css from './display.module.css'
import Box from '../displayBox/displayBox'

const display = () => {
  return (
    <div className={css.wrapper}>
      <Box currency={"euro"}/>
      <p className={css.equals}>=</p>
      <Box currency={"dollar"}/>
    </div>
  )
}

export default display