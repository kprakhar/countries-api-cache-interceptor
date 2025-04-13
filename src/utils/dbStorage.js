import localforage from 'localforage';

const DB_NAME = 'APP_CACHE';

const localforageInstances = {};

export const getDBInstance = (tableName = 'countries') => {
    const key = `${DB_NAME}_${tableName}`;
    let instance = localforageInstances[key];
    if (!instance) {
        instance = localforageInstances[key] = localforage.createInstance({
            name: DB_NAME,
            storeName: tableName,
        });
    }
    return instance;
}