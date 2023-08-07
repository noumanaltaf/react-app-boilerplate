import { APIRoutes } from "../constants";
import { Payload, useDelete, useFetch, usePost, useUpdate } from "../queryService";

export interface ITodo {
  id?: string;
  todo?: string;
  completed?: boolean;
  userId?: number;
}
interface ITodoResponse {
  todos: ITodo[]
}

export const useCreateTodo = () =>
  usePost<Payload<ITodo>, ITodo>(APIRoutes.todo.withoutId, {});

export const useFetchTodo = () =>
  useFetch<ITodoResponse>(APIRoutes.todo.withoutId, {});

export const useDeleteTodo = () =>
  useDelete(APIRoutes.todo.withId, {});

export const useUpdateTodo = () =>
  useUpdate<Payload<{ todoId: string }>, any>(APIRoutes.todo.withId, {});