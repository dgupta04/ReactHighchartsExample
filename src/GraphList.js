import React from 'react';
import './card.css'
import Graph from './Graph'
import Card from './Card'


class GraphList extends React.Component{
    render(){
        // console.log(this.clientHeight);
        return(
        // <div className = "container" style={{marginTop: '5vh'}}>
            <div className="row" style={{marginTop: '5vh'}}>
            {this.props.graphs}
        </div>
        // </div>
        )
    }
}

export default GraphList