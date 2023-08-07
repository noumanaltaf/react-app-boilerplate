import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { QueryClientProvider } from '@tanstack/react-query';
import queryClient from './queryClient';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { worker } from "./api/mock/browser";

if (process.env.NODE_ENV === 'development') {
  worker.start();
} else {
  worker.start({
    serviceWorker: {
      url: 'https://noumanaltaf.github.io/react-app-boilerplate/mockServiceWorker.js',
    },
    onUnhandledRequest: 'bypass'
  });
}

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <App />
      <ReactQueryDevtools />
    </QueryClientProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
