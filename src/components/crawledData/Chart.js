import React, {Component, PropTypes} from 'react';
import {Bar, Line, Pie} from 'react-chartjs-2';

class Chart extends Component {
  constructor(props) {
    super(props);
  }

  render() {

    return(
      <div className="chart">
        <Bar
          data={this.props.chartData}
          width={100}
          height={50}
          options={{
            title: {
              display: this.props.displayTitle,
              text: this.props.displayText,
              fontSize: 25
            },
            legend: {
              display: this.props.displayLegend,
              position: this.props.legendPosition
            }
          }}
        />
      </div>
    );
  }
}


Chart.propTypes = {
  displayTitle: PropTypes.bool.isRequired,
  displayText: PropTypes.string.isRequired,
  displayLegend: PropTypes.bool.isRequired,
  legendPosition: PropTypes.string.isRequired,
  chartData: PropTypes.object.isRequired
};

Chart.defaultProps = {
  displayTitle: true,
  displayText: 'Title HAHAHA',
  displayLegend: true,
  legendPosition: 'right',
  chartData: {
    labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
    datasets: [{
      label: '# of Votes',
      data: [12, 19, 3, -5, 2, 3],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)'
      ],
      borderColor: [
        'rgba(255,99,132,1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)'
      ],
      borderWidth: 1
    }]
  }
};

export default Chart;
