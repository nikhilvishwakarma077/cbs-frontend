import { useState } from "react";

import useAccount from "../hooks/useAccount";

function AccountCreateCard({
  customer,
  onSuccess,
}) {
  const { handleCreateAccount, loading } =
    useAccount();

  const [accountType, setAccountType] =
    useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!accountType) {
      alert("Please select account type");
      return;
    }

    try {
      const response =
        await handleCreateAccount({
          customerId: customer.customerId,
          accountType,
        });

      if (onSuccess) {
        onSuccess(response);
      }

      alert("Account created successfully");
    } catch (error) {
      console.error(error);

      alert(
        error?.response?.data ||
          "Failed to create account"
      );
    }
  };

  const isVerified =
    customer.status === "VERIFIED";

  return (
    <div className="rounded-2xl border border-zinc-200 bg-white p-6">
      <div className="mb-6">
        <h2 className="text-xl font-bold text-zinc-900">
          Create Bank Account
        </h2>

        <p className="mt-1 text-sm text-zinc-500">
          Create savings or current account
        </p>
      </div>

      {!isVerified && (
        <div className="mb-5 rounded-xl border border-red-200 bg-red-50 p-4">
          <p className="text-sm font-medium text-red-700">
            Customer KYC must be verified
            before account creation
          </p>
        </div>
      )}

      <form
        onSubmit={handleSubmit}
        className="space-y-5"
      >
        <select
          value={accountType}
          onChange={(e) =>
            setAccountType(e.target.value)
          }
          disabled={!isVerified}
          className="w-full rounded-xl border border-zinc-300 p-3"
        >
          <option value="">
            Select Account Type
          </option>

          <option value="SAVINGS">
            Savings Account
          </option>

          <option value="CURRENT">
            Current Account
          </option>
        </select>

        <button
          disabled={!isVerified || loading}
          className="w-full rounded-xl bg-zinc-900 px-5 py-3 font-medium text-white disabled:cursor-not-allowed disabled:opacity-50"
        >
          {loading
            ? "Creating..."
            : "Create Account"}
        </button>
      </form>
    </div>
  );
}

export default AccountCreateCard;