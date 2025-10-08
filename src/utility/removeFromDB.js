import { getDataFromLS } from "./addToLS";

const removeDataId = (id) => {
  const storedId = getDataFromLS();

  console.log(storedId);

  const updatedId = storedId.filter((appId) => appId !== id);

  localStorage.setItem("appList", JSON.stringify(updatedId));
};

export default removeDataId;
