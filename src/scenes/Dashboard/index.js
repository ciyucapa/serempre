import React from 'react';

import TaskCreate from '../../components/TaskCreate';
import TaskList from '../../components/TaskList';

const Dashboard = () => {
    return (
        <div>
            <TaskCreate />
            <TaskList />
        </div>
    );
};

export default Dashboard;
