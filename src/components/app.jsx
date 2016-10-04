import React from 'react';
import { BrowserRouter, Match, Miss, Link } from 'react-router';
import Header from './header/header';
import About from './about';
import Listings from './listings/listings';
import Footer from './footer';

const Login = () => <div style='{min-height: 600px;}'>
  This simulates our `login` page!
</div>;

export default () => <div>
  <BrowserRouter>
    <div>
      <Header />
      <Match exactly pattern='/' component={Listings} />
      <Match exactly pattern='/about' component={About} />
      <Match exactly pattern='/login' component={Login} />
      <Footer />
    </div>
  </BrowserRouter>
</div>;
