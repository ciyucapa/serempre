import {graphql, useStaticQuery} from 'gatsby';
import {useMutation, gql} from '@apollo/client';

const CREATE_TASK = gql`
  mutation (
  $input: CreateTaskInput!
) {
  createTask(input: $input) {
    id
    email
    title
    description
    position
  }
}
`;

const UPDATE_TASK = gql`
 mutation (
  $id: ID!,
  $input: UpdateTaskInput!
) {
  updateTask(id: $id, input: $input) {
    id
    email
    title
    description
    position
  }
}
`;

export const DELETE_TASK = gql`
  mutation (
  $id: String!
) {
  deleteTask(input: { where: { id: $id } }) {
  task {
      id
      email
      title
      description
      position
    }
  }
}
`

const GET_TASKS = graphql`
        query {
            allStrapiTasks {
                nodes {
                   id
                   title
                   description
                   email
                   position {
                      lat
                      lng
                   }
                   created_at
                }
            }
        }
    `;

const useTasks = () => {
    const [createTask] = useMutation(CREATE_TASK);
    const [deleteTask] = useMutation(DELETE_TASK);
    const [updateTask] = useMutation(UPDATE_TASK);
    const result = useStaticQuery(GET_TASKS);

    return {
        tasks: result.allStrapiTasks.nodes,
        createTask,
        deleteTask,
        updateTask,
    };
};

export default useTasks;
