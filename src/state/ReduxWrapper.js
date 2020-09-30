import React from 'react';
import {Provider} from 'react-redux';

import createStore from './createStore';

export default ({element}) => (
    <Provider store={createStore()}>{element}</Provider>
);
