import React from 'react';

class FlavorPopularityInstructions extends React.Component{
  render(){
    return (
      <p>
        We find the most popular ice cream flavors!!!
      </p>
    )
  }
}

class FlavorItem extends React.Component{
  render(){
    return <li>{this.props.flavor.name}</li>;
  }
}

class Flavors extends React.Component{
  render(){
    var flavorList = this.props.items.map(function(flavor){
      return <FlavorItem key={flavor.name} flavor={flavor}/>;
    });

    return (
      <ul>
        {flavorList}
      </ul>
    );
  }
}


export {Flavors as default, FlavorPopularityInstructions};
