import { useEffect, useState } from "react";

import {
  getNomineesByAccount,
} from "../services/nominee.service";

const useNominees = (accountId) => {
  const [nominees, setNominees] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchNominees = async () => {
    try {
      setLoading(true);

      const data =
        await getNomineesByAccount(accountId);

      setNominees(data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (accountId) {
      fetchNominees();
    }
  }, [accountId]);

  return {
    nominees,
    loading,
    fetchNominees,
  };
};

export default useNominees;