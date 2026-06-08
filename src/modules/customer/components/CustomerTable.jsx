import { Link } from "react-router-dom";
import CustomerStatusBadge from "./CustomerStatusBadge";

function CustomerTable({
  customers,
}) {
  if (customers.length === 0) {
    return (
      <div className="rounded-xl border border-dashed border-zinc-300 p-8 text-center">
        No customers found
      </div>
    );
  }

  return (
    <div className="overflow-x-auto">
      <table className="w-full">

        <thead className="border-b border-zinc-200 bg-zinc-50">
          <tr>
            <th className="px-4 py-4 text-left">
              ID
            </th>

            <th className="px-4 py-4 text-left">
              Name
            </th>

            <th className="px-4 py-4 text-left">
              Mobile
            </th>

            <th className="px-4 py-4 text-left">
              Email
            </th>

            <th className="px-4 py-4 text-left">
              City
            </th>

            <th className="px-4 py-4 text-left">
              Status
            </th>

            <th className="px-4 py-4 text-left">
              Action
            </th>
          </tr>
        </thead>

        <tbody>

          {customers.map(
            (customer) => (
              <tr
                key={
                  customer.customerId
                }
                className="border-b border-zinc-100"
              >
                <td className="px-4 py-4">
                  {
                    customer.customerId
                  }
                </td>

                <td className="px-4 py-4 font-medium">
                  {
                    customer.firstName
                  }{" "}
                  {
                    customer.lastName
                  }
                </td>

                <td className="px-4 py-4">
                  {
                    customer.mobile
                  }
                </td>

                <td className="px-4 py-4">
                  {
                    customer.email
                  }
                </td>

                <td className="px-4 py-4">
                  {
                    customer.city
                  }
                </td>

                <td className="px-4 py-4">
                  <CustomerStatusBadge
                    status={
                      customer.status
                    }
                  />
                </td>

                <td className="px-4 py-4">
                  <Link
                    to={`/customers/${customer.customerId}`}
                    className="font-medium text-blue-600"
                  >
                    View
                  </Link>
                </td>
              </tr>
            )
          )}

        </tbody>

      </table>
    </div>
  );
}

export default CustomerTable;