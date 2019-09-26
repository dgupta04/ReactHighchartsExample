import React from 'react';
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official';

class Wrapper extends React.Component{
    state = {}
    options = {
        
        series: this.props.chartData
    }
    render(){
        return(
          <div>Hello</div>  
        )
    }
}

export default Wrapper;