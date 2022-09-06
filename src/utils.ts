export function queryStringFromObject(object: {}) {
  let queryParamsTemp = "";
  for (const [key, value] of Object.entries(object)) {
    queryParamsTemp += `${key}=${value}&`;
  }
  return queryParamsTemp.slice(0, -1);
}
