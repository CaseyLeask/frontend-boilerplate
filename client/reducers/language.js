
import { handleActions } from 'redux-actions'

const initialState = 'en';

export default handleActions({
  'change language' (state, action) {
    switch(action.payload) {
      case 'zh':
      case 'en':
        return action.payload;
      default:
        return state;
    }
  }
}, initialState)
