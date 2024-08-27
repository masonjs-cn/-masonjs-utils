// 国内手机号码
export const REGEXP_PHONE = /^(\+?0?86-?)?1[3456789]\d{9}$/
// 国内座机号码
export const REGEXP_TELEPHONE = /\d{3}-\d{8}|\d{4}-\d{7}/
// 国内手机、座机号
export const REGEXP_PHONE_TELEPHONE = /^((0\d{2,3}-\d{7,8})|((13[0-9])|(15[^4])|(18[^14])|(17[0-8])|(147))\d{8})$/
// URL地址
export const REGEXP_URL = /[-a-zA-Z0-9@:%._+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_+.~#?&//=]*)/i
// 邮箱
export const REGEXP_EMAIL = /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/
// ip
export const REGEXP_IP = /^((2[0-4]\d|25[0-5]|[01]?\d\d?)\.){3}(2[0-4]\d|25[0-5]|[01]?\d\d?)$/
// 端口
export const REGEXP_PORT =
  /^([0-9]|[1-9]\d|[1-9]\d{2}|[1-9]\d{3}|[1-5]\d{4}|6[0-4]\d{3}|65[0-4]\d{2}|655[0-2]\d|6553[0-5])$/
// 汉字
export const REGEXP_ZH = /^[\u4e00-\u9fa5]{0,}$/
// 邮政编码
export const REGEXP_POSTAL_CODE = /^[1-9]\d{5}(?!\d)$/
// 字母、数字
export const REGEXP_LETTER_NUMBER = /^[A-Za-z0-9_]*$/
// 字母、数字、下划线
export const REGEXP_LETTER_NUMBER_UNDERLINE = /^[a-zA-Z0-9_]+$/
// 字母、数字、下划线、中划线
export const REGEXP_LETTER_NUMBER_ZH_UNDERLINE_MIDLINE = /^[a-zA-Z0-9_-]+$/
// 字母、数字、汉字、下划线
export const REGEXP_LETTER_NUMBER_ZH_UNDERLINE = /^[a-zA-Z0-9_\u4e00-\u9fa5]+$/

// 密码强度(最少6位，包括至少1个大写字母，1个小写字母，1个数字，1个特殊字符)
export const REGEXP_PASSWORD_STRENGTH = /^.*(?=.{6,})(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#$%^&*? ]).*$/

// 判断是否为16进制颜色，rgb或rgba
export const REGEXP_COLOR =
  /^(#([0-9a-fA-F]{3}){1,2}|[rR][gG][Bb](\((\s*(2[0-4]\d|25[0-5]|[01]?\d{1,2})\s*,){2}\s*(2[0-4]\d|25[0-5]|[01]?\d{1,2})\s*\)|[Aa]\((\s*(2[0-4]\d|25[0-5]|[01]?\d{1,2})\s*,){3}\s*([01]|0?\.\d+)\s*\)))$/

// 是否为身份证
export const REGEXP_ID_CARD =
  /^(^[1-9]\d{7}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}$)|(^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])((\d{4})|\d{3}[Xx])$)$/

// 是否为手机
export const REGEXP_MOBILE = /Android|webOS|iPhone|iPad|iPod|BlackBerry|Opera Mini/i

// 是否为苹果设备
export const REGEXP_APPLE_DEVICE = /(mac|iphone|ipod|ipad)/i

export default {
  REGEXP_EMAIL,
  REGEXP_IP,
  REGEXP_PHONE,
  REGEXP_TELEPHONE,
  REGEXP_PHONE_TELEPHONE,
  REGEXP_URL,
  REGEXP_PORT,
  REGEXP_ZH,
  REGEXP_POSTAL_CODE,
  REGEXP_LETTER_NUMBER,
  REGEXP_LETTER_NUMBER_UNDERLINE,
  REGEXP_LETTER_NUMBER_ZH_UNDERLINE,
  REGEXP_PASSWORD_STRENGTH,
  REGEXP_COLOR,
  REGEXP_ID_CARD,
  REGEXP_MOBILE,
  REGEXP_APPLE_DEVICE
}
