/** @format */

/**
 * 获取URL参数值
 * @param {String} name 参数名
 * @returns {String}
 */
export function getUrlQuery(name = '', url = '') {
  if (!url && typeof window !== 'undefined') url = window.location.href

  const reg = new RegExp('([?|&])' + name + '=([^&]*)(&|$)', 'i')
  const fragram = url.split('#')
  // eslint-disable-next-line
  for (const str of fragram) {
    const r = str.match(reg)
    // null 或者 undefined 情况直接返回null
    if (r !== null && r[2] !== 'undefined' && r[2] !== 'null') {
      return unescape(r[2])
    }
  }
  return null
}
