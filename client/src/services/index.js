import axios from "axios";

let Service = axios.create({
  baseURL: `api/post`,
  timeout: 2000,
});

let db = {
  async getAllItemsFromCollectionMDb(apiName) {
    console.log("CALLED FUNCTION: getAllItemsFromCollectionMDb");
    try {
      let response = await Service.get(`/${apiName}/`);
      let data = response.data;
      return data;
    } catch (e) {
      alert("FETCHING FROM COLLECTION FAILED: " + e.message);
      return false;
    }
  },
  async addItemInCollectionMDb(apiName, data) {
    console.log("CALLED FUNCTION: addItemInCollectionMDb");
    console.log(data);
    try {
      let result = await Service.post(`/${apiName}/`, data);
      return result;
    } catch (e) {
      alert("ADDING ITEM IN COLLECTION FAILED: " + e.message);
      return false;
    }
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
    try {
      return await Service.patch(`${apiName}/`, serverData);
    } catch (e) {
      alert("ADDING COMMENT FAILED: " + e.message);
      return false;
    }
  },

  async registerUser(apiName, data) {
    console.log("CALLED FUNCTION: registerUser");
    let serverData = {
      username: data.username,
      password: data.password,
    };
    console.log(serverData);
    let result;
    try {
      result = await Service.post(`/${apiName}/`, serverData);
      return result;
    } catch (e) {
      alert("REGISTER FAILED: " + e.message);
      return false;
    }
  },

  async loginUser(apiName, data) {
    console.log("CALLED FUNCTION: loginUser");
    let result;
    let serverData = {
      username: data.username,
      password: data.password,
    };
    console.log(serverData);
    try {
      result = await Service.post(`/${apiName}/`, serverData);
    } catch (e) {
      alert("LOGIN FAILED: " + e.message);
      return false;
    }
    return result;
  },
};

let auth = {};

export { Service, db, auth };
