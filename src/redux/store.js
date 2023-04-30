import { createstore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from "redux-thunk"

const composeEnhancers = composeWithDevTools({
});
const store = createStore(
  reducer,
  composeEnhancers(
    applyMiddleware([thunk])
  )
);