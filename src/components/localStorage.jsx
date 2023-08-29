const loadStorageData = (key) => {
  const data = JSON.parse(localStorage.getItem("userInfo"));
  return data?.[key];
};

const updateLocalStorageData = (property, newData) => {
  const data = JSON.parse(localStorage.getItem("userInfo"));
  localStorage.setItem(
    "userInfo",
    JSON.stringify({
      ...data,
      [property]: newData,
    })
  );
};

export { loadStorageData, updateLocalStorageData };
