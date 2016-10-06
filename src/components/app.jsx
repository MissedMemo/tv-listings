import React from 'react';
import { BrowserRouter, Match, Miss } from 'react-router';
import Header from './header/header';
import About from './about';
import LoginDialog from './login';
import Profile from './profile';
import Listings from './listings/listings';
import Custom from './listings/custom';
import Footer from './footer';

export default () => <div>
  <BrowserRouter>
    <div>
      <Header />
      <Match exactly pattern='/' component={Listings} />
      <Match pattern='/about' component={About} />
      <Match pattern='/custom' component={Custom} />
      <Match pattern='/profile' component={Profile} />
      <Footer />
    </div>
  </BrowserRouter>
  <LoginDialog />
</div>;
