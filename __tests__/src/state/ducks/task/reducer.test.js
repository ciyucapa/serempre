import reducer from '../../../../../src/state/ducks/task';
import initialState from '../../../../../src/state/initialState';
import types from '../../../../../src/state/ducks/task/types';

describe('Test for reducer for Task', () => {
    it('case ADD_TASK', () => {
        const action = {
            type: types.ADD_TASK,
            payload: {
                title: 'test_title',
                description: 'test_description',
                email: 'test@test.com',
                position: {
                    lat: 5.5,
                    lng: 5.5,
                },
            },
        };

        const result = reducer(initialState, action);
        const {tasks} = result;

        expect(tasks.length).toBe(1);
        expect(tasks[0].title).toBe('test_title');
    });

    it('case DELETE_TASK', () => {
        const state = {
            tasks: [{
                id: '1',
                title: 'test_title',
                description: 'test_description',
                email: 'test@test.com',
                position: {
                    lat: 5.5,
                    lng: 5.5,
                },
            }],
        };

        const action = {
            type: types.DELETE_TASK,
            payload: '1',
        };

        const result = reducer(state, action);
        const {tasks} = result;

        expect(tasks.length).toBe(0);
    });

    it('case GET_TASK', () => {
        const state = {
            tasks: [{
                id: '1',
                title: 'test_title',
                description: 'test_description',
                email: 'test@test.com',
                position: {
                    lat: 5.5,
                    lng: 5.5,
                },
            }],
        };

        const action = {
            type: types.GET_TASK,
            payload: '1',
        };

        const result = reducer(state, action);
        const {tasks} = result;

        expect(tasks.length).toBe(1);
        expect(tasks[0].title).toBe('test_title');
    });

    it('case FETCH_TASKS_STRAPI', () => {
        const state = {
            tasks: [{
                id: '1',
                title: 'test_title',
                description: 'test_description',
                email: 'test@test.com',
                position: {
                    lat: 5.5,
                    lng: 5.5,
                },
            }],
        };

        const action = {
            type: types.FETCH_TASKS_STRAPI,
            payload: [{
                id: '3',
                title: 'test_title',
                description: 'test_description',
                email: 'test@test.com',
                position: {
                    lat: 5.5,
                    lng: 5.5,
                },
            }, {
                id: '4',
                title: 'test_title',
                description: 'test_description',
                email: 'test@test.com',
                position: {
                    lat: 5.5,
                    lng: 5.5,
                },
            }],
        };

        const result = reducer(state, action);
        const {tasks} = result;

        expect(tasks.length).toBe(2);
        expect(tasks[0].id).toBe('3');
        expect(tasks[1].id).toBe('4');
    });
});
