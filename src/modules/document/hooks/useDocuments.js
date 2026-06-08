import { useEffect, useState } from "react";

import {
  getCustomerDocuments,
} from "../services/document.service";

const useDocuments = (customerId) => {
  const [documents, setDocuments] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchDocuments = async () => {
    try {
      setLoading(true);

      const data = await getCustomerDocuments(
        customerId
      );

      setDocuments(data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (customerId) {
      fetchDocuments();
    }
  }, [customerId]);

  return {
    documents,
    loading,
    fetchDocuments,
  };
};

export default useDocuments;