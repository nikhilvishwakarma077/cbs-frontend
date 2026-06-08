import api from "../../../lib/api";

export const verifyCustomerKyc = async (customerId) => {
  const response = await api.post(
    `/api/kyc/verify/${customerId}`
  );

  return response.data;
};