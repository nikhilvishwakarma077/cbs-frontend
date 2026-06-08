import api from "../../../lib/api";

export const uploadDocument = async ({
  customerId,
  docType,
  file,
}) => {
  const formData = new FormData();

  formData.append("customerId", customerId);
  formData.append("docType", docType);
  formData.append("file", file);

  const response = await api.post(
    "/api/document/upload",
    formData,
    {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    }
  );

  return response.data;
};

export const getCustomerDocuments = async (
  customerId
) => {
  const response = await api.get(
    `/api/document/customer/${customerId}`
  );

  return response.data;
};