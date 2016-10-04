import React from 'react'
import { Link } from 'react-router';
import styles from './navbar.css';

export default () => <div className={ styles.navbar }>
  <Link to='/' className={ styles.navlink }>programs</Link>
  <Link to='/custom' className={ styles.navlink }>my schedule</Link>
  <Link to='/profile' className={ styles.navlink }>profile</Link>
</div>
