import { combineReducerse } from 'redux';
import AuthReducer from './AuthReducer';

export default combineReducerse({
  auth: AuthReducer
})