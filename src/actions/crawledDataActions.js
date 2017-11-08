import * as types from './actionTypes';
import crawledDataApi from '../api/mockCrawledDataApi';

export function saveAndLoadCrawledDataSuccess(crawledData) {
  // console.log("dispatching....");
  // console.log(crawledData);
  return {type: types.SAVE_AND_LOAD_CRAWLED_DATA, crawledData};
}

export function saveAndLoadCrawledData() {
  // console.log("saveAndLoadCrawledData");
  return dispatch => {
    return crawledDataApi.getAllCrawledData().then (
      crawledData => {
        // console.log(crawledData);
        dispatch(saveAndLoadCrawledDataSuccess(crawledData));
      }
    ).catch(
      error => {
        throw(error);
      }
    );
  };
}
