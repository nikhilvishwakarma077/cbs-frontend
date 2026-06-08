import api from "../../../lib/api";

export const getAllCustomers = async () => {
  const response = await api.get("/api/customer");
  
  return response.data;
};

export const getCustomerById = async (id) => {
  const response = await api.get(`/api/customer/${id}`);

  return response.data;
};

export const createCustomer = async (payload) => {
  const response = await api.post("/api/customer", payload);
  return response.data;
};
