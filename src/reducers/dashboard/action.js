const GET_DATA_REQUEST = '@@data/GET_DATA_REQUEST';
const getDataRequest = () => ({
  type: GET_DATA_REQUEST
});

const GET_DATA_REQUEST_CANCEL = '@@data/GET_DATA_REQUEST_CANCEL';
const getDataRequestCancel = () => ({
  type: GET_DATA_REQUEST_CANCEL
});

const GET_DATA_SUCCESS = '@@data/GET_DATA_SUCCESS';
const getDataRequestSuccess = (payload) => ({
  type: GET_DATA_SUCCESS,
  payload
});

const GET_DATA_FAILURE = '@@data/GET_DATA_FAILURE';
const getDataRequestFailure = (payload) => ({
  type: GET_DATA_FAILURE,
  payload
});

export const actions = {
  getDataRequest,
  getDataRequestCancel,
  getDataRequestSuccess,
  getDataRequestFailure
}

export const type = {
  GET_DATA_REQUEST,
  GET_DATA_REQUEST_CANCEL,
  GET_DATA_SUCCESS,
  GET_DATA_FAILURE
};