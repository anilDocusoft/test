export const HttpMethod = {
  Get: "GET",
  Post: "POST",
  Put: "PUT",
  Patch: "PATCH",
  Delete: "DELETE",
};

const ApiRoutes = {
  Auth: {
    Login: {
      Endpoint: "/login",
      Method: HttpMethod.Post,
    },
  },
  Test: {
    Json_GetFolders: {
      Endpoint: "/Json_GetFolders",
      Method: HttpMethod.Post,
    },
    Json_GetSections: {
      Endpoint: "/Json_GetSections",
      Method: HttpMethod.Post,
    },
    Json_GetUDF: {
      Endpoint: "/Json_GetUDF",
      Method: HttpMethod.Post,
    },
    Json_GetClientsByFolder: {
      Endpoint: "/Json_GetClientsByFolder",
      Method: HttpMethod.Post,
    },
    Json_GetUserComments: {
      Endpoint: "/Json_GetUserComments",
      Method: HttpMethod.Post,
    },
    Json_GetSubSections: {
      Endpoint: "/Json_GetSubSections",
      Method: HttpMethod.Post,
    },
    Json_GetForwardUserList: {
      Endpoint: "/Json_GetForwardUserList",
      Method: HttpMethod.Post,
    },
    Json_GetCategory: {
      Endpoint: "/Json_GetCategory",
      Method: HttpMethod.Post,
    },
    Json_RegisterItem: {
      Endpoint: "/Json_RegisterItem",
      Method: HttpMethod.Post,
    },
    Json_GetFolderData: {
      Endpoint: "/Json_GetFolderData",
      Method: HttpMethod.Post,
    },
  }
};

export default ApiRoutes;
