import React from 'react'
// import './Login.css'

import { StyleSheet, css } from 'aphrodite'

import WithLogging from '../HOC/WithLogging'

const Login = ({login}) => {
  return (
    <>
        <p>Login to access the full dashboard</p>
        <form className={css(styles.form)}>
          <div className={css(styles.labelInputBlock)}>
          <label htmlFor="email" className={css(styles.labelS)}>email:</label>
          <input id="email" type="text" className={css(styles.inputS)}/>
          </div>
          <div className={css(styles.labelInputBlock)}>
          <label htmlFor="password" className={css(styles.labelS)}>password:</label>
          <input id="password" type="password" className={css(styles.inputS)}/>
          </div>
          <button className={css(styles.buttonS)} type='button' onClick={login}>OK</button>
        </form>
      </>
  )
}

export default WithLogging(Login)

// define Aphrodite styles
const styles = StyleSheet.create({
  form: {
    '@media (min-width: 600px)': {
      display: 'flex',
      flexDirection: 'row'
    }
  },
  labelS: {
    textTransform: 'capitalize',
    paddingRight: '1rem'
  },
  inputS: {
    marginRight: '1rem',
    border: 'none',
    outline: 'none',
    background: 'transparent',
    backgroundColor: 'none'
  },
  labelInputBlock: {
      paddingBlock: '.3rem'
  },
  buttonS: {
    display: 'block',
    background: 'none',
    border: '2px solid Yellow'
  }
})
