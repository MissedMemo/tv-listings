import React, {Component} from 'react';
import classnames from 'classnames/bind';
import styles from './login.css';

let cx = classnames.bind(styles);


export default class Login extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isVisible: false
    }
    this.visibilityToggle = this.visibilityToggle.bind(this);

    // ONE listener for ALL clicks (filter for login toggle elements)
    document.body.addEventListener(
      'click', this.visibilityToggle, false
    );
  }

  visibilityToggle( e ) {

    // Ignore elements not tagged with `toggle` attributes

    if( e.target.dataset.togglelogin ) {

      e.preventDefault();

      if( !this.state.isVisible )
        document.body.classList.add('disable-scrolling');
      else
        document.body.classList.remove('disable-scrolling');

      this.setState({ isVisible: !this.state.isVisible });
    }
  }

  render() {
    return <div className={
        cx('overlay',{'hidden': !this.state.isVisible})
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