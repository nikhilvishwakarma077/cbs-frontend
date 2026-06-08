import { useEffect, useState } from "react";

import {
  getTransactionsByAccount,
} from "../services/transaction.service";

const useTransactions = (accountId) => {
  const [transactions, setTransactions] =
    useState([]);

  const [loading, setLoading] =
    useState(true);

  const fetchTransactions =
    async () => {
      try {
        setLoading(true);

        const data =
          await getTransactionsByAccount(
            accountId
          );

        setTransactions(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

  useEffect(() => {
    if (accountId) {
      fetchTransactions();
    }
  }, [accountId]);

  return {
    transactions,
    loading,
    fetchTransactions,
  };
};

export default useTransactions;