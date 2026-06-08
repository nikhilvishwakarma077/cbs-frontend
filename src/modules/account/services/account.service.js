import api from "../../../lib/api";

export const createAccount = async ({
  customerId,
  accountType,
}) => {
  const response = await api.post(
    "/api/account/create",
    {
      customerId,
      accountType,
    }
  );

  return response.data;
};

export const getAccountById = async (id) => {
  const response = await api.get(
    `/api/account/${id}`
  );

  return response.data;
};

export const getAccountBalance = async (
  accountId
) => {
  const response = await api.get(
    `/api/account/balance/${accountId}`
  );

  return response.data;
};

export const getCustomerAccounts = async (
  customerId
) => {
  const response = await api.get(
    `/api/account/customer/${customerId}`
  );

  return response.data;
};