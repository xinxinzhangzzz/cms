import dayjs from 'dayjs'
import utc from 'dayjs/plugin/utc'
dayjs.extend(utc)

/**
 *
 * @param UTCTime 格式化UTC时间字符串
 * @param format 自定义时间格式 'YYYY/MM/DD HH:MM:ss'
 * @returns time
 */
export const formatTimeUTC = (UTCTime: string, format: string = 'YYYY/MM/DD HH:MM:ss') => {
  // utcOffset: 偏移小时
  return dayjs(UTCTime).utc().utcOffset(8).format(format)
}
