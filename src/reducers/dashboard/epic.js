import { combineEpics, ofType } from 'redux-observable';
import { Observable } from 'rxjs/Rx'
import 'rxjs/add/operator/catch';

import { 
  get as getData
} from '../../service/dashboard/dashboard-service';

import { type, actions } from './action';

const getDataEpic = action$ => 
  action$.ofType(type.GET_DATA_REQUEST)
         .switchMap(action =>  Observable.of(getData()))
         .map(response => actions.getDataRequestSuccess({
                            data: response
                          })
          )
         .takeUntil(action$.ofType(type.GET_DATA_REQUEST_CANCEL))
         .catch((error) => actions.getDataRequestFailure(error));

export default combineEpics(
  getDataEpic
);