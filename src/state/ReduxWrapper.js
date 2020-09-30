import React from 'react';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';

import createStore from './createStore';

const {store, persistor} = createStore();
export default ({element}) => (
    <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
            {element}
        </PersistGate>
    </Provider>
);
