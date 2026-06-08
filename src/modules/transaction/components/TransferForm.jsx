import { useState } from "react";

import { transferAmount } from "../services/transaction.service";

function TransferForm({
  accountId,
  onSuccess,
}) {
  const [formData, setFormData] =
    useState({
      toAccountId: "",
      amount: "",
    });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]:
        e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const amount =
      Number(formData.amount);

    if (amount <= 0) {
      alert("Enter valid amount");
      return;
    }

    if (
      Number(formData.toAccountId) ===
      Number(accountId)
    ) {
      alert(
        "Cannot transfer to same account"
      );
      return;
    }

    try {
      await transferAmount({
        accountId,
        toAccountId:
          Number(formData.toAccountId),
        amount,
      });

      setFormData({
        toAccountId: "",
        amount: "",
      });

      onSuccess?.();
    } catch (error) {
      console.error(error);

      alert("Transfer failed");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-xl border border-zinc-200 p-5"
    >
      <h3 className="mb-4 text-lg font-bold">
        Transfer
      </h3>

      <div className="space-y-3">
        <input
          name="toAccountId"
          type="number"
          placeholder="Receiver Account ID"
          value={formData.toAccountId}
          onChange={handleChange}
          className="w-full rounded-lg border p-3"
        />

        <input
          name="amount"
          type="number"
          placeholder="Amount"
          value={formData.amount}
          onChange={handleChange}
          className="w-full rounded-lg border p-3"
        />
      </div>

      <button className="mt-4 rounded-lg bg-blue-600 px-4 py-2 text-white">
        Transfer Money
      </button>
    </form>
  );
}

export default TransferForm;