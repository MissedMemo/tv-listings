import React, {Component} from 'react';
import axios from 'axios'
import FilterBar from './filterbar';
import styles from './listings.css';

import Program from './program';


export default class Listings extends Component {

  constructor(props) {
    super(props);
    this.state = {
      listings: []
    }
  }

  componentWillMount() {
    axios.get(`http://api.tvmaze.com/schedule?country=US&date=2016-10-07&page=1`)
      .then( res => {
        /*
        console.log( 'record:', res.data[0], '(of #):', res.data.length );
        */
        const listings = res.data.map( d =>({
          id: d.id,
          title: d.show.name,
          image: d.show.image ? d.show.image.medium || null : null,
          description: d.show.summary
        }) );
        this.setState({ listings });
      });
  }

  render() {
    return <div className={ styles.listings }>
      <FilterBar />
      <div>
        <ul>
          { this.state.listings.map( show => <li key={show.id}>
            <Program data={ show } />
          </li>)}
        </ul>
      </div>
    </div>;
  }
  
};