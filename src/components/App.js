import React, { Component } from 'react';
import '../App.css';

import Flavors, {FlavorPopularityInstructions} from './Flavor';

var flavorListData = [
  {'name': 'Chocolate', upVotes: 10, totalVotes: 25},
  {'name': 'Vinilla', upVotes: 5, totalVotes: 20},
  {'name': 'Peanut Butter', upVotes: 50, totalVotes: 85},
  {'name': 'Strawberry', upVotes: 30, totalVotes: 55}
];

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="jumbotron">
          <h1>Popular Icecream</h1>
          <FlavorPopularityInstructions />
        </div>

        <Flavors items={flavorListData} />
      </div>
    );
  }
}

export default App;
