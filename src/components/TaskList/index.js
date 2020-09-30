import React from 'react';
import {connect} from 'react-redux';

import Task from '../commons/Task';

const TaskList = (props) => {
    const {tasks} = props;

    return (
        <div>
            {tasks.map((task) => (
                <Task key={task.id} {...task} />
            ))}
        </div>
    );
};

const mapStateToProps = (state) => {
    const {task} = state;
    console.log('State: ', state);
    return {
        tasks: task.tasks,
    };
};

export default connect(mapStateToProps, null)(TaskList);
