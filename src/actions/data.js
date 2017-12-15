export const loadStart = (id) => ({type: 'LOAD_START', id});
export const loadComplete = (id, data) => ({type: 'LOAD_END', id, data});
export const loadFailed = (id) => ({type: 'LOAD_FAILED', id});
