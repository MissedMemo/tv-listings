import React, {Component} from 'react';
import axios from 'axios'
import FilterBar from './filterbar';
import styles from './listings.css';

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
        const listings = res.data.map( d =>({
          title: d.show.name,
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
          { this.state.listings.map( show => <li>
            <div className={ styles.program }>
              <div className={ styles.title }>{ show.title }</div>
              <div className={ styles.desc }>{ show.description }</div>
            </div>
          </li>)}
        </ul>
      </div>
    </div>;
  }
  
};