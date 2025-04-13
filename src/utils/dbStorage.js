import localforage from 'localforage';

const DB_NAME = 'APP_CACHE';

const localforageInstances = {};

/**
 * Returns a localForage instance for a given table (store).
 * Creates it if it doesn't already exist.
 */
export const getDBInstance = (tableName = 'countries') => {
    const key = `${DB_NAME}_${tableName}`;
    let instance = localforageInstances[key];
    if (!instance) {
        instance = localforageInstances[key] = localforage.createInstance({
            name: DB_NAME, // IndexedDB name
            storeName: tableName, // Table/Store name inside DB
        });
    }
    return instance;
}