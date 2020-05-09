import ContactUsReducer from './ContactUsReducer';
import ContactUsReducercopy from './ContactUsReducercopy';
import {combineReducers} from 'redux';

export default combineReducers({
      ContactUs:ContactUsReducer,
      ContactUscopy:ContactUsReducercopy,
   
})