import React from 'react';
import styles from './login.css';

export default () => <div className={ styles.overlay }>
  <form>
    <input type='text' placeholder='user name' />
    <input type='text' placeholder='password' />
    <input type='text' placeholder='repeat password' />
    <a href='#' className={ styles.forgot }>forgot password?</a>
    <button className={ styles.login }>Login</button>
    <button className={ styles.register }>Register</button>
    <button className={ styles.cancel }>Cancel</button>
  </form>
</div>;