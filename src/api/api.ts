import axios from 'axios';
import { BASE_API_ENDPOINT } from './constants';

export const api = {
  get: <R>(url: string, params?: object) =>
    axios.get<R>(new URL(url, BASE_API_ENDPOINT).href, {
      headers: {
        'Content-Type': 'application/json',
      },
      ...params,
    }),
  post: <P, R>(url: string, data: P, params?: object) =>
    axios.post<R>(new URL(url, BASE_API_ENDPOINT).href, data, {
      headers: {
        'Content-Type': 'application/json',
      },
      ...params
    }),
  put: <P, R>(url: string, data: P, params?: object) =>
    axios.put<R>(new URL(url, BASE_API_ENDPOINT).href, data, {
      headers: {
        'Content-Type': 'application/json',
      },
      ...params
    }),
  delete: <R>(url: string, params?: object) =>
    axios.delete<R>(new URL(url, BASE_API_ENDPOINT).href, {
      headers: {
        'Content-Type': 'application/json',
      },
      ...params
    }),
};
