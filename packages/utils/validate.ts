export const isArray = Array.isArray
export const isFunction = (val: unknown): val is Function => typeof val === 'function'
export const extend = Object.assign
export const camelize = (str: string): string =>
  str.replace(/-(\w)/g, (_, c) => c.toUpperCase())