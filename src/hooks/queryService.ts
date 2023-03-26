import { useQuery, UseQueryOptions, QueryKey, useQueryClient, useMutation } from '@tanstack/react-query';
import { appendUrlSearchParams, injectQueryParamsUrl } from '../utils/helpers';
import { api } from './api';


export interface IOptions {
  responseParser?(response: any): any;
}

const prepareUrl = (url: string, data: any, params: object): string =>
  appendUrlSearchParams(injectQueryParamsUrl(url, data), { ...params, ...data?.urlParams });

enum APIMethod {
  GET = 'GET',
  POST = 'POST',
  PUT = 'PUT',
  DELETE = 'DELETE'
}

type UrlParams = {
  urlParams?: object
}

export type Payload<P> = UrlParams & P;

/**
*  To fetch results using useQuery and get API call method
* @param url api endpoint.
* @param params url params.
* @param config useQuery options.
* @template R Response type.
* @returns useQuery result
*/
export const useFetch = <R>(
  url: string,
  params: object,
  options?: IOptions,
  config?: UseQueryOptions<R, Error, R, QueryKey>,

) => useQuery({
  queryKey: [APIMethod.GET, appendUrlSearchParams(url, params)],
  queryFn: () => api
    .get<R>(url as string, { params })
    .then((res) => res.data)
    .then((r) => options?.responseParser ? options.responseParser(r) : r),
  enabled: !!url && config?.enabled,
  ...config
});

const useGenericMutation = <P extends UrlParams, R>(
  func: (data: P) => Promise<R>,
  url: string,
  method: APIMethod,
  params?: object,
) => {
  const queryClient = useQueryClient();

  return useMutation(func, {
    onSuccess: (data, payload) => {
      const { urlParams } = payload;
      queryClient.setQueryData([method, prepareUrl(url!, payload, { ...params, ...urlParams })], data);
    },
    onError: (err) => {
      console.error(err);
    }
  })
}

/**
*  use to call get api wih params
* @param url api endpoint.
* @param params url params.
* @template R Response type.
* @returns useMutation result
*/
export const useFetchMutation = <P extends UrlParams, R>(
  url: string,
  options?: IOptions,
  params?: object
) => {

  return useGenericMutation<P, R>(
    (data) => {
      const { urlParams } = data;

      return api.get<R>(url, { params: { ...params, ...urlParams } })
        .then((r) => r.data)
        .then((r) => options?.responseParser ? options.responseParser(r) : r);
    },
    url,
    APIMethod.GET,
    params,
  );
};
/**
*  To delete result using useMutation and delete API call method
* @param url api endpoint.
* @param params url params.
* @template R Response type.
* @returns useMutation result
*/
export const useDelete = <R>(
  url: string,
  options?: IOptions,
  params?: object
) => {
  return useGenericMutation<any, R>(
    (data) => {
      const { urlParams } = data;

      return api.delete<R>(url, { params: { ...params, ...urlParams } })
        .then((r) => r.data)
        .then((r) => options?.responseParser ? options.responseParser(r) : r);
    },
    url,
    APIMethod.DELETE,
    params,
  );
};

/**
* To post result using useMutation and post API call method
* @param url api endpoint.
* @param params url params.
* @template R Response type.
* @template P Payload type.
* @returns useMutation result
*/
export const usePost = <P extends UrlParams, R>(
  url: string,
  options?: IOptions,
  params?: object
) => {
  return useGenericMutation<P, R>(
    (data) => {
      const { urlParams } = data;

      return api.post<P, R>(url, data, { params: { ...params, ...urlParams, } })
        .then((r) => r.data)
        .then((r) => options?.responseParser ? options.responseParser(r) : r);
    },
    url,
    APIMethod.POST,
    params,
  );
};

/**
* To post result using useQuery and post API call method
* @param url api endpoint.
* @param params url params.
* @param config useQuery options.
* @template R Response type.
* @template P Payload type.
* @returns useQuery result
*/
export const usePostQuery = <P, R>(
  url: string,
  params: object,
  options?: IOptions,
  config?: UseQueryOptions<unknown, Error, R, QueryKey>
) => useQuery({
  queryKey: [APIMethod.POST, appendUrlSearchParams(url, params)],
  queryFn: (data) => api.post<P, R>(url, data as P, { params })
    .then((r) => r.data)
    .then((r) => options?.responseParser ? options.responseParser(r) : r),
  enabled: !!url && config?.enabled,
  ...config
})

/**
* To update result using useMutation and put API call method
* @param url api endpoint.
* @param params url params.
* @template R Response type.
* @template P Payload type.
* @returns useMutation result
*/
export const useUpdate = <P extends UrlParams, R>(
  url: string,
  options?: IOptions,
  params?: object
) => {
  return useGenericMutation<P, R>(
    (data) => {
      const { urlParams } = data;

      return api.put<P, R>(url, data, { params: { ...params, ...urlParams } })
        .then((r) => r.data)
        .then((r) => options?.responseParser ? options.responseParser(r) : r)
    },
    url,
    APIMethod.PUT,
    params,
  );
};