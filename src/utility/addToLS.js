import { toast } from "react-toastify";

const getDataFromLS = () => {
  const storedDataSTR = localStorage.getItem("appList");

  if (storedDataSTR) {
    const storedAppsData = JSON.parse(storedDataSTR);
    return storedAppsData;
  } else {
    return [];
  }
};

const addDataToLS = (id) => {
  const storedAppsData = getDataFromLS();
  if (storedAppsData.includes(id)) {
    toast.warning("⚠️ Already Exist");
  } else {
    storedAppsData.push(id);
    const setData = JSON.stringify(storedAppsData);
    localStorage.setItem("appList", setData);
    toast.success("🚀 Installing ...");
  }
};

export { getDataFromLS, addDataToLS };
