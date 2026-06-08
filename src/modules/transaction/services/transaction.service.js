import api from "../../../lib/api";

export const depositAmount = async (payload) => {
  const response = await api.post(
    "/api/transaction/deposit",
    payload
  );

  return response.data;
};

export const withdrawAmount = async (payload) => {
  const response = await api.post(
    "/api/transaction/withdraw",
    payload
  );

  return response.data;
};

export const transferAmount = async (payload) => {
  const response = await api.post(
    "/api/transaction/transfer",
    payload
  );

  return response.data;
};

export const getTransactionsByAccount =
  async (accountId) => {
    const response = await api.get(
      `/api/transaction/account/${accountId}`
    );

    return response.data;
  };