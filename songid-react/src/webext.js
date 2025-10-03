// Minimal cross-browser wrapper with Promise-based storage APIs
const raw = (typeof browser !== 'undefined') ? browser : (typeof chrome !== 'undefined' ? chrome : {});

const storage = raw && raw.storage && raw.storage.sync ? {
    sync: {
        get: (keys) => new Promise((resolve, reject) => {
            try {
                if (raw.storage.sync.get.length >= 1) {
                    // Chrome-style callback API
                    raw.storage.sync.get(keys || null, (items) => {
                        const err = raw.runtime && raw.runtime.lastError;
                        if (err) reject(err);
                        else resolve(items || {});
                    });
                } else {
                    // Firefox-style promise API
                    raw.storage.sync.get(keys || null).then(resolve, reject);
                }
            } catch (e) {
                resolve({});
            }
        }),
        set: (items) => new Promise((resolve, reject) => {
            try {
                if (raw.storage.sync.set.length >= 1) {
                    // Chrome-style callback API
                    raw.storage.sync.set(items, () => {
                        const err = raw.runtime && raw.runtime.lastError;
                        if (err) reject(err);
                        else resolve();
                    });
                } else {
                    // Firefox-style promise API
                    raw.storage.sync.set(items).then(resolve, reject);
                }
            } catch (e) {
                resolve();
            }
        })
    }
} : null;

const ext = { ...raw };
if (storage) {
    ext.storage = storage;
}

export default ext;

