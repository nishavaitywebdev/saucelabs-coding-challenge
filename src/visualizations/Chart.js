import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Highcharts from 'highcharts';

class Chart extends Component {

    componentDidMount(){
        this.showChart();
    }
    showChart = () => {
        const { title, subtitle, yAxis, seriesData, categories } = this.props.visualization;
        const visualizationId = this.props.visualizationId;
        const visualizationType = this.props.visualizationType;
        Highcharts.chart( visualizationId, {
            chart: {
                type: visualizationType
            },
            title: {
                text: title
            },
            subtitle: {
                text: subtitle
            },
            xAxis: {
                categories: categories
            },
            yAxis: {
                title: {
                    text: yAxis
                }
            },
            legend: {
                layout: 'vertical',
                align: 'right',
                verticalAlign: 'middle'
            },
            series: seriesData,
            responsive: {
                rules: [{
                    condition: {
                        maxWidth: 500
                    },
                    chartOptions: {
                        legend: {
                            layout: 'horizontal',
                            align: 'center',
                            verticalAlign: 'bottom'
                        }
                    }
                }]
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
    visualization: PropTypes.object,
    visualizationId: PropTypes.string,
    visualizationType: PropTypes.string,
};

Chart.defaultProps = {
    visualization: { title: 'Graph', subtitle: 'subtitle', yAxis: 'Number of Employees',
        seriesData: [],
        categories: [],
    },
    visualizationId: 'chart',
    visualizationType: 'line',
};
export default Chart;