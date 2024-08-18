import type { UseMutationOptions, DefaultOptions } from '@tanstack/react-query'
import { isServer, QueryClient } from '@tanstack/react-query'

export const DEFAULT_QUERY_CONFIG = {
  queries: { refetchOnWindowFocus: false, retry: 2 }
} satisfies DefaultOptions

export const makeQueryClient = (queryConfig: DefaultOptions = DEFAULT_QUERY_CONFIG) => {
  return new QueryClient({ defaultOptions: queryConfig })
}

let browserQueryClient: QueryClient | undefined = undefined

export const getQueryClient = () => {
  if (isServer) {
    // Server: always make a new query client
    return makeQueryClient()
  } else {
    // Browser: make a new query client if we don't already have one
    // This is very important, so we don't re-make a new client if React
    // suspends during the initial render. This may not be needed if we
    // have a suspense boundary BELOW the creation of the query client
    if (!browserQueryClient) {
      browserQueryClient = makeQueryClient()
    }

    return browserQueryClient
  }
}

export type ApiFnReturnType<FnType extends (...args: any) => Promise<any>> = Awaited<ReturnType<FnType>>

export type QueryConfig<T extends (...args: any[]) => any> = Omit<ReturnType<T>, 'queryKey' | 'queryFn'>

export type MutationConfig<MutationFnType extends (...args: any) => Promise<any>> = UseMutationOptions<
  ApiFnReturnType<MutationFnType>,
  Error,
  Parameters<MutationFnType>[0]
>
