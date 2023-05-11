export const silentUpdateUrl = (path: string, params: string) =>
  history.pushState({
    params
  }, null, `/${path}/${params}`);
