import { applyMiddleware, compose, createStore } from 'redux';
import thunk from 'redux-thunk';
import { generationReducer } from './reducers/index';

export default function configureStore() {
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  const store = createStore(
    generationReducer,
    composeEnhancers(applyMiddleware(thunk))
  );

  if (process.env.NODE_ENV !== 'production' && module.hot) {
    module.hot.accept('./reducers', () => store.replaceReducer(rootReducer));
  }

  return store;
}
