import { useLocalStorage } from "./useLocalStorage";

export const useApiKey = () => useLocalStorage('apikey', '');