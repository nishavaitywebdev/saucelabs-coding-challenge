import React, { Component } from 'react';
import './App.css';
import Chart from './visualizations/Chart.js';

class App extends Component {
    render() {
        const seriesData = [{
                         name: 'Installation',
                         data: [43934, 52503, 57177, 69658, 97031, 119931, 137133, 154175]
                     }, {
                         name: 'Manufacturing',
                         data: [24916, 24064, 29742, 29851, 32490, 30282, 38121, 40434]
                     }, {
                         name: 'Sales & Distribution',
                         data: [11744, 17722, 16005, 19771, 20185, 24377, 32147, 39387]
                     }, {
                         name: 'Project Development',
                         data: [null, null, 7988, 12169, 15112, 22452, 34400, 34227]
                     }, {
                         name: 'Other',
                         data: [12908, 5948, 8105, 11248, 8989, 11816, 18274, 18111]
                     }];
        const categories = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug'];
        const visualization = { title: 'Graph', subtitle: 'subtitle',
        yAxis: 'Number of Employees', seriesData: seriesData, categories: categories };
        return (
            <div className='App'>
                <header className='App-header'>
                    <h1 className='App-title'>SauceLabs technical test</h1>
                </header>
                <div className='container'>
                    <div className='col-sm-12 App-intro'>
                        <div className='col-sm-6'>
                            <Chart visualizationType='bar' visualization={visualization} visualizationId='barchart'/>
                        </div>
                        <div className='col-sm-6'>
                            <Chart visualizationType='spline' visualization={visualization} visualizationId='splinechart'/>
                        </div>
                    </div>
                    <div className='col-sm-12 App-intro'>
                        <div className='col-sm-6'>
                            <Chart visualizationType='column' visualization={visualization} visualizationId='columnchart'/>
                        </div>
                        <div className='col-sm-6'>
                            <Chart visualizationType='area' visualization={visualization} visualizationId='areachart'/>
                        </div>
                    </div>
                </div>
                <footer className='App-footer navbar-fixed-bottom'>
                </footer>
            </div>
        );
    }
}

export default App;
