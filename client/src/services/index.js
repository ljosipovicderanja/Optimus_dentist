import axios from "axios";

let Service = axios.create({
  baseURL: `api/post`,
  timeout: 2000,
});

let db = {
  async getAllItemsFromCollectionMDb(apiName) {
    console.log("CALLED FUNCTION: getAllItemsFromCollectionMDb");
    let response = await Service.get(`/${apiName}/`);
    let data = response.data;
    return data;
  },
  async addItemInCollectionMDb(apiName, data) {
    console.log("CALLED FUNCTION: addItemInCollectionMDb");
    console.log(data);
    let result = await Service.post(`/${apiName}/`, data);
    return result;
  },
  async deleteItemFromCollectionByIdMDb(apiName, id) {
    console.log("CALLED FUNCTION: deleteItemFromCollectionByIdMDb");
    return Service.delete(`${apiName}/${id}`);
  },

  async rateCommentDentist(apiName, data) {
    console.log("CALLED FUNCTION: rateDentist");
    let serverData = {
      _id: data._id,
      comment: data.comment,
    };
    console.log(serverData);
    return await Service.patch(`${apiName}/`, serverData);
  },

  async registerUser(apiName, data) {
    console.log("CALLED FUNCTION: registerUser");
    let serverData = {
      username: data.username,
      password: data.password,
    };
    console.log(serverData);
    return await Service.post(`/${apiName}/`, serverData);
  },

  async loginUser(apiName, data) {
    console.log("CALLED FUNCTION: loginUser");
    let serverData = {
      username: data.username,
      password: data.password,
    };
    console.log(serverData);
    let result = await Service.post(`/${apiName}/`, serverData);
    if (result.status != 200 || !result.data) {
      alert("Loign failed!");
      return;
    }
    console.log(result);
    return result;
  },
};

let auth = {};

export { Service, db, auth };
