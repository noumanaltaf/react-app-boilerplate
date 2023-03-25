
function omit(obj: any, keys: any) {
  const ret: any = {};
  keys = new Set(keys);

  const keysToCopy = Object.keys(obj).filter(key => !keys.has(key));
  for (const key of keysToCopy) {
    ret[key] = obj[key];
  }
  return ret;
}

/**
* isNull checks that passed value is empty, undefined or null
* @param {any} value
* @returns {boolean}
*/
export const isNull = (value: any) => {
  return value === '' ||
    value === undefined ||
    value === null ||
    (Array.isArray(value) && value.length === 0) ||
    (typeof value === 'object' && Object.keys(value).length === 0);
}

/**
 * create reducer for userReducer hook with object type procedural calls instead of switch cases
 * @param {IState} state state.
 * @param {IActions} actions actions to be called.
 * @param {IActionMap} actions actions to be called.
 */

export const createReducer = <IActionMap, IState, IActions extends object>(actionMap: IActionMap) => (state: IState, actions: IActions): any => {

  const key = Object.keys(actions)?.[0] ?? null;
  if (!key) {
    return state;
  }

  const payload = actions[key as keyof IActions];
  const handler = actionMap[key as keyof IActionMap] as Function;
  const updatedState = handler ? handler(state, payload) : state;
  const updatedActions = omit(actions as object, [key]);

  return createReducer(actionMap)(updatedState, updatedActions);
};

/**
 * to inject variables in url
 * @param {string} url state.
 * @param {object} data actions to be called.
 */

export function injectQueryParamsUrl(url: string, data: any) {
  if (!url || !data) {
    return url;
  }

  Object.keys(data).forEach((key) => {
    if (url.includes(`:${key}`)) {
      url = url.replace(`:${key}`, data[key])
    }
  })

  return url;
}

/**
 * set url parameters
 * @param {string} url state.
 * @param {object} urlParams actions to be called.
 */
export const appendUrlSearchParams = (url: string, params: any): string => {
  if (isNull(url) || isNull(params)) {
    return url;
  }

  const urlParams = new URLSearchParams('');
  Object.keys(params).forEach((key) => {
    urlParams.set(key, params[key]);
  });
  url = `${url}?${urlParams.toString()}`;

  return url;
};