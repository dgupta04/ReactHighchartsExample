import React from 'react';
import ReactDOM from 'react-dom';
import createPlotlyComponent from 'react-plotly.js/factory';
import faker from 'faker';
import Highcharts, { animate } from 'highcharts'
import HighchartsReact from 'highcharts-react-official'
import dark from './darktheme'
const Plotly = window.Plotly;
const Plot = createPlotlyComponent(Plotly)
Highcharts.setOptions(dark);

class Graph extends React.Component{
    constructor(props){
        super(props);
        this.state = { x: [1,2,3], y: [1,4,9], range: [0,10]}
    }
    changeState = () => {
        let newX = [...this.state.x];
        let newY = [...this.state.y];
        let addY = faker.random.number()/10000;
        let range = this.state.range
        if(this.state.x[this.state.x.length-1] % 10 === 0){
            let start = Math.floor(this.state.x[this.state.x.length-1]/10)*10 -1;
            range = [start+1, start+11]
        }
        else{
            range = this.state.range;
        }
        newX.push(this.state.x[this.state.x.length-1] + 1);
        newY.push(addY);
        this.setState({x: newX, y: newY, range: range})
    }
    componentDidMount(){
        // console.log(darkUnice.prototype)
        this.interval = setInterval(()=>{
            this.changeState();
        }, 1000);
    }
    componentWillUnmount(){
        clearInterval(this.interval);
    }
    render(){
        return (
            <div>
            {/* <Plot
            data={
                [
                    {
                        x: this.state.x,
                        y: this.state.y,
                        type: 'bar'                
                    }
                ]
            } 
            layout= {
            {
                width: this.props.width, 
                height: this.props.width, 
                title:"Test plot",
                xaxis:{
                        autorange: false,
                        zeroline : false,
                        showgrid: false,
                        range: this.state.range
                        // constrain: 'domain'
                },
                yaxis: {
                    showgrid: true,
                    showticklabels: false,
                    zeroline: false,
                    // scaleanchor: 'x'
                },
                dragmode: 'select',
                selectdirection: 'h'
            }} /> */}
            <HighchartsReact highcharts={Highcharts} options = {
                    {
                    chart:{
                        type: 'column',
                        height: this.props.height,
                        width: this.props.width,
                    },
                    xAxis:{
                        min: this.state.range[0],
                        max: this.state.range[1],
                        tickInterval: 5
                    },
                    yAxis:{
                        max: 20
                    },
                    title: {
                      text: 'My stock chart'
                    },
                    series: [{
                        title: 'My Series',
                      data: this.state.y,
                      animation: false
                    }],
                    credits: false
                  }
            } forceFit />
            </div>
        )
}}

export default Graph;