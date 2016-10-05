import React, {Component} from 'react'
import { Link } from 'react-router';
import classnames from 'classnames/bind';
import styles from './navbar.css';

let cx = classnames.bind(styles);

{/* NavBar must also set/store active route (selected <Link>) */}

export default class NavBar extends Component {

  constructor(props) {
    super(props);
    this.state = { activeRoute: '/' }
    this.select = this.select.bind(this);
  }

  select( href ) {
    let activeRoute = href.substr( href.lastIndexOf('/') );
    this.setState({ activeRoute });
  }

  render() {
    let activeRoute = this.state.activeRoute;
    return <div className={ styles.navbar }
      onClick={ e => this.select(e.target.href) } >
      <NavLink route='/' current={activeRoute} >programs</NavLink>
      <NavLink route='/custom' current={activeRoute}>my schedule</NavLink>
      <NavLink route='/profile' current={activeRoute}>profile</NavLink>
    </div>
  }
  
}


{/* <Link> wrapper handles selection state  */}

const NavLink = (props) => (
  <Link to={props.route} 
    className={ cx('navlink',{'selected': props.current === props.route}) }>
    { props.children }
  </Link>
);
