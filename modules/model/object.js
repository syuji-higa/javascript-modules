import { objectType } from './object-type'

/**
 * @param {Object} to
 * @param {Object} from
 */
const assign = (to, from) => {
  const _toKeys = Object.keys(to)
  for (const [key, val] of Object.entries(from)) {
    if (_toKeys.includes(key) && objectType(val) === 'Object') {
      assign(to[key], val)
    } else {
      to[key] = val
    }
  }
}

/**
 * @param {Object} to
 * @param {Object} from
 * @return {Object}
 */
export const deepAssign = (to, from) => {
  assign(to, from)
  return to
}
