import axios from "axios";
import StorageService from "./StorageService";

export default class Api {
  static axiosInstance;
  static async init() {
    const token = await StorageService.get("auth-token");
    this.axiosInstance = axios.create({
      baseURL: "http://127.0.0.1:4000/",
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
  }
  static async get(url, config) {
    return this.axiosInstance.get(url, config);
  }
  static async post(url, data, config) {
    return this.axiosInstance.post(url, data, config);
  }
  static async request(config) {
    return this.axiosInstance.request(config);
  }
}