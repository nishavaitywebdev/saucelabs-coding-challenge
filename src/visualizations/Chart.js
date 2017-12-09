import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Highcharts from 'highcharts';

class Chart extends Component {

    componentDidMount(){
        this.showChart();
    }
    getSeriesData = (data) => {
        var seriesData = [];
        var passData = {}, errorData = {}, failData = {};
        passData['name'] = 'pass';
        errorData['name'] = 'error';
        failData['name'] = 'fail';
        passData['color'] = '#00ff00';
        errorData['color'] = '#FFA500';
        failData['color'] = '#ff0000';
        passData['data'] = [];
        errorData['data'] = [];
        failData['data'] = [];
        passData['marker'] = {symbol: 'circle'};
        errorData['marker'] = {symbol: 'circle'};
        failData['marker'] = {symbol: 'circle'};
        data.forEach((d) => {
            var point = [];
            var date = new Date(d.start_time);
            var unixtime = date.getTime();
            point.push(unixtime);
            d.duration = d.duration < 0 ? 0: d.duration;
            d.duration = d.duration > 300 ? 300: d.duration;
            point.push(d.duration/60);
            if(d.status === 'pass'){
                passData.data.push(point);
            }else if(d.status === 'fail'){
                failData.data.push(point);
            }else{
                errorData.data.push(point);
            }
        });
        seriesData.push(passData);seriesData.push(failData);seriesData.push(errorData);
        return seriesData;
    }
    showChart = () => {
        const data = this.props.data;
        const visualizationId = this.props.visualizationId;
        Highcharts.chart( visualizationId, {
            chart: {
                type: 'scatter',
                zoomType: 'xy'
            },title: {
                text: 'Scatter Plot'
            },
            subtitle: {
                text: ''
            },
            xAxis: {
                title: {
                    text: 'Timeline'
                },
                labels: {
                    formatter: function () {
                        var date = new Date(this.value);
                        var formatter = new Intl.DateTimeFormat("en-us", { month: "short" }),
                        month = formatter.format(date);
                        var day = date.getDate();
                        return month+' '+day;
                    }
                }
            },
            yAxis: {
                title: {
                    text: 'Duration in Minutes'
                }
            },
            legend: {
                layout: 'horizontal',
                align: 'right',
                floating: true,
                verticalAlign: 'top',
                backgroundColor: (Highcharts.theme && Highcharts.theme.legendBackgroundColor) || '#FFFFFF',
            },
            series: this.getSeriesData(data),
            plotOptions: {
                series: {
                    allowPointSelect: true,
                    marker: {
                        states: {
                            select: {
                                fillColor: null,
                                lineColor: 'white',
                                radius: 12,
                                lineWidth: 4
                            }
                        }
                    }
                },
            },
            responsive: {
                rules: [{
                    condition: {
                        maxWidth: 600
                    }
                }]
            },
            tooltip: {
                formatter: function() {
                    return false;
                }
            }
        });
    }
    render() {
        return (
            <div className='' id={this.props.visualizationId}>
            </div>
        );
    }
}
Chart.propTypes = {
    data: PropTypes.array,
    visualizationId: PropTypes.string,
};

Chart.defaultProps = {
    data: [],
    visualizationId: 'chart',
};
export default Chart;