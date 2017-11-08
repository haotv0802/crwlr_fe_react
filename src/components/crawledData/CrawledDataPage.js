import React, {PropTypes} from 'react';

class CrawledDataPage extends React.Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    return (
      <div className='panel panel-info' style={{width: "auto", height: "auto"}}>
        <div className='panel-heading' style={{fontSize: ""}}>
          {this.props.pageTitle}
          <button className='btn btn-primary' style={{float: "right"}}>
            Recrawl
          </button>
        </div>
      </div>
    );
  }

}

CrawledDataPage.propTypes = {
  pageTitle: PropTypes.string.isRequired
};

CrawledDataPage.defaultProps = {
  pageTitle: "Crawled Data"
};

export default CrawledDataPage;
