import { useState } from "react";

import { verifyCustomerKyc } from "../services/kyc.service";

const useVerifyKyc = () => {
  const [loading, setLoading] = useState(false);

  const verifyKyc = async (customerId) => {
    try {
      setLoading(true);

      const response = await verifyCustomerKyc(customerId);

      return response;
    } catch (error) {
      console.error(error);
      throw error;
    } finally {
      setLoading(false);
    }
  };

  return {
    verifyKyc,
    loading,
  };
};

export default useVerifyKyc;