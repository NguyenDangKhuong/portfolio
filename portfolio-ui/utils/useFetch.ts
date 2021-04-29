import { useCallback, useEffect, useMemo, useState } from 'react'
import querystring from 'querystring'
import { reloadUserAuth, userToken } from './googleAuth'
const USER_KEY = 'user'

const AuthHeader = {
  Authorization: `Bearer ${userToken() as string}`,
  'x-auth-token-type': 'internal-manager'
}
interface GetRequest<T> {
  method?: 'get' | 'post'
  url: string
  params?: Params
  headers?: Headers
  skip?: boolean
  successCallBack?: (data?: T) => void
  errorCallBack?: (err: any) => void
}

type Refetch<T> = ({ url, params }: RefetchArgs<T>) => Promise<T | null>

interface GetResponse<T> {
  data?: T | null
  refetch: Refetch<T>
  error: any
  hasError: boolean
  isLoading: boolean
}

interface Headers {
  [key: string]: any
}

interface Params {
  [key: string]: any
}

interface RefetchArgs<T> {
  url?: string
  params?: Params
  body?: Params
  successCallBack?: (data?: T) => void
  errorCallback?: (err: any) => void
}

export function useGet<T> ({
  method = 'get',
  url,
  params,
  headers,
  skip = false,
  successCallBack,
  errorCallBack
}: GetRequest<T>): GetResponse<T> {
  const memoizeUrl = useMemo(() => url, [url])
  const memoizeHeaders = useMemo(() => headers, [headers])
  const query = useMemo(
    () =>
      params && method === 'get' ? `?${querystring.stringify(params)}` : '',
    [method, params]
  )
  const body = useMemo(
    () => method === 'post' && JSON.stringify(params ?? {}),
    [method, params]
  )

  const [data, setData] = useState<T | null>(null)
  const [isLoading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const [hasError, setHasError] = useState(false)
  const doGet = useCallback<Refetch<T>>(
    async <T>(args?: RefetchArgs<T>) => {
      // eslint-disable-next-line @typescript-eslint/no-floating-promises
      reloadUserAuth()
      try {
        setLoading(true)
        const newQuery = args?.params
          ? `?${querystring.stringify(args?.params)}`
          : query
        const newBody = args?.body ? JSON.stringify(args?.body) : body

        const res: Response = await fetch(
          `${args?.url ?? memoizeUrl}${newQuery}`,
          {
            method,
            headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json',
              // ...AuthHeader,
              ...memoizeHeaders
            },
            ...(newBody && { body: newBody })
          }
        )
        const data: T = await res?.json()
        successCallBack?.()
        args?.successCallBack?.(data)
        return data
      } catch (err) {
        if (err?.response?.status === 401) {
          window.localStorage.removeItem(USER_KEY)
          window.location.href = '/login'
        }
        setError(err)
        setHasError(true)
        errorCallBack?.(err)
        throw new Error(err)
      } finally {
        setLoading(false)
      }
    },
    [
      body,
      errorCallBack,
      memoizeHeaders,
      memoizeUrl,
      method,
      query,
      successCallBack
    ]
  )

  const clear = useCallback(() => {
    setData(null)
    setLoading(false)
    setHasError(false)
    setError(null)
  }, [])

  useEffect(() => {
    if (skip) return
    if (url) {
      const f = async () => {
        const res = await doGet({})
        setData(res)
      }
      // eslint-disable-next-line @typescript-eslint/no-floating-promises
      f()
    }
    return () => clear()
  }, [clear, doGet, skip, url])
  return {
    data,
    refetch: doGet,
    error,
    hasError,
    isLoading
  }
}

interface PostRequest {
  method?: 'post' | 'put' | 'delete'
  url: string
  params?: Params
  headers?: Headers
}

type DoPost<T> = ({ url, params }: RefetchArgs<T>) => Promise<T | null>

interface PostResponse<T> {
  data?: T | null
  doPost: DoPost<T>
  error: any
  hasError: boolean
  isLoading: boolean
}

export function usePost<T> ({
  method = 'post',
  url,
  params,
  headers
}: PostRequest): PostResponse<T> {
  const memoizeUrl = useMemo(() => url, [url])
  const memoizeParams = useMemo(() => params, [params])
  const memoizeHeaders = useMemo(() => headers, [headers])
  const [data, setData] = useState<T | null>(null)
  const [isLoading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const [hasError, setHasError] = useState(false)
  const doPost = useCallback<DoPost<T>>(
    async <T>(args?: RefetchArgs<T>) => {
      await reloadUserAuth()
      try {
        const params = args?.params ?? memoizeParams
        const body = params && JSON.stringify(args?.params)

        setLoading(true)
        const res: Response = await fetch(`${memoizeUrl}`, {
          method,
          headers: {
            // ...AuthHeader,
            ...memoizeHeaders
          },
          ...(body && { body })
        })
        const data: T = await res.json()
        args?.successCallBack?.(data)

        return data
      } catch (err) {
        args?.errorCallback?.(err)
        if (err?.response?.status === 401) {
          window.localStorage.removeItem(USER_KEY)
          window.location.href = '/login'
        }
        setError(err)
        setHasError(true)
        throw new Error(err)
      } finally {
        setLoading(false)
      }
    },
    [memoizeHeaders, memoizeParams, memoizeUrl, method]
  )

  const clear = useCallback(() => {
    setData(null)
    setLoading(false)
    setHasError(false)
    setError(null)
  }, [])

  useEffect(() => () => clear(), [clear])

  return {
    data,
    doPost,
    error,
    hasError,
    isLoading
  }
}
