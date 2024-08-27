import { ImportMetaEnv, RedirectionType } from '../constant/types'
import { isEmpty } from '../validator/isEmpty'
/**
 * @description: 接口、重定向动态地址
 * @param {*} RedirectionType
 * @return {*}
 */
export const baseUrl = (key = RedirectionType.APIURL, env: ImportMetaEnv | NodeJS.ProcessEnv) => {
  const value = document.body.getAttribute(key)
  switch (key) {
    case RedirectionType.APIURL:
      return isEmpty(value)
        ? env['VUE_APP_FETCH_BASE_URL']
          ? env.VUE_APP_FETCH_BASE_URL
          : env.VITE_APP_FETCH_BASE_URL
        : `//${value}`
    case RedirectionType.DIREACTIVEURL:
      return isEmpty(value)
        ? env['VUE_APP_REDIRECT_BASE_URL']
          ? env.VUE_APP_REDIRECT_BASE_URL
          : env.VITE_APP_REDIRECT_BASE_URL
        : `${value}`
    case RedirectionType.ENTRYURL:
      return isEmpty(value)
        ? env['VUE_APP_ONLYOFFICE_BASE_URL']
          ? env.VUE_APP_ONLYOFFICE_BASE_URL
          : env.VITE_APP_ONLYOFFICE_BASE_URL
        : `//${value}`
    case RedirectionType.PRINTURL:
      return isEmpty(value) ? (env['VUE_APP_PRINT_URL'] ? env.VUE_APP_PRINT_URL : env.VITE_APP_PRINT_URL) : `//${value}`
    case RedirectionType.MICROURL:
      return isEmpty(value)
        ? env['VUE_APP_MICRO_BASE_URL']
          ? env.VUE_APP_MICRO_BASE_URL
          : env.VITE_APP_MICRO_BASE_URL
        : `//${value}`
    default:
      return '/'
  }
}
