import {createAction} from 'redux-actions';

import types from './types';

export const addTask = createAction(types.ADD_TASK);
export const deleteTask = createAction(types.DELETE_TASK);
export const updateTask = createAction(types.UPDATE_TASK);
export const getTask = createAction(types.GET_TASK);
export const fetchTasksStrapi = createAction(types.FETCH_TASKS_STRAPI);

export default {
  addTask,
  deleteTask,
  getTask,
  fetchTasksStrapi,
  updateTask,
};
