const getStoredApplication = () => {
  const Stored = localStorage.getItem("job_application");
  if (Stored) {
    return JSON.parse(Stored);
  }
  return [];
};

const saveLocalStored = (id) => {
  const saveStored = getStoredApplication();
  const isExist = saveStored.find((idx) => idx === id);
  if (!isExist) {
    saveStored.push(id);
    localStorage.setItem("job_application", JSON.stringify(saveStored));
  }
};

export { getStoredApplication, saveLocalStored };
