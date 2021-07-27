export function toRawType(value: any): string {
  return Object.prototype.toString.call(value).slice(8, -1);
}

export function isObject(value: object): boolean {
  return toRawType(value) === "Object" ? true : false;
}

export function isArray(value: any[]): boolean {
  return toRawType(value) === "Array" ? true : false;
}

export function isSymbol(value: symbol): boolean {
  return toRawType(value) === "Symbol" ? true : false;
}

export function isBoolean(value: boolean): boolean {
  return toRawType(value) === "Boolean" ? true : false;
}

export function isString(value: string): boolean {
  return toRawType(value) === "String" ? true : false;
}

export function isNumber(value: number): boolean {
  return toRawType(value) === "Number" ? true : false;
}

export function isNull(value: null): boolean {
  return toRawType(value) === "Null" ? true : false;
}

export function isUndefined(value: undefined): boolean {
  return toRawType(value) === "Undefined" ? true : false;
}

export function clearDeep(obj: any): void {
  if (!obj || !isObject(obj)) return;
  const keys = Object.keys(obj);
  for (let key of keys) {
    const value = obj[key];
    if (isUndefined(value) || isNull(value)) {
      delete obj[key];
    } else if (isObject(value)) {
      clearDeep(obj[key]);
      if (Object.keys(obj[key]).length === 0) {
        delete obj[key];
      }
    }
  }
}

export function getParamsToString(params: any): string {
  clearDeep(params);
  const keys = Object.keys(params);
  let paramsString = "?";
  for (let key of keys) {
    const value = params[key];
    if (keys.indexOf(key) === keys.length - 1) {
      paramsString += `${key}=${value}`;
    } else {
      paramsString += `${key}=${value}&`;
    }
  }
  return paramsString;
}
