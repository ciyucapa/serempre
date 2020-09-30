import types from './types';
import initialState from '../../initialState';

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'persist/REHYDRATE': {
            return {
                ...state,
                ...action.payload.task,
                rehydrated: true,
            }
        }
        case types.ADD_TASK: {
            const {payload} = action;
            const {tasks} = state;

            return {
                ...state,
                tasks: [
                    ...tasks,
                    payload,
                ],
            }
        }
        case types.UPDATE_TASK: {
            const {
                title,
                description,
                email,
                id,
            } = action.payload;
            const {tasks} = state;

            const tasks_aux = tasks.map((task) => {
                if (task.id === id) {
                    task.title = title;
                    task.description = description;
                    task.email = email;
                }

                return task;
            });

            return {
                ...state,
                tasks: tasks_aux,
            }
        }
        case types.GET_TASK: {
            return {
                ...state,
            }
        }
        case types.DELETE_TASK: {
            const id = action.payload;
            const {tasks} = state;

            const tasks_aux = [];
            tasks.map((task) => {
                if (task.id !== id) {
                    tasks_aux.push(task);
                }
                return task;
            });

            return {
                ...state,
                tasks: tasks_aux,
            }
        }
        default: {
            return {
                ...state,
            }
        }
    }
};

export default reducer;
