
import { routerReducer as routing } from 'react-router-redux'
import { combineReducers } from 'redux'
import todos from './todos'
import language from './language'

export default combineReducers({
  routing,
  todos,
  language
})
