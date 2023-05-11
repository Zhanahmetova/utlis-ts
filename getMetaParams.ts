export const getMetaParams = (data, isNewAuto = false, locale?: string) => {
  const markSfu = data.mark?.sfu;
  const modelSfu = data.model?.sfu;
  const citySfu = data.city?.city_sfu;

  let packedRoute = [markSfu, modelSfu, citySfu];
  packedRoute = packedRoute.filter(item => !!item);
  let routeType = [markSfu ? 'mark' : null, modelSfu ? 'model' : null, citySfu ? 'city' : null];
  routeType = routeType.filter(item => !!item);

  const repo = isNewAuto ? 'new-auto' : 'cars';

  const localeStr = locale
    ? locale === 'kk'
      ? `/${locale}`
      : ''
    : '';

  return ({
    route: localeStr + (`/${repo}${routeType.length ? '/' : ''}${routeType.join('/')}`),
    project: isNewAuto ? 'NEW_AUTO' : 'CARS',
    packed_route: localeStr + (`/${repo}${packedRoute.length ? '/' : ''}${packedRoute.join('/')}`),
    mark_id: data.mark_id || null,
    model_id: data.model_id || null,
    is_new: isNewAuto ?? null,
    city_id: data.city_id || null,
    region_id: !isNewAuto ? data.region_id || null : null,
    is_prime: !isNewAuto ? data.isPrime || null : null
  });
};
