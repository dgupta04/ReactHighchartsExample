import React from 'react';
import Graph from './Graph'

class Card extends React.Component{
    constructor(props){
        super(props)
        this.cardRef = React.createRef();
        this.state = {height: 0, width: 0}
    }
    componentDidMount(){
        // console.log(this.cardRef.current.childNodes[0].clientWidth);
        let comp = this.cardRef.current.childNodes[0];
        this.setState({height: (comp.clientHeight/2+10), width: comp.clientWidth});
    }
    render(){
        // console.log(this.cardRef.current.childNodes[0].clientWidth);
        return(
            <div className="col-lg-4">
            <div className="card" ref={this.cardRef}>
                <Graph height = {this.state.height} width = {this.state.width} />
                <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
                <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                </div>
            </div>
            </div>
        )
    }
}

export default Card