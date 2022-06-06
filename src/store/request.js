import axios from "axios";
export function requestGetUser(action, DataFromStore) {
  console.log(DataFromStore);
  const body = action;
  console.log(body);

  const postValue = DataFromStore.FormStage;
  return axios.request({
    method: "get",
    url: `https://jsonplaceholder.typicode.com/posts/${postValue}`,
  });
}
