export const setKeyToLocalStorage = <T>(key: string, toSave: T) => {
  localStorage.setItem(key, JSON.stringify(toSave));
}

export const getKeyFromLocalStorage = <T>(key: string): T | null => {
  const result = localStorage.getItem(key);
  if (!result)
    return null;

  return JSON.parse(result);
}

export const removeKeyFromLocalStorage = (key: string): void =>
  localStorage.removeItem(key)