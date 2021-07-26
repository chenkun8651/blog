export function clearDeep(obj: any): void {
  if (!obj || typeof obj !== "object") return;
  const keys = Object.keys(obj);
  for (let key of keys) {
    const value = obj[key];
    if (typeof value === "undefined" || !value) {
      delete obj[key];
    } else if (typeof value === "object") {
      clearDeep(obj[key]);
      if (Object.keys(obj[key]).length === 0) {
        delete obj[key];
      }
    }
  }
}

export function paramsToString(params: any): string {
  let paramsString = "?";
  clearDeep(params);
  const keys = Object.keys(params);
  for (let key of keys) {
    const value = params[key];
    paramsString += `${key}=${value}&`;
  }
  paramsString = paramsString.substr(0, paramsString.length - 1);
  return paramsString;
}
