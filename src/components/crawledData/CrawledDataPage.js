import React, {PropTypes} from 'react';
import TextInput from "../common/TextInput";

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
    return (
      <div className='panel panel-info' style={{width: "auto", height: "auto"}}>
        <div className='panel-heading' style={{fontSize: ""}}>
          {this.props.pageTitle}
          <button className='btn btn-primary' style={{float: "right"}} onClick={this.recrawlData}>
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
              width='200px'
            />
            <input
              type="button"
              value='Save'
              className="btn btn-primary"
              onClick={this.onSave}
            />
          </form>
          : ''
        }
      </div>
    );
  }

  onSave() {
    console.log("On Save");
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
  pageTitle: PropTypes.string.isRequired
};

CrawledDataPage.defaultProps = {
  pageTitle: "Crawled Data"
};

export default CrawledDataPage;
