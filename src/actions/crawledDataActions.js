import * as types from './actionTypes';
import crawledDataApi from '../api/mockCrawledDataApi';
import {beginAjaxCall} from "./ajaxStatusActions";

export function saveAndLoadCrawledDataSuccess(crawledData) {
  return {type: types.SAVE_AND_LOAD_CRAWLED_DATA_SUCCESS, crawledData};
}

export function saveAndLoadCrawledData() {
  return dispatch => {
    dispatch(beginAjaxCall());
    return crawledDataApi.getAllCrawledData().then (
      res => {
        setTimeout(() =>{
          dispatch(saveAndLoadCrawledDataSuccess(res.data));
        }, 3000);
      }
    ).catch(
      error => {
        throw(error);
      }
    );
  };
}
