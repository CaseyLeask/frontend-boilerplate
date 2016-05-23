
import { handleActions } from 'redux-actions'

const initialState = 'English';

export default handleActions({
  'change language' (state, action) {
    switch(action.payload) {
      case '中文':
      case 'English':
        return action.payload;
      default:
        return state;
    }
  }
}, initialState)
