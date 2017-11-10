import React, {PropTypes} from 'react';
import TextInput from "../common/TextInput";
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as crawledDataActions from '../../actions/crawledDataActions';
import Chart from './Chart';

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
        <Chart/>
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
  pageTitle: "Crawled Data"
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
