import React from 'react';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';

import createStore from './createStore';

export default ({element}) => {
    const {store, persistor} = createStore();
    return (
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                {element}
            </PersistGate>
        </Provider>
    );
}
