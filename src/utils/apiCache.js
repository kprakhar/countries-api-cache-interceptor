import { buildStorage, setupCache } from "axios-cache-interceptor";
import { getDBInstance } from "./dbStorage";


// Cache TTL (Time to Live): how long the response should stay in cache (in ms)
const MAX_CACHE_TIME_IN_MS = 5 * 60 * 1000; // 5 minutes

/**
 * Adds caching logic to the given Axios instance.
 */
const addCacheInterceptor = (axiosInstance) => {
    return setupCache(axiosInstance, {
        ttl: MAX_CACHE_TIME_IN_MS,

        // Don't auto-interpret cache headers (we want to manage TTL ourselves)
        // By default, axios-cache-interceptor tries to obey HTTP response headers like Cache-Control.
        interpretHeader: false,

        // Custom storage logic using localForage
        // This lets us store cached data in IndexedDB using localForage instead of memory or localStorage.
        storage: buildStorage({

            // Look up cached response by key
            async find(key) {
                const value = await getDBInstance().getItem(key);
                if (!value) {
                    return undefined;
                }

                return value;
            },

            // Save response to cache
            async set(key, value) {
                await getDBInstance().setItem(key, value);
            },

            // Remove a cached item
            async remove(key) {
                await getDBInstance().removeItem(key);
            },

            // Clear all cached data
            async clear() {
                await getDBInstance().clear();
            }
        }),

        // Only cache successful (2xx) responses
        cachePredicate: respose => respose.status >= 200 && respose.status < 300
    });
}



export default addCacheInterceptor;
