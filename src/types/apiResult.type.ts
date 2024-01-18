export type TApiResult<T> = {
  success: boolean,
  message: string,
  result: T
}