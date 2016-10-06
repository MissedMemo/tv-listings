import React, {Component} from 'react';
import classnames from 'classnames/bind';
import styles from './login.css';

let cx = classnames.bind(styles);


export default class Login extends Component {

  constructor(props) {
    super(props);
    this.state = {
      hidden: true
    }
    this.toggleVisibility = this.toggleVisibility.bind(this);

    // ONE listener for ALL clicks (filter for login toggle elements)
    document.body.addEventListener(
      'click', this.toggleVisibility, false
    );
  }

  toggleVisibility( e ) {

    // Ignore elements not tagged with `toggle` attributes

    if( e.target.dataset.togglelogin ) {

      e.preventDefault();

      this.setState({ hidden: !this.state.hidden }, () => {
        if( this.state.hidden )
          document.body.classList.remove('disable-scrolling');
        else
          document.body.classList.add('disable-scrolling');          
      });
    }
  }

  render() {
    return <div className={
        cx('overlay',{'hidden': this.state.hidden})
      }>
      <form>
        <input type='text' placeholder='user name' />
        <input type='text' placeholder='password' />
        <input type='text' placeholder='repeat password' />
        <a href='#' className={ styles.forgot }>forgot password?</a>
        <button className={ styles.login } data-togglelogin>Login</button>
        <button className={ styles.register } data-togglelogin>Register</button>
        <button className={ styles.cancel } data-togglelogin>Cancel</button>
      </form>
    </div>;
  }
};