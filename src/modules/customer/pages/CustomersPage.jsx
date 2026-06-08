import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";

import CustomerTable from "../components/CustomerTable";
import { getAllCustomers } from "../services/customer.service";

function CustomersPage() {
  const [customers, setCustomers] = useState([]);
  const [loading, setLoading] = useState(true);

  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] =
    useState("ALL");

  useEffect(() => {
    const fetchCustomers =
      async () => {
        try {
          const data =
            await getAllCustomers();

          setCustomers(data);
        } catch (error) {
          console.error(error);
        } finally {
          setLoading(false);
        }
      };

    fetchCustomers();
  }, []);

  const filteredCustomers = useMemo(() => {
    return customers
      .slice() // important: original array mutate na ho
      .sort((a, b) => a.customerId - b.customerId) // ASC order by ID
      .filter((customer) => {
        const fullName =
          `${customer.firstName || ""} ${customer.lastName || ""}`;

        const mobile = customer.mobile || "";
        const email = customer.email || "";

        const searchText = search.toLowerCase();

        const matchesSearch =
          fullName.toLowerCase().includes(searchText) ||
          mobile.includes(search) ||
          email.toLowerCase().includes(searchText);

        const matchesStatus =
          statusFilter === "ALL"
            ? true
            : customer.status === statusFilter;

        return matchesSearch && matchesStatus;
      });
  }, [customers, search, statusFilter]);

  const totalCustomers =
    customers.length;

  const verifiedCustomers =
    customers.filter(
      (customer) =>
        customer.status ===
        "VERIFIED"
    ).length;

  const pendingCustomers =
    customers.filter(
      (customer) =>
        customer.status ===
        "PENDING"
    ).length;

  if (loading) {
    return (
      <p>Loading customers...</p>
    );
  }

  return (
    <div className="space-y-8">

      {/* HEADER */}

      <div className="flex flex-col gap-5 rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-3xl font-bold text-zinc-900">
            Customers
          </h1>

          <p className="mt-2 text-zinc-500">
            Manage customer records
          </p>
        </div>

        <Link
          to="/customers/create"
          className="rounded-xl bg-zinc-900 px-5 py-3 font-medium text-white"
        >
          Add Customer
        </Link>
      </div>

      {/* STATS */}

      <div className="grid gap-5 md:grid-cols-3">

        <div className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm">
          <p className="text-sm text-zinc-500">
            Total Customers
          </p>

          <h2 className="mt-3 text-3xl font-bold">
            {totalCustomers}
          </h2>
        </div>

        <div className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm">
          <p className="text-sm text-zinc-500">
            Verified Customers
          </p>

          <h2 className="mt-3 text-3xl font-bold text-green-600">
            {verifiedCustomers}
          </h2>
        </div>

        <div className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm">
          <p className="text-sm text-zinc-500">
            Pending Customers
          </p>

          <h2 className="mt-3 text-3xl font-bold text-orange-500">
            {pendingCustomers}
          </h2>
        </div>

      </div>

      {/* FILTERS */}

      <div className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm">
        <div className="grid gap-4 md:grid-cols-2">

          <input
            type="text"
            placeholder="Search customer..."
            value={search}
            onChange={(e) =>
              setSearch(
                e.target.value
              )
            }
            className="rounded-xl border border-zinc-300 px-4 py-3 outline-none"
          />

          <select
            value={statusFilter}
            onChange={(e) =>
              setStatusFilter(
                e.target.value
              )
            }
            className="rounded-xl border border-zinc-300 px-4 py-3 outline-none"
          >
            <option value="ALL">
              All Status
            </option>

            <option value="PENDING">
              Pending
            </option>

            <option value="VERIFIED">
              Verified
            </option>

            <option value="REJECTED">
              Rejected
            </option>
          </select>

        </div>
      </div>

      {/* TABLE */}

      <div className="overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-sm">
        <div className="border-b border-zinc-200 px-6 py-4">
          <h2 className="text-lg font-semibold text-zinc-800">
            Customer Records
          </h2>

          <p className="mt-1 text-sm text-zinc-500">
            Showing{" "}
            {
              filteredCustomers.length
            }{" "}
            customers
          </p>
        </div>

        <div className="p-6">
          {filteredCustomers.length ===
            0 ? (
            <div className="rounded-xl border border-dashed border-zinc-300 p-10 text-center">
              No customers found
            </div>
          ) : (
            <CustomerTable
              customers={
                filteredCustomers
              }
            />
          )}
        </div>
      </div>

    </div>
  );
}

export default CustomersPage;