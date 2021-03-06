import React, { Component } from 'react';
import fetch from 'isomorphic-fetch';
import Chart from './visualizations/Chart.js';

const style = {
    app: {
        textAlign: 'center',
        paddingBottom: '50px'
    },
    appHeader: {
        backgroundColor: '#222',
        height: '60px',
        paddingBottom: '5px',
        color: 'white'
    },
    appFooter: {
        backgroundColor: '#222',
        height: '30px',
        padding: '20px',
        color: 'white'
    },
};

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    componentWillMount(){
        const opts = {
            headers: {
                'Content-Type': 'application/json',
            },
            method: 'GET',
            credentials: 'same-origin',
        };
        fetch('getPlotPoints', opts)
        .then(response => response.json())
        .then((jsonResponse) => {
            this.setState({plotPoints: jsonResponse.plotPoints});
        });
    }
    getDataInRange = () => {
        var st = this.refs.strt.value;
        var end = this.refs.end.value;
        const opts = {
            headers: {
                'Content-Type': 'application/json',
            },
            method: 'GET',
            credentials: 'same-origin',
        };
        fetch('getPlotPointsInRange/'+st+'/'+end, opts)
        .then(response => response.json())
        .then((jsonResponse) => {
            this.setState({plotPoints: jsonResponse.plotPoints});
        });
    };
    render() {
        const plotPoints = this.state.plotPoints;
        if(plotPoints){
            return (
                <div style={style.app}>
                    <header style={style.appHeader}>
                        <h1 className='App-title'>Sauce Labs Coding Challenge</h1>
                    </header>
                    <div className='container'>
                        <div className='col-sm-12'>
                            <Chart data={plotPoints} visualizationId='scatterplot'/>
                        </div>
                        <div>
                              Start date: <input type='text' ref='strt' placeholder='start date in yyyy-mm-dd'/><br/><br/>
                              End date: <input type='text' ref='end' placeholder='end date in yyyy-mm-dd' /><br/><br/>
                              <input type='button' value='Submit' onClick={() => this.getDataInRange()} />
                        </div>
                    </div>
                    <footer className='navbar-fixed-bottom' style={style.appFooter}>
                    </footer>
                </div>
            );
        } else {
            return (<noscript />);
        }
    }
}

export default App;
