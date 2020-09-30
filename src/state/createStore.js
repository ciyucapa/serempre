import thunk from 'redux-thunk';
import storage from './storage';
import {createStore, combineReducers, applyMiddleware, compose} from 'redux';
import {persistReducer, persistStore} from 'redux-persist';

import * as reducers from './ducks';

export default () => {

    const middlewares = [
        thunk,
    ];

    const rootReducer = combineReducers({
        ...reducers,
    });

    const rootPersistConfig = {
        key: 'root',
        storage,
        blacklist: ['navigation'],
    };

    const persistedReducer = persistReducer(
        rootPersistConfig,
        rootReducer,
    );

    const store = createStore(
        persistedReducer,
        compose(applyMiddleware(...middlewares)),
    );

    const persistor = persistStore(store);

    return {
        store,
        persistor,
    };
};
