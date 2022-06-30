import { combineReducers } from 'redux';

import { authentication } from './authentication.reducer';
import { registration } from './registration.reducer';
import { users } from './users.reducer';
import { alert } from './alert.reducer';
import documents from './document.reducer';

const rootReducer = combineReducers({
  authentication,
  registration,
  users,
  alert,
  documents
});

export default rootReducer;