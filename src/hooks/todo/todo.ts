import { APIRoutes } from "../constants";
import { Payload, useDelete, useFetch, usePost, useUpdate } from "../queryService";

interface ITodo {
  id?: number;
  todo?: string;
  completed?: boolean;
  userId?: number;
}
interface ITodoResponse {
  todos: ITodo[]
}

export const useCreateTodo = () =>
  usePost<Payload<ITodo>, ITodo>(APIRoutes.todo.create, {});

export const useFetchTodo = () =>
  useFetch<ITodoResponse>(APIRoutes.todo.retrieve, {});

export const useDeleteTodo = () =>
  useDelete(APIRoutes.todo.delete, {});

export const useUpdateTodo = () =>
  useUpdate(APIRoutes.todo.update, {});