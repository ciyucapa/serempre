import React from 'react';

import TabBar from '../components/commons/TabBar';

const BaseScene = (props) => {
    const {Child} = props;

    return (
        <div>
            <Child />
            <TabBar />
        </div>
    );
};

export default (Child) => (props) => {
    return (
        <BaseScene {...props} Child={Child} />
    );
};
