import React, {PropTypes} from 'react';
import TextInput from "../common/TextInput";
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as crawledDataActions from '../../actions/crawledDataActions';
import {Bar, Line, Pie} from 'react-chartjs-2';

class CrawledDataPage extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      recrawlOpen: false
    };
    this.recrawlData = this.recrawlData.bind(this);
    this.onChange = this.onChange.bind(this);
    this.onSave = this.onSave.bind(this);
  }

  render() {
    const {crawledData, courses} = this.props;
    console.log("crawled data:");
    console.log(crawledData);
    console.log("courses: ");
    console.log(courses);
    var chartData = {
      labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
      datasets: [{
        label: '# of Votes',
        data: [12, 19, 3, 5, 2, 3],
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
    };
    return (
      <div className="panel panel-info" style={{width: "auto", height: "auto"}}>
        <div className="panel-heading" style={{fontSize: ""}}>
          {this.props.pageTitle}
          <button className="btn btn-primary" style={{float: "right"}} onClick={this.recrawlData}>
            Recrawl
          </button>
        </div>
        {this.state.recrawlOpen ===  true ?
          <form>
            <h1>Add Info</h1>
            <TextInput
              name="url"
              label="URL"
              onChange={this.onChange}
              error={this.state.errors}
              width="200px"
            />
            <input
              type="button"
              value="Save"
              className="btn btn-primary"
              onClick={this.onSave}
            />
          </form>
          : ''
        }
        <table className="table">
          <thead>
          <tr>
            <th>Title</th>
          </tr>
          </thead>
          <tbody>
          {crawledData.map((data, index) =>
            <tr key={index}>
              <td><a href="#" target="_bank">{data.name}</a></td>
            </tr>
          )}
          </tbody>
        </table>
        <Bar
          data={chartData}
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

  onSave() {
    this.props.actions.saveAndLoadCrawledData();
  }

  onChange() {
    console.log("on change");
  }

  recrawlData() {
    // this.state.recrawlOpen = !this.state.recrawlOpen;
    this.setState( prevState => ({
      recrawlOpen: !prevState.recrawlOpen
    }));
    console.log(this.state.recrawlOpen);
  }
}

CrawledDataPage.propTypes = {
  pageTitle: PropTypes.string.isRequired,
  actions: PropTypes.object.isRequired,
  crawledData: PropTypes.array.isRequired,
  courses: PropTypes.array.isRequired

};

CrawledDataPage.defaultProps = {
  pageTitle: "Crawled Data",
  displayTitle: true,
  displayText: 'Title HAHAHA',
  displayLegend: true,
  legendPosition: 'right'
};

function mapStateToProps(state, ownProps) {
  return {
    crawledData: state.crawledData,
    courses: state.courses
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(crawledDataActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CrawledDataPage);
