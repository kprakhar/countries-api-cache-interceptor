import { buildStorage, setupCache } from "axios-cache-interceptor";
import { getDBInstance } from "./dbStorage";


const MAX_CACHE_TIME_IN_MS = 5 * 60 * 1000; // 5 minutes

const addCacheInterceptor = (axiosInstance) => {
    return setupCache(axiosInstance, {
        ttl: MAX_CACHE_TIME_IN_MS,
        interpretHeader: false,
        storage: buildStorage({
            async find(key) {
                const value = await getDBInstance().getItem(key);
                if (!value) {
                    return undefined;
                }

                return value;
            },
            async set(key, value) {
                await getDBInstance().setItem(key, value);
            },
            async remove(key) {
                await getDBInstance().removeItem(key);
            },
            async clear() {
                await getDBInstance().clear();
            }
        }),
        cachePredicate: respose => respose.status >= 200 && respose.status < 300
    });
}



export default addCacheInterceptor;
