export const foreverEdge = {
  browser: false,
  edge: false,
}

export const assetCache = {
  edge: {
    maxAgeSeconds: 60 * 60 * 60 * 365,
    forcePrivateCaching: true,
  },
  browser: {
    maxAgeSeconds: 0,
    serviceWorkerSeconds: 60 * 60 * 24,
  },
}

export const SSR_CACHE_HANDLER = ({ removeUpstreamResponseHeader, cache }) => {
  removeUpstreamResponseHeader('cache-control')
  cache({
    browser: false,
    edge: false,
  })
}

export const NEXT_CACHE_HANDLER = ({ removeUpstreamResponseHeader, cache }) => {
  removeUpstreamResponseHeader('cache-control')
  cache({
    browser: {
      maxAgeSeconds: 0,
      serviceWorkerSeconds: 60 * 60 * 24,
    },
    edge: {
      maxAgeSeconds: 60 * 60 * 24 * 365 * 10,
      staleWhileRevalidateSeconds: 60 * 60 * 24,
    },
  })
}
