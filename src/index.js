import React,  { Component } from 'react';
import ReactDOM from 'react-dom';
import GraphList from './GraphList'
import SearchBar from './SearchBar'
import Card from './Card';
// import DataSet from '@antv/data-set';

class App extends Component {
state = {graphs: []}
displayGraphs = (e) => {
  e.preventDefault(); 
  let graphList = []
  let numG = Math.floor((Math.random()*10 + 1))
  for(let i=0; i< numG; i++){
    graphList.push(<Card />)
  }
  this.setState({graphs: graphList})
}
render() {
    return (
      <div className="container">
      <SearchBar onFormSubmit={this.displayGraphs}/>
      <GraphList graphs={this.state.graphs}/>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));