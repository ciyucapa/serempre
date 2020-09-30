import React from 'react';

import UpdateTaskStrapi from '../components/commons/UpdateTaskStrapi';
import TabBar from '../components/commons/TabBar';

const BaseScene = (props) => {
    const {Child} = props;

    return (
        <div>
            <Child />
            <TabBar />
            <UpdateTaskStrapi />
        </div>
    );
};

export default (Child) => (props) => {
    return (
        <BaseScene {...props} Child={Child} />
    );
};
