import types from './types';
import initialState from '../../initialState';

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'persist/REHYDRATE': {
            if (action.payload) {
                return {
                    ...state,
                    ...action.payload.task,
                    rehydrated: true,
                }
            } else {
                return {
                    ...state,
                    rehydrated: true,
                }
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
            console.log('Estamos en el reducer');
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

            console.log('Este es el nuevo estado: ', tasks_aux);

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
        case types.FETCH_TASKS_STRAPI: {
            const taskNews = [];
            action.payload.map((task) => {
                let isExist = false;

                taskNews.map((newTask) => {
                    if (newTask.id === task.id) {
                        isExist = true;
                    }
                });

                if (!isExist) {
                    taskNews.push(task);
                }
            });

            return {
                ...state,
                tasks: taskNews,
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
