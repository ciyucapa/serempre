import React from 'react';

import BaseScene from '../BaseScene';
import TaskCreate from '../../components/TaskCreate';
import TaskList from '../../components/TaskList';

const Dashboard = () => {
    return (
        <div style={{paddingBottom: 100}}>
            <TaskCreate />
            <TaskList />
        </div>
    );
};

export default BaseScene(Dashboard);
