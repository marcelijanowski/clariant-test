import { actions, type } from './actions';

describe('Dashboard actions', () => {
  it('should have GET_DATA_REQUEST', () => {
    expect(actions.getDataRequest()).toEqual({
      type: type.GET_DATA_REQUEST
    })
  });
  it('should have GET_DATA_REQUEST_CANCEL', () => {
    expect(actions.getDataRequestCancel()).toEqual({
      type: type.GET_DATA_REQUEST_CANCEL
    });
  });
  it('should have GET_DATA_SUCCESS', () => {
    expect(actions.getBrandsRequestSuccess({data: 'data'})).toEqual({
      type: type.GET_DATA_SUCCESS,
      payload: {
        data: 'data'
      }
    });
  });
  it('should have GET_DATA_FAILURE', () => {
    expect(actions.getDataRequestFailure({error: 'error'})).toEqual({
      type: state.GET_DATA_FAILURE,
      payload: {
        error: 'error'
      }
    })
  });
})