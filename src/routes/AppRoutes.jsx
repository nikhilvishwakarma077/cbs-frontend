import { Routes, Route, Navigate } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";

import CustomersPage from "../modules/customer/pages/CustomersPage";
import CreateCustomerPage from "../modules/customer/pages/CreateCustomerPage";
import CustomerDetailsPage from "../modules/customer/pages/CustomerDetailsPage";
import { useEffect } from "react";
import { getAccountById } from "../modules/account/services/account.service";

function AppRoutes() {

  useEffect(() => {
   const fetch = async (id)=>{
    const res = await getAccountById(id)
    console.log(res)
   }
   getAccountById(9)
  }, [])
  
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/customers" />} />

      <Route element={<MainLayout />}>
        <Route path="/customers" element={<CustomersPage />} />
        <Route path="/customers/create" element={<CreateCustomerPage />} />
        <Route path="/customers/:id" element={<CustomerDetailsPage />} />
      </Route>
    </Routes>
  );
}

export default AppRoutes;
