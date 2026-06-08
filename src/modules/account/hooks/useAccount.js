import { useState } from "react";

import {
  createAccount,
  getAccountById,
  getAccountBalance,
} from "../services/account.service";

const useAccount = () => {
  const [loading, setLoading] = useState(false);

  const handleCreateAccount = async (
    payload
  ) => {
    try {
      setLoading(true);

      const response = await createAccount(
        payload
      );

      return response;
    } catch (error) {
      console.error(error);
      throw error;
    } finally {
      setLoading(false);
    }
  };

  const fetchAccount = async (id) => {
    try {
      setLoading(true);

      return await getAccountById(id);
    } catch (error) {
      console.error(error);
      throw error;
    } finally {
      setLoading(false);
    }
  };

  const fetchBalance = async (accountId) => {
    try {
      return await getAccountBalance(accountId);
    } catch (error) {
      console.error(error);
      throw error;
    }
  };

  return {
    loading,
    handleCreateAccount,
    fetchAccount,
    fetchBalance,
  };
};

export default useAccount;