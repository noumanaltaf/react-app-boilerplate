import React, { Suspense } from 'react';
import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom"
import LayoutFrame from './pages/LayoutFrame';
import { pageRoutes } from './routes';

const Dashboard = React.lazy(() => import('./pages/Dashboard'));
const TodoList = React.lazy(() => import('./pages/TodoList'));

function App() {
  return (
    <div className='app'>
      <BrowserRouter basename='/react-app-boilerplate'>
        <div>
          <LayoutFrame />
          <Routes>
            <Route path={pageRoutes.main} element={(
              <Suspense>
                <Dashboard />
              </Suspense>
            )} />
            <Route path={`${pageRoutes.todo}/*`} element={(
              <Suspense>
                <TodoList />
              </Suspense>
            )} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;