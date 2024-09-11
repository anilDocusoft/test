import { getTokenLocal } from "../utils/localStorage.util";
import ApiRoutes from "../configs/endpoints.config";
import HttpClient from "./index.api";
const baseURL = import.meta.env.VITE_API_URL;

class TestApi extends HttpClient {
  constructor() {
    super(baseURL);
    this._initializeRequestInterceptor();
    this._initializeResponseInterceptor();
  }

  _initializeRequestInterceptor = () => {
    this.instance.interceptors.request.use((config) => {
      // config.headers["Authorization"] = `Bearer ${getTokenLocal()}`;
      // config.headers["authority"] ='mydocusoft.com'
      return config;
    });
  };

  _initializeResponseInterceptor = () => {
    this.instance.interceptors.response.use(
      (response) => {
        return response;
      },
      (response) => {
        return Promise.resolve(response);
      }
    );
  };

  Json_GetFoldersConfig = ApiRoutes.Test.Json_GetFolders;
  Json_GetSectionsConfig = ApiRoutes.Test.Json_GetSections;
  Json_GetUDFConfig = ApiRoutes.Test.Json_GetUDF;
  Json_GetClientsByFolderConfig = ApiRoutes.Test.Json_GetClientsByFolder;
  Json_GetUserCommentsConfig = ApiRoutes.Test.Json_GetUserComments;
  Json_GetSubSectionsConfig = ApiRoutes.Test.Json_GetSubSections;
  Json_GetForwardUserListConfig = ApiRoutes.Test.Json_GetForwardUserList;
  Json_GetCategoryConfig = ApiRoutes.Test.Json_GetCategory;
  Json_RegisterItemConfig = ApiRoutes.Test.Json_RegisterItem;
  Json_GetFolderDataConfig = ApiRoutes.Test.Json_GetFolderData;
  Config = ApiRoutes.Test.Json_GetUserComments;

  Json_GetFolders = async (reqBody) => {
    return this.instance({
      method: this.Json_GetFoldersConfig.Method,
      url: this.Json_GetFoldersConfig.Endpoint,
      headers: {},
      data: reqBody,
    });
  };
  Json_RegisterItem = async (reqBody) => {
    return this.instance({
      method: this.Json_RegisterItemConfig.Method,
      url: this.Json_RegisterItemConfig.Endpoint,
      headers: {},
      data: reqBody,
    });
  };
  Json_GetSections = async (reqBody) => {
    return this.instance({
      method: this.Json_GetSectionsConfig.Method,
      url: this.Json_GetSectionsConfig.Endpoint,
      headers: {},
      data: reqBody,
    });
  };
  Json_GetUDF = async (reqBody) => {
    return this.instance({
      method: this.Json_GetUDFConfig.Method,
      url: this.Json_GetUDFConfig.Endpoint,
      headers: {},
      data: reqBody,
    });
  };
  Json_GetClientsByFolder = async (reqBody) => {
    return this.instance({
      method: this.Json_GetClientsByFolderConfig.Method,
      url: this.Json_GetClientsByFolderConfig.Endpoint,
      headers: {},
      data: reqBody,
    });
  };
  Json_GetUserComments = async (reqBody) => {
    return this.instance({
      method: this.Config.Method,
      url: this.Config.Endpoint,
      headers: {},
      data: reqBody,
    });
  };
  Json_GetSubSections = async (reqBody) => {
    return this.instance({
      method: this.Json_GetSubSectionsConfig.Method,
      url: this.Json_GetSubSectionsConfig.Endpoint,
      headers: {},
      data: reqBody,
    });
  };
  Json_GetForwardUserList = async (reqBody) => {
    return this.instance({
      method: this.Json_GetForwardUserListConfig.Method,
      url: this.Json_GetForwardUserListConfig.Endpoint,
      headers: {},
      data: reqBody,
    });
  };
  Json_GetCategory = async (reqBody) => {
    return this.instance({
      method: this.Json_GetCategoryConfig.Method,
      url: this.Json_GetCategoryConfig.Endpoint,
      headers: {},
      data: reqBody,
    });
  };
  Json_GetFolderData = async (reqBody) => {
    return this.instance({
      method: this.Json_GetFolderDataConfig.Method,
      url: this.Json_GetFolderDataConfig.Endpoint,
      headers: {},
      data: reqBody,
    });
  };
  test = async (reqBody) => {
    return this.instance({
      method: this.testConfig.Method,
      url: this.testConfig.Endpoint,
      headers: {},
      data: reqBody,
    });
  };
}

export default TestApi;
