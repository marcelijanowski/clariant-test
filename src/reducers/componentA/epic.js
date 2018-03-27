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
         .map(response => {
            const { 
              componenta_flow_kgh,  
              componentb_flow_kgh, 
              coolant_temperature_c, 
              reactor_outlet_temperature_c, 
              reactor_hotspot_temperature_c, 
              yield_percent, 
              product_flow_tonsperday
            } =  response;
            return actions.getDataRequestSuccess({
              data: componenta_flow_kgh
            })
         })
         .takeUntil(action$.ofType(type.GET_DATA_REQUEST_CANCEL))
         .catch((error) => actions.getDataRequestFailure(error));

export default combineEpics(
  getDataEpic
);