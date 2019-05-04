import api from "../utils/api";

export const sendAuthData = async ({ username, password }) => {
  const response = await api.post("/auth", {
    username,
    password
  });
  return response;
};
