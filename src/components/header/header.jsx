import React from 'react';
import { Link } from 'react-router';
//import classnames from 'classnames/bind';
import SearchBar from './searchbar';
import NavBar from './navbar';
import styles from './header.css'; 

export default () => <div className={ styles.header }>

  <div className={ styles.row1 }>
    <Link to='/login' className={ styles.infolink }>login</Link>
    &nbsp;&nbsp;&#8226;&nbsp;&nbsp;
    <Link to='/about' className={ styles.infolink }>about</Link>
  </div>

  <div className={ styles.row2 }>

    <Link to='/' className={ styles.logo }>
      What's<em>On!</em>
    </Link>

    <div className={ styles.tagline }>
      <strong>&#8216;</strong>
        The best TV listings for the interwebs!
      <strong>&#8217;</strong>
    </div>

  </div>

  <div className={ styles.row3 }>
    <SearchBar />
  </div>

  <div className={ styles.row4 }>
    <NavBar />
  </div>

</div>;
