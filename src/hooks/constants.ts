export const BASE_API_ENDPOINT = 'https://dummyjson.com/';

export const APIRoutes = {
  todo: {
    create: 'todos/add',
    retrieve: 'todos',
    update: 'todos/:todoId',
    delete: 'todos/:todoId'
  }
}