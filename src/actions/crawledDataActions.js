import * as types from './actionTypes';
import crawledDataApi from '../api/mockCrawledDataApi';

export function saveAndLoadCrawledDataSuccess(crawledData) {
  return {type: types.SAVE_AND_LOAD_CRAWLED_DATA, crawledData};
}

export function saveAndLoadCrawledData() {
  return dispatch => {
    return crawledDataApi.getAllCrawledData().then (
      crawledData => {
        dispatch(saveAndLoadCrawledDataSuccess(crawledData));
      }
    ).catch(
      error => {
        throw(error);
      }
    );
  };
}
