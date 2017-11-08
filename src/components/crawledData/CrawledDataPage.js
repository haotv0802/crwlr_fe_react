import React, {PropTypes} from 'react';

class CrawledDataPage extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.recrawlData = this.recrawlData.bind(this);
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
      </div>
    );
  }

  recrawlData() {
    console.log("Recrawling Data");
  }
}

CrawledDataPage.propTypes = {
  pageTitle: PropTypes.string.isRequired
};

CrawledDataPage.defaultProps = {
  pageTitle: "Crawled Data"
};

export default CrawledDataPage;
