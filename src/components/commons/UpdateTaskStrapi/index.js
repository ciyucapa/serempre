import React, {useEffect} from 'react';
import {connect} from 'react-redux';

import {fetchTasksStrapi} from '../../../state/ducks/task/actions';
import useTasks from '../../../hooks/useTasks';

const UpdateTaskStrapi = (props) => {
    const {fetchTasksStrapi} = props;
    const {tasks} = useTasks();

    useEffect(() => {
        if (tasks && tasks.tasks) {
            console.log('Ts: ', tasks.tasks);
            fetchTasksStrapi(tasks.tasks);
        }
    }, [tasks]);

    return (<></>);
};

const mapDispatchToProps = {
    fetchTasksStrapi,
};

export default connect(null, mapDispatchToProps)(UpdateTaskStrapi);
