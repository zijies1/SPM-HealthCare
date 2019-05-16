import { createStore, applyMiddleware, compose } from "redux";
import reducers from './reducers';
import { promiseMiddleware, localStorageMiddleware} from './middleware';

const logger = (store) => (next) => (action) =>{
  console.log("action fired",action);
  next(action);
  // console.log("store changed",store.getState());
}

const store = createStore(
  reducers,
  applyMiddleware(promiseMiddleware,localStorageMiddleware)
);
export default store ;
