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
    let serverData = {
      text: data,
      //map data to server
      //name:data.name;
      //surname:data.surname
    };
    await Service.post(`/${apiName}/`, serverData);
    return;
  },
  async deleteItemFromCollectionByIdMDb(apiName, id) {
    console.log("CALLED FUNCTION: deleteItemFromCollectionByIdMDb");
    return Service.delete(`${apiName}/${id}`);
  },

  async registerUser(apiName, data) {
    console.log("CALLED FUNCTION: registerUser");
    let serverData = {
      username: data.username,
      password: data.password,
    };
    console.log(serverData);
    await Service.post(`/${apiName}/`, serverData);
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
