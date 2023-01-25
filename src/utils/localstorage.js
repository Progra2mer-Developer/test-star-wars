export const getLocalStorage = (key) => {
  const data = localStorage.getItem(key);
  if (key !== null) {
    return JSON.parse(data);
  }
  return {};
};
export const setLocalStorage = (key, data) => {
  localStorage.setItem(key, JSON.stringify(data));
};
