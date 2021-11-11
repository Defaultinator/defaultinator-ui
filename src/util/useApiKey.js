import create from 'zustand'

const KEY_NAME = 'apikey';
const EMPTY_VALUE = '';

function getStorageValue(key, defaultValue) {
  // window object not availble with SSR, just skip
  if (typeof window !== "undefined") {
    const saved = localStorage.getItem(key);
    const initial = saved !== null ? JSON.parse(saved) : defaultValue;
    return initial;
  }
}

export const useApiKey = create(set => ({
  apikey: getStorageValue(KEY_NAME, EMPTY_VALUE),
  setApikey: (key) => set(state => {
    localStorage.setItem(KEY_NAME, JSON.stringify(key))
    return({ apikey: key })
  }),
  deleteApikey: () => set(state => {
    localStorage.removeItem(KEY_NAME)
    return({ apikey: EMPTY_VALUE })
  })
}));

export default useApiKey;