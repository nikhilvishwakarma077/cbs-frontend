import api from "../../../lib/api";

export const addNominee = async (payload) => {
  const response = await api.post(
    "/api/nominee/add",
    payload
  );

  return response.data;
};

export const getNomineesByAccount = async (
  accountId
) => {
  const response = await api.get(
    `/api/nominee/account/${accountId}`
  );

  return response.data;
};