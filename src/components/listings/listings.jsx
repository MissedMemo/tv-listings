import React, {Component} from 'react';
import FilterBar from './filterbar';
import styles from './listings.css';

import Program from './program';
import { getListings } from './datasource'; /* TODO: pass via props! */

const filter = {
  datetime: new Date(),
  genre: null
}

export default class Listings extends Component {

  constructor(props) {
    super(props);

    this.state = {
      filter: filter,
      listings: []
    }

    this.onFilterChange = this.onFilterChange.bind(this);
    this.updateListings = this.updateListings.bind(this);
  }


  updateListings( filter ) {
    getListings( filter )
      .then( listings => {
        this.setState({ listings });
      });
  }


  componentWillMount() {
    this.updateListings( this.state.filter );
  }


  onFilterChange( filter ) {
    this.setState({ filter }, () => {
      this.updateListings( filter );
    });
  }


  render() {

    const listings = this.state.listings;

    return <div className={ styles.listings }>
      <FilterBar
        /* update (and call back with) filter CLONE! */
        filter={ Object.assign( {}, this.state.filter ) }
        callback={ this.onFilterChange }
      />
      <div>
        <ul>
          { listings ? listings.map( show => <li key={show.id}>
            <Program data={ show } />
          </li>) : null }
        </ul>
      </div>
    </div>;
  }
  
};