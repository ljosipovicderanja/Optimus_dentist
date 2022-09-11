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
};

let auth = {};

export { Service, db, auth };
