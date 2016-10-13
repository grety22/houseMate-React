import {browserHistory} from 'react-router'
import * as types from '../actions/action_types'

export default function eventsReducer(state=[], action){
  switch (action.type){
    case 'FETCH_EVENTS':
      return action.payload;
    case 'ADD_EVENT':
      return [...state, action.payload];
    default:
      return state;
    }
}
