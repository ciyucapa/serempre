import {graphql, useStaticQuery} from 'gatsby';
import {useMutation, gql, useQuery} from '@apollo/client';

const CREATE_TASK = gql`
mutation (
  $input: createTaskInput!
) {
  createTask(input: $input) {
    task {
        id
        email
        title
        description
        position
    }
  }
}
`;

const UPDATE_TASK = gql`
mutation (
   $input: updateTaskInput!
) {
  updateTask(input: $input) {
    task {
        id
        email
        title
        description
        position
    }
  }
}
`;

export const DELETE_TASK = gql`
mutation ($id: ID!) {
  deleteTask(input: { where: { id: $id } }) {
    task {
        id
        title
        description
        position
        email
    }
  }
}
`
const ALL_TASKS = gql`
        query {
            tasks {
                id
                title
                description
                email
                position
            }
        }
    `;

const NEW_TASK = gql`
                fragment NewTask on Task {
                  id
                  title
                  description
                  email
                  position
                }
              `;

const useTasks = () => {
    const [createTask] = useMutation(CREATE_TASK, {
        update(cache, {data: {createTask: {task}}}) {
            cache.modify({
                fields: {
                    tasks(existingTasks = []) {
                        console.log('existingTasks: ', existingTasks);
                        const newTaskRef = cache.writeFragment({
                            data: task,
                            fragment: NEW_TASK,
                        });
                        return [...existingTasks, newTaskRef];
                    }
                }
            });
        }
    });

    const [deleteTask] = useMutation(DELETE_TASK, {
        update(cache, {data: {deleteTask: {task}}}) {
            cache.modify({
                id: cache.identify(task),
                fields: {
                    tasks(existingTasksRefs, {readField}) {
                        return existingTasksRefs.filter(
                            taskRef => task.id !== readField('id', taskRef)
                        );
                    },
                },
            });
        }
    });
    const [updateTask] = useMutation(UPDATE_TASK, {
        update(cache, {data: {updateTask: {task}}}) {
            cache.modify({
                fields: {
                    tasks(existingTasksRefs = [], {readField}) {
                        const newTaskRef = cache.writeFragment({
                            data: task,
                            fragment: NEW_TASK
                        });
                        return [...existingTasksRefs, newTaskRef];
                    }
                }
            });
        }
    });

    const {data} = useQuery(ALL_TASKS);

    return {
        tasks: data,
        createTask,
        deleteTask,
        updateTask,
    };
};

export default useTasks;
