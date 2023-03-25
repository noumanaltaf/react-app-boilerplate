import React from 'react';
import TodoList from './TodoList';
import TodoStateProvider from './TodoList.context';

const TodoListContainer = () => {
  return (
    <TodoStateProvider>
      <TodoList />
    </TodoStateProvider>
  );
};

export default TodoListContainer;